let express = require('express');
let app = express();

// Serve Hello World to match the root /
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Serve static assets
app.use('/public', express.static(__dirname + '/public'));

module.exports = app;
