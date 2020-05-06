const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();

const port = 80;

const image = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-named-dymka-in-the-veterinary-clinic-best-where-it-had-news-photo-1582304174.jpg';

app.get('/', function (req, res) {
  res.send(`<img height="50%" width="50%" src=${image} />`);
});

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(port, () => console.log(`Example app listening at https://localhost:${port}`));
