const fs = require("fs");
const http = require("http");
const https = require('https');

const express = require('express');
const proxy = require("http-proxy-middleware");
const { routes } = require("./reverseproxyconfig.json");
console.log(routes);

const app = express();

const privateKey  = fs.readFileSync('/etc/letsencrypt/live/danielschubert.dev/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/danielschubert.dev/fullchain.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

app.get("/", (req, res) => {
	res.end("Hello world!!!");
	// TODO: send html file instead
});

for(const route of routes) {
	console.log(route.route);
	app.use(route.route, proxy({
		target: route.address,
		pathRewrite: (path) => path.split('/').slice(2).join('/')
	}));
}

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, (err) => {
	if(err) { return console.log(err); }
	console.log("Listening at port 443");
});
