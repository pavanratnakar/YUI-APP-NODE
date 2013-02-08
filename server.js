var express = require('express'),
	app = express();

app.use('/weather', express.static(__dirname + '/weather'));
app.get('/', function (req, res) {
	res.sendfile('index.html');
});
app.get('*', function (req, res) {
    res.redirect('/#' + req.url);
});
app.listen(process.env.PORT || 3000);