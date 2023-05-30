const { User } = require("../models/user");

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

module.exports = {
  getAllUsers,
  deleteUser,
  updateUser,
};
