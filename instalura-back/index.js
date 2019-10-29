const app = require('./infra/custom-express')();
app.listen(process.env.PORT || 3000, () => 'Listening on port 3000');