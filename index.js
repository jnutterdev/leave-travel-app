const express = require('express')
const ejs = require('ejs');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('<html><body><h1>Coming soon!</h1></body></html>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})