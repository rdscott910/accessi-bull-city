const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/AccessiBullCity', {useNewUrlParser: true})


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const dataRoutes = require('./routes/generate_data');

app.use('/data', dataRoutes);

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

const port = 8000;


app.listen(port);

console.log('Server listening on:', port);