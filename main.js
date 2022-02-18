const fs = require("fs");
const http = require("http");
const https = require('https');

const express = require('express');
const proxy = require("http-proxy-middleware");
const { routes } = require("./reverseproxyconfig.json");

const app = express();

let credentials;
try {
	const privateKey  = fs.readFileSync('/etc/letsencrypt/live/danielschubert.dev/privkey.pem', 'utf8');
	const certificate = fs.readFileSync('/etc/letsencrypt/live/danielschubert.dev/fullchain.pem', 'utf8');
	credentials = { key: privateKey, cert: certificate };
} catch (error) {
	console.log('Cannot find TLS private key and certificate, defaulting to using an unsecure HTTP server.');
}

app.use(express.static("./public"));

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

const server = credentials ? https.createServer(credentials, app) : http.createServer(app);
const port = process.env.PORT || (credentials ? 443 : 80);

server.listen(port, (err) => {
	if(err) { return console.log(err); }
	console.log(`Listening at port ${port}`);
});

server.on("upgrade", (req, socket, head) => {
	wsProxies[req.url].upgrade(req, socket, head);
});

