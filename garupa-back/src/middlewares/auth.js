const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  const token = request.headers['x-access-token'];

  if (!token) {
    return response.status(401).send({ message: 'Token não presente na requisição' });
  }

  jwt.verify(token, '26626f23f33687e3e206cbce0c39bcd6', (err, decoded) => {
    if (err) {
      return response.status(401).send({ message: 'Usuário não autenticado' });
    }

    request.user = decoded;
    next();
  })
}