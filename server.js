var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 3000;

// public folder set to serve public assets
app.use(express.static(__dirname + '/public'));

// set up single route to index.html
app.get('*', function(req,res){
  res.sendfile(path.join(__dirname + '/public/views/index.html'));
});

// server
app.listen(port);
console.log('running on server ' + port);