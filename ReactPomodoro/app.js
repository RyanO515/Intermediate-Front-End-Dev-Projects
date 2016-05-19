var express = require("express"),
	  app     = express();

const PORT = process.env.PORT || 3000;

//redirect https traffic to http
//OpenWeatherMap API only supports http traffic
app.use(function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));


app.listen(PORT, function () {
	console.log("Server is running!!!");
});
