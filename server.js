const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const http = require('http');
const express = require('express');
const pool = require('./config/db.config');
const index = require('./server/routes/index.route');
const app = express();

// compressing api response
app.use(compression());

// logger
app.use(morgan('dev'));

// cors enable
app.options('*', cors());
app.use(cors({ origin: 'http://45.141.79.18:5000/' }));

// security config
app.use(helmet());

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database connection
pool.query(`USE ${'heroku_61f267996224c60'}`);
global.pool = pool;

// connection with client setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// all the api routes
app.use('/api', index);

// port initialized
const PORT = process.env.PORT || 5000;

// server setup
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
