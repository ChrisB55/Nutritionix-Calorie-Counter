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

app.listen(8080);
console.log('8080 is the magic port');

