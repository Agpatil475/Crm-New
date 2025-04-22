const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/database');
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Database connection
db.authenticate()
  .then(() => {
    console.log('Database connected...');
    return db.sync();
  })
  .then(() => {
    console.log('Models synchronized with database');
  })
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});