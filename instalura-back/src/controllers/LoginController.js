const jwt = require('jsonwebtoken');
const UserDAO = require('../dao/UserDAO');
const md5 = require('md5');

class LoginController {

  login() {
    return async (request, response) => {
      const { user, password } = request.body;
      const passwordCrypto = md5(password);


      const connection = require('../dao/connectionFactory')();
      const userDAO = new UserDAO(connection);

      try {
        const data = await userDAO.login(user, passwordCrypto);
        if (data && data.length > 0) {
          const userData = data[0];
          const token = jwt.sign(userData, process.env.SECRET, { expiresIn: '30 days' });
          response.status(200).json({ token, user: userData });
        } else {
          response.status(401).send('Usuário não encontrado');
        }
      } catch (err) {
        response.status(500).send(err);
      }
    }
  }

  logout() {
    return (request, response) => {
      response.send('logout');
    }
  }
}

module.exports = LoginController;