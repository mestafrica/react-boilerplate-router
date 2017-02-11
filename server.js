var express = require('express');
var path = require('path');

//create express app
var app = express();
var port = process.env.PORT || 3000;

/*
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});
*/

//tell express which folder to server
app.use(express.static("public"));

//start app
app.listen(port, function() {
   console.log('App is running on port 3000');
});