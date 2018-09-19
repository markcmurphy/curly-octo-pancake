const express = require('express');
const app = express();

const airport = require('./controllers/airports.js');
app.use('/airports', airport);

app.listen(3000, () => {
  console.log('listening');
});
