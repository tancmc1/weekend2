'use strict';

// ==================================================
// getting all the tools we need
// ==================================================
const express = require('express');
const routes = require('.routes/index.js');
const port = process.env.PORT || 3000;


const app = express();


// ==================================================
// setup our express application
// ==================================================
app.use('/public', express.static(process.cwd() + 'public'));
app.set('view engine', 'ejs');


// ==================================================
// setup routes
// ==================================================
routes(app);


// ==================================================
// start our server
// ==================================================
app.listen(port, function () {
  console.log('Server listening on port ' + port + '...');
});