const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

const port = 8000;


app.listen(port);

console.log('Server listening on:', port);