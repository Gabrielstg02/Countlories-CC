const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ResponseClass = require("../utils/response.js");
const User = db["User"];
const { validatePassword } = require("../utils/password.js");

const registerUser = async (requestBody) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  //check if password or email is empty
  if (!requestBody?.email || !requestBody?.password) {
    responseError.message = "Email or Password missing";
    return responseError;
  }
  //regex for email format
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (emailRegexp.test(requestBody.email) == false) {
    responseError.message = "Email is invalid";
    return responseError;
  }

  //SELECT ... where email = requestbody.email LIMIT 1
  const emailRegistered = await User.findOne({
    where: { email: requestBody.email },
  });

  if (emailRegistered) {
    responseError.message = "Email has been registered";
    return responseError;
  }
  //validate method from users model
  const passValidation = validatePassword(requestBody.password, false);
  if (!passValidation) {
    responseError.message = validatePassword(requestBody.password, true);
    return responseError;
  }
  // if (requestBody.password !== requestBody.confirmPassword) {
  //   responseError.message = "Password and Confirm Password not match";
  //   return responseError;
  // }

  const salt = await bcrypt.genSalt();
  const hashPass = await bcrypt.hash(requestBody.password, salt);
  try {
    //add User
    await User.create({
      name: requestBody.name,
      email: requestBody.email,
      password: hashPass,
    });

    //return response success
    responseSuccess.message = "Register Success";
    responseSuccess.data = {
      name: requestBody.name,
      email: requestBody.email,
      password: requestBody.password,
    };
    responseSuccess.code = 201;
    return responseSuccess;
  } catch (error) {
    console.log(error);

    //return server error response
    responseError.code = 500;
    responseError.message = error;

    return responseError;
  }
};

const loginUser = async (requestBody) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();

  //check if email and password is empty
  if (!requestBody?.email || !requestBody?.password) {
    responseError.message = "Email or Password missing";
    return responseError;
  } else {
    //find email from request body in database
    const userRegistered = await User.findOne({
      where: { email: requestBody.email },
      attributes: {
        include: ["password"],
      },
    });

    if (userRegistered == null) {
      responseError.message = "Email not found!";
      return responseError;
    } else {
      //compare request body password with password in database
      try {
        const matchPassword = await bcrypt.compare(
          requestBody.password,
          userRegistered.password
        );
        //if pass not match
        if (!matchPassword) {
          responseError.message = "Wrong Password!";
          return responseError;
        } else {
          const resultToken = generateToken(userRegistered);

          //update refresh token to database
          await User.update(
            { refresh_token: resultToken.refreshToken },
            {
              where: {
                id: userRegistered.id,
              },
            }
          );

          //return login result response
          const loginResult = {
            status: true,
            userId: userRegistered.id,
            refresh_token: resultToken.refreshToken,
            accessToken: resultToken.accessToken,
          };

          return loginResult;
        }
      } catch (error) {
        responseError.code = 500;
        responseError.message = error.message;

        return responseError;
      }
    }
  }
};

const logoutUser = async (refreshToken) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessWithNoDataResponse();

  if (!refreshToken) {
    responseSuccess.code = 204;
    responseSuccess.message = "The Request did not return any content";
    return responseSuccess;
  }

  try {
    const loginUser = await User.findOne({
      where: { refresh_token: refreshToken },
    });

    if (loginUser !== null) {
      await User.update(
        { refresh_token: null },
        { where: { id: loginUser.id } }
      );
    } else {
      responseSuccess.code = 204;
      responseSuccess.message = "The Request did not return any content";
      return responseSuccess;
    }

    responseSuccess.code = 200;
    responseSuccess.message = "You've Been Logged Out";
    return responseSuccess;
  } catch (error) {
    console.log(error);
    responseError.code = 500;
    responseError.message = error;
    return responseError;
  }
};

function generateToken(userRegistered) {
  const userId = userRegistered.id;
  const name = userRegistered.name;
  const email = userRegistered.email;
  //create access token for authorization using jwt
  const accessToken = jwt.sign(
    { userId, name, email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );

  //create refresh token using jwt
  const refreshToken = jwt.sign(
    { userId, name, email },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "30d",
    }
  );

  const token = {
    refreshToken: refreshToken,
    accessToken: accessToken,
  };

  return token;
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
