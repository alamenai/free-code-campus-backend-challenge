let express = require('express');
let app = express();

// Serve Hello World to match the root /
app.get('/', function (req, res) {
  console.log('Hello World');
  res.end();
});
module.exports = app;
