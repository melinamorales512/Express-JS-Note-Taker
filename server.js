const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  public folder
app.use(express.static('public'));

//  apiRoutes
app.use(apiRoutes);
app.use('/', htmlRoutes);

//listener
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});