const MainDAO = require('../dao/MainDAO');

class MainController {
  like() {
    return async (request, response) => {
      const { user } = request;
      
      const connection = require('../dao/connectionFactory')();
      const mainDAO = new MainDAO(connection);

      try {
        const result = await mainDAO.like(user.userid);
        return response.status(200).send(result);
      } catch (err) {
        return response.status(500).send(err)
      }
    }
  }

  deslike() {
    return async (request, response) => {
      const { user } = request;

      const connection = require('../dao/connectionFactory')();
      const mainDAO = new MainDAO(connection);

      try {
        const result = await mainDAO.deslike(user.userid);
        return response.status(200).send(result);
      } catch (err) {
        return response.status(500).send(err);
      }
    }
  }

  getLikes() {
    return async (request, response) => {
      const connection = require('../dao/connectionFactory')();
      const mainDAO = new MainDAO(connection);

      try {
        const result = await mainDAO.getLikes();
        return response.status(200).send(result);
      } catch (err) {
        return response.status(500).send(err);
      }
    }
  }
}

module.exports = MainController;