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
        // verifica informações no banco
        const userResult = await userDAO.login(user, passwordCrypto);
        if (userResult) {
          // gera token
          const token = jwt.sign(userResult, '26626f23f33687e3e206cbce0c39bcd6', { expiresIn: '30 days' });
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