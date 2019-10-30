const MainController = require('../controllers/MainController');
const auth = require('../middlewares/auth');
const mainController = new MainController();
module.exports = app => {
  const apiRoute = '/api/v1';
  app.post(`${apiRoute}/main/like`, auth, mainController.like());
  app.post(`${apiRoute}/main/deslike`, auth, mainController.deslike());
  app.get(`${apiRoute}/main/likes`, auth, mainController.getLikes());
}