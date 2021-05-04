const express = require('express');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const usersRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const app = express();
const dotenv = require('dotenv');

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;
const ports = process.env.PORT ||3000;
const accessTokenSecret = 'youraccesstokensecret';
app.use(express.json())
const users = [
  {
      username: 'john',
      password: 'password123admin',
      role: 'admin'
  }, {
      username: 'anna',
      password: 'password123member',
      role: 'member'
  }
];

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.post('/login', authRoutes);

app.listen(ports, () => console.log(`Listening on port ${ports}`));

//sudo kill -9 $(sudo lsof -t -i:3000)
