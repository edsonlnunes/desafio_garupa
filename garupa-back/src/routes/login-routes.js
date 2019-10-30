const LoginController = require('../controllers/LoginController');
const loginController = new LoginController();

module.exports = app => {
    const apiRoute = '/api';
    app.post(`${apiRoute}/login`, loginController.login());
    app.post(`${apiRoute}/logout`, loginController.logout());
}