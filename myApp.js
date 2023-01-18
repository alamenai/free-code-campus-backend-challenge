let express = require('express');
let app = express();

// To load environment variables
require('dotenv').config();

app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

app.get(
  '/now',
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get('/:word/echo', function (req, res) {
  const word = req.params.word;
  res.json({ echo: word });
});
app.get('/name?', function (req, res) {
  const queryObject = req.query;
  res.json({ name: queryObject.first + ' ' + queryObject.last });
});

// Serve Hello World to match the root /
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app;
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
