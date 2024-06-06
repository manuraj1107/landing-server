const express = require('express');
const request = require('request');
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/spline-scene', (req, res) => {
  const url = 'https://prod.spline.design/4SilPEc77alGeIFM/scene.splinecode';
  request(url).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
