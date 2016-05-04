var express = require("express"),
	  app     = express();

const PORT = process.env.PORT || 3000;

//redirect https traffic to http
app.use(function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'http') {
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});

app.use(express.static('public'));


app.listen(PORT, function () {
	console.log("Server is running!!!");
});
