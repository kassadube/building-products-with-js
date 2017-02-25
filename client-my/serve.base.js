/* eslint no-console: 0 */
// start webpack
const path = require('path');
const express = require('express');

// create express
const app = express();

// serve statics
app.use(express.static(__dirname));
// serve index
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
// start server
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port 3000');
});
