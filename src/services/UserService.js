const db = require("../models");
const User = db["User"];
const History = db["History"];
const Favorite = db["Favorite"];
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
    responseError.code = 500;
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
    responseError.code = 500;
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
    responseError.code = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const updateUser = async (id, requestBody) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const user = await User.update(requestBody, {
      where: {
        id: id,
      },
    });
    responseSuccess.message = "Update User Success";
    responseSuccess.data = user;
    return responseSuccess;
  } catch (error) {
    responseError.code = 500;
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
        UserId: id,
      },
      include: [
        {
          model: db["Menu"],
          as: "menu",
        },
      ],
    });
    responseSuccess.message = "Get User History Success";
    responseSuccess.data = history;
    return responseSuccess;
  } catch (error) {
    responseError.code = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const createUserHistory = async (requestBody) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const history = await History.create({
      UserId: requestBody.userId,
      MenuId: requestBody.menuId,
      image: requestBody.image,
    });
    responseSuccess.message = "Create User History Success";
    responseSuccess.data = history;
    return responseSuccess;
  } catch (error) {
    responseError.code = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const deleteUserHistory = async (id) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const history = await History.destroy({
      where: {
        id: id,
      },
    });
    if (history == 0) {
      responseError.code = 404;
      responseError.message = "History Not Found";
      return responseError;
    }
    responseSuccess.message = "Delete User History Success";
    responseSuccess.data = history;
    return responseSuccess;
  } catch (error) {
    responseError.code = 500;
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
        UserId: id,
      },
      include: [
        {
          model: db["Menu"],
          as: "menu",
        },
      ],
    });
    responseSuccess.message = "Get User Favorite Success";
    responseSuccess.data = favorite;
    return responseSuccess;
  } catch (error) {
    responseError.code = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const createUserFavorite = async (requestBody) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    console.log(requestBody);
    const favorite = await Favorite.create({
      UserId: requestBody.userId,
      MenuId: requestBody.menuId,
    });
    responseSuccess.message = "Create User Favorite Success";
    responseSuccess.data = favorite;
    return responseSuccess;
  } catch (error) {
    responseError.code = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const deleteUserFavorite = async (id) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const favorite = await Favorite.destroy({
      where: {
        id: id,
      },
    });
    if (favorite == 0) {
      responseError.code = 404;
      responseError.message = "Favorite Not Found";
      return responseError;
    }
    responseSuccess.message = "Delete User Favorite Success";
    responseSuccess.data = favorite;
    return responseSuccess;
  } catch (error) {
    responseError.code = 500;
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
  createUserHistory,
  deleteUserHistory,
  getUserFavorite,
  createUserFavorite,
  deleteUserFavorite,
};
