const express = require('express');
const app = express();

const airportsController = require('./controllers/airports.js');
app.use('/airports', airportsController);

app.listen(3000, () => {
  console.log('listening');
});
