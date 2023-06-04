const jwt = require("jsonwebtoken");
const ResponseClass = require("../utils/response.js");

//verify token for login authorization function
const verifyToken = (req, res, next) => {
  const responseError = new ResponseClass.ErrorResponse();
  const token = req.headers["authorization"];
  if (token == null) {
    responseError.message = "You are not authorized";
    responseError.code = 401;
    return res.json(responseError);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      responseError.message = err.message;
      responseError.code = 403;
      return res.json(responseError);
    }
    req.userId = decoded.userId;
    req.email = decoded.email;
    next();
  });
};

module.exports = {
  verifyToken,
};
