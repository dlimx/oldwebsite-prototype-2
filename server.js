const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// server variables
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 5000;

// express server
const server = express();

function requireHTTPS(req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(301, 'https://' + req.get('host') + req.url);
  }
  next();
}

// add middleware
server.use(morgan('combined'));
server.use(
  '/',
  express.static(path.join(__dirname, 'public'), { maxAge: 86400000 })
);
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

// production only environment
if (IS_PRODUCTION) {
  console.log(process.env);
  server.use(requireHTTPS);
  server.use(compression());
}

console.log('Server hosted on port ' + PORT);
server.listen(PORT);
