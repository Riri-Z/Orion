const express = require('express');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const usersRoutes = require('./routes/user.routes.js');
const loginRoute = require('./routes/auth.routes.js');
const app = express();

const ports = process.env.PORT ||3000;
const accessTokenSecret = 'youraccesstokensecret';
 
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

app.post('/login', loginRoute);
app.listen(ports, () => console.log(`Listening on port ${ports}`));

//sudo kill -9 $(sudo lsof -t -i:3000)
