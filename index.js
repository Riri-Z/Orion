const express = require('express');
const bodyParser = require('body-parser')

const usersRoutes = require('./routes/user.routes.js');
const app = express();

const ports = process.env.PORT ||3000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.listen(ports, () => console.log(`Listening on port ${ports}`));

//sudo kill -9 $(sudo lsof -t -i:3000)
