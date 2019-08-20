const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');


mongoose.connect('mongodb://localhost/AccessiBullCity', {useNewUrlParser: true})

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const dataRoutes = require('./routes/generate_data');
const reviewRoutes = require('./routes/reviews');
const restaurantRoutes = require('./routes/restaurants');

app.use('/data', dataRoutes);
app.use('/reviews', reviewRoutes);
app.use('/restaurants', restaurantRoutes);

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

// Server setup
const port = 8000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);