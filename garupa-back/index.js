const app = require('./infra/custom-express')();
app.listen(process.env.PORT || 3001, () => 'Listening on port 3000');