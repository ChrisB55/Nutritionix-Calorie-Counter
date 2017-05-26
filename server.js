// load the things we need
var express = require('express');
var app = express();

// set the view engine to html, require ejs require
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//allows static assets, such as js/app.js to be used. 
app.use(express.static('public'))
// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});

var port = process.env.PORT || 8080;
app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});

