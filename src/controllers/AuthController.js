const AuthService = require("../services/AuthService.js");
const ResponseClass = require("../utils/response.js");

//register function
const register = async (req, res) => {
  try {
    res.json(await AuthService.registerUser(req.body));
  } catch (error) {
    console.log(error);
  }
};

//login function
const login = async (req, res) => {
  try {
    var loginResult = await AuthService.loginUser(req.body);

    //if login result is success
    if (loginResult.code == 200) {
      var responseSuccess = new ResponseClass.SuccessResponse();

      //return response cookie with refresh_token
      res.cookie("refreshToken", loginResult.refresh_token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      //return response
      responseSuccess.message = "Login Success";
      responseSuccess.data = {
        object: "authentication_token",
        userId: loginResult.userId,
        email: req.body.email,
        authentication_token: loginResult.accessToken,
      };

      res.json(responseSuccess);
    } else {
      //return error response
      res.json(loginResult);
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res, next) => {
  try {
    var logoutResult = await AuthService.logoutUser(req.cookies.refreshToken);

    if (logoutResult.code == 200) {
      res.clearCookie("refreshToken");
    }

    res.json(logoutResult);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  register,
  login,
  logout,
};
