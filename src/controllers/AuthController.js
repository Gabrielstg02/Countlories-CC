const UsersService = require("../services/UserService.js");
const ResponseClass = require("../models/response.model.js");

//register function
const register = async (req, res) => {
  try {
    res.json(await UsersService.registerUsers(req.body));
  } catch (error) {
    console.log(error);
  }
};

//login function
const login = async (req, res) => {
  try {
    var loginResult = await UsersService.loginUsers(req.body);

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

//logout function
const logout = async (req, res) => {
  try {
    var responseSuccess = new ResponseClass.SuccessWithNoDataResponse();

    //return response cookie with refresh_token
    res.cookie("refreshToken", "", {
      maxAge: 0,
    });

    //return response
    responseSuccess.message = "Logout Success";

    res.json(responseSuccess);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
  logout,
};
