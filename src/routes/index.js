const router = require('express').Router();
// const { userController } = require('../controllers');


// router nanti disini

app.get('/', (req, res) => {
  res.json({'Message': 'ok'})
})

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});

  return;
});