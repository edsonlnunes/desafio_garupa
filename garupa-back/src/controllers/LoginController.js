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
        const userResult = await userDAO.login(user, passwordCrypto);
        if (userResult) {
          const token = jwt.sign(userResult, process.env.SECRET, { expiresIn: '30 days' });
          response.status(200).json({ token, userResult });
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