const fs = require("fs");
const http = require("http");
const https = require('https');

const express = require('express');
const proxy = require("http-proxy-middleware");
const { routes } = require("./reverseproxyconfig.json");

const app = express();

const privateKey  = fs.readFileSync('/etc/letsencrypt/live/danielschubert.dev/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/danielschubert.dev/fullchain.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

app.get("/", (req, res) => {
	res.end("Hello world!!!");
	// TODO: send html file instead
});

for(const route of routes) {
	app.use(route.route, proxy({
		target: route.address,
		pathRewrite: (path) => path.split('/').slice(2).join('/')
	}));
}
const wsProxyConfig = [
	{
		route: "/spotify-tracker",
		address: "http://localhost:1002"
	},
	{	route: "/playlist-art",
		address: "http://localhost:1003"
	}
];
const wsProxies = {};
for(const wsConfig of wsProxyConfig) {
	const wsProxy = proxy({
		target: wsConfig.address,
		ws: true,
		logLevel: "warn"
	});
	app.use(wsConfig.route, wsProxy);
	wsProxies[wsConfig.route] = wsProxy;
}

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, (err) => {
	if(err) { return console.log(err); }
	console.log("Listening at port 443");
});

httpsServer.on("upgrade", (req, socket, head) => {
	wsProxies[req.url].upgrade(req, socket, head);
});

