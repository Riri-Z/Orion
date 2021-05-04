const User = require ('../models/user.model')
const jwt = require('jsonwebtoken');

const JWT_PRIVATE_KEY = "youraccesstokensecret";
class authController {

  static async login(req, res) {
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
    // Read username and password from request body
    const { username, password } = req.body;
    const accessTokenSecret = process.env.TOKEN_SECRET;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
      // Generate an access token
      const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, {
        algorithm: "HS256",
        expiresIn: 10, //jwtExpirySeconds   => .env
      });

      res.json({
        accessToken
      });
    } else {
      res.send('username or password incorrect');
    }
  }
}

module.exports = authController