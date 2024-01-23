var http = require("http");

http.createServer(function (req, res) {
	res.write("Alive");
	res.end();
}).listen(8080, "0.0.0.0");
