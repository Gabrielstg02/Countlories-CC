const { User } = require("../models/user");
const { History } = require("../models/history");
const { Favorite } = require("../models/favorite");
const ResponseClass = require("../utils/response.js");

const getAllUsers = async () => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const users = await User.findAll();
    responseSuccess.message = "Get All Users Success";
    responseSuccess.data = users;
    return responseSuccess;
  } catch (error) {
    responseError.message = error.message;
    return responseError;
  }
};

const getUserById = async (id) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const user = await User.findOne({
      where: {
        id: id,
      },
    });
    responseSuccess.message = "Get User By Id Success";
    responseSuccess.data = user;
    return responseSuccess;
  } catch (error) {
    responseError.message = error.message;
    return responseError;
  }
};

const deleteUser = async (id) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const user = await User.destroy({
      where: {
        id: id,
      },
    });
    responseSuccess.message = "Delete User Success";
    responseSuccess.data = user;
    return responseSuccess;
  } catch (error) {
    responseError.message = error.message;
    return responseError;
  }
};

const updateUser = async (id, requestBody) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const user = await User.update(
      {
        name: requestBody.name,
        email: requestBody.email,
        password: requestBody.password,
      },
      {
        where: {
          id: id,
        },
      }
    );
    responseSuccess.message = "Update User Success";
    responseSuccess.data = user;
    return responseSuccess;
  } catch (error) {
    responseError.message = error.message;
    return responseError;
  }
};

const getUserHistory = async (id) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const history = await History.findAll({
      where: {
        userId: id,
      },
    });
    responseSuccess.message = "Get User History Success";
    responseSuccess.data = history;
    return responseSuccess;
  } catch (error) {
    responseError.message = error.message;
    return responseError;
  }
};

const getUserFavorite = async (id) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const favorite = await Favorite.findAll({
      where: {
        userId: id,
      },
    });
    responseSuccess.message = "Get User Favorite Success";
    responseSuccess.data = favorite;
    return responseSuccess;
  } catch (error) {
    responseError.message = error.message;
    return responseError;
  }
};

module.exports = {
  getUserById,
  getAllUsers,
  deleteUser,
  updateUser,
  getUserHistory,
  getUserFavorite,
};
