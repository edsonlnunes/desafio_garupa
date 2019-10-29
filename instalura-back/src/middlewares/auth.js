const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  const token = request.headers['x-access-token'];

  if (!token) {
    return response.status(401).send({ message: 'Token não presente na requisição' });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return response.status(401).send({ message: 'Usuário não autenticado' });
    }

    request.user = decoded;
    next();
  })
}