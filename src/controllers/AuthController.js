const AuthService = require("../services/AuthService.js");
const ResponseClass = require("../utils/response.js");

//register function
const register = async (req, res) => {
  try {
    const User = await AuthService.registerUser(req.body);
    res.status(User.code).json(User);
  } catch (error) {
    console.log(error);
  }
};

//login function
const login = async (req, res) => {
  try {
    var loginResult = await AuthService.loginUser(req.body);

    //if login result is success
    if (loginResult.status) {
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
        name: loginResult.name,
        email: req.body.email,
        authentication_token: loginResult.accessToken,
      };

      res.status(responseSuccess.code).json(responseSuccess);
    } else {
      //return error response
      res.status(loginResult.code).json(loginResult);
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  try {
    var logoutResult = await AuthService.logoutUser(req.cookies.refreshToken);

    if (logoutResult.code == 200) {
      res.clearCookie("refreshToken");
    }

    res.status(logoutResult.code).json(logoutResult);
  } catch (error) {
    console.log(error);
  }
};

const loginAdmin = async (req, res) => {
  try {
    console.log(req.body);
    var loginResult = await AuthService.loginUser(req.body, "admin");

    //if login result is success
    if (loginResult.status) {
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
        name: loginResult.name,
        email: req.body.email,
        authentication_token: loginResult.accessToken,
      };

      res.status(responseSuccess.code).json(responseSuccess);
    } else {
      //return error response
      res.status(loginResult.code).json(loginResult);
    }
  } catch (error) {
    console.log(error);
  }
};

const logoutAdmin = async (req, res, next) => {
  try {
    var logoutResult = await AuthService.logoutUser(
      req.cookies.refreshToken,
      "admin"
    );

    if (logoutResult.code == 200) {
      res.clearCookie("refreshToken");
    }

    res.status(logoutResult.code).json(logoutResult);
  } catch (error) {
    console.log(error);
  }
};

const refreshToken = async (req, res) => {
  try {
    var refreshTokenResult = await AuthService.refreshToken(
      req.cookies.refreshToken
    );

    if (refreshTokenResult.status) {
      var responseSuccess = new ResponseClass.SuccessResponse();

      //return response cookie with refresh_token
      res.cookie("refreshToken", refreshTokenResult.refresh_token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      //return response
      responseSuccess.message = "Refresh Token Success";
      responseSuccess.data = {
        object: "authentication_token",
        userId: refreshTokenResult.userId,
        name: refreshTokenResult.name,
        email: refreshTokenResult.email,
        authentication_token: refreshTokenResult.accessToken,
      };

      res.status(responseSuccess.code).json(responseSuccess);
    } else {
      //return error response
      res.status(refreshTokenResult.code).json(refreshTokenResult);
    }
  } catch (error) {
    console.log(error);
  }
};

const refreshTokenAdmin = async (req, res) => {
  try {
    var refreshTokenResult = await AuthService.refreshToken(
      req.cookies.refreshToken,
      "admin"
    );

    if (refreshTokenResult.status) {
      var responseSuccess = new ResponseClass.SuccessResponse();

      //return response cookie with refresh_token
      res.cookie("refreshToken", refreshTokenResult.refresh_token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      //return response
      responseSuccess.message = "Refresh Token Success";
      responseSuccess.data = {
        object: "authentication_token",
        userId: refreshTokenResult.userId,
        name: refreshTokenResult.name,
        email: refreshTokenResult.email,
        authentication_token: refreshTokenResult.accessToken,
      };

      res.status(responseSuccess.code).json(responseSuccess);
    } else {
      //return error response
      res.status(refreshTokenResult.code).json(refreshTokenResult);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  loginAdmin,
  logoutAdmin,
  refreshToken,
  refreshTokenAdmin,
};
