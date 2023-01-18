let express = require('express');
let app = express();

// To load environment variables
require('dotenv').config();

app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

// Serve Hello World to match the root /
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Serve static assets
app.use('/public', express.static(__dirname + '/public'));

//
app.get('/json', function (req, res) {
  const data = {
    message: 'Hello json',
  };
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    data.message = data.message.toUpperCase();
  }

  res.json(data);
});
module.exports = app;
