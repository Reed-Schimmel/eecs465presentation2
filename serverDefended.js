const express = require('express');
const fs = require('fs');
const https = require('https');
const toobusy = require('toobusy-js');

const app = express();
const port = 80;
const image = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-named-dymka-in-the-veterinary-clinic-best-where-it-had-news-photo-1582304174.jpg';

// middleware which blocks requests when we're too busy
app.use(function(req, res, next) {
  if (toobusy()) res.send(503, "I'm busy right now, sorry.");
  else next();
});

app.get('/', function (req, res) {
  res.send(`<img height="50%" width="50%" src=${image} />`);
});

const server = https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(port, () => console.log(`Example app listening at https://localhost:${port}`));

process.on('SIGINT', function() {
  server.close();
  // calling .shutdown allows your process to exit normally
  toobusy.shutdown();
  process.exit();
});
