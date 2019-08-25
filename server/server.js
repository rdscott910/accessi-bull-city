const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const http = require('http');


// mongoose.connect('mongodb://localhost/AccessiBullCity', {useNewUrlParser: true})
mongoose.connect(keys.MONGODB_URI, { useNewUrlParser: true })

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

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// Server setup
const port = proccess.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);