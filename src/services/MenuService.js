const Menu = require("../models/Menu");
const ResponseClass = require("../utils/response.js");

const getAllMenu = async () => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const menu = await Menu.findAll();
    responseSuccess.message = "Get All Menu Success";
    responseSuccess.data = menu;
    return responseSuccess;
  } catch (error) {
    responseError.message = error.message;
    return responseError;
  }
};

const getMenuById = async (id) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const menu = await Menu.findOne({
      where: {
        id: id,
      },
    });
    responseSuccess.message = "Get Menu By Id Success";
    responseSuccess.data = menu;
    return responseSuccess;
  } catch (error) {
    responseError.message = error.message;
    return responseError;
  }
};

const deleteMenu = async (id) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const menu = await Menu.destroy({
      where: {
        id: id,
      },
    });
    responseSuccess.message = "Delete Menu Success";
    responseSuccess.data = menu;
    return responseSuccess;
  } catch (error) {
    responseError.message = error.message;
    return responseError;
  }
};

const updateMenu = async (id, requestBody) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const menu = await Menu.update(
      {
        name: requestBody.name,
        kkal: requestBody.kkal,
        description: requestBody.description,
        image: requestBody.image,
      },
      {
        where: {
          id: id,
        },
      }
    );
    responseSuccess.message = "Update Menu Success";
    responseSuccess.data = menu;
    return responseSuccess;
  } catch (error) {
    responseError.message = error.message;
    return responseError;
  }
};

const createMenu = async (requestBody) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const menu = await Menu.create({
      name: requestBody.name,
      kkal: requestBody.kkal,
      description: requestBody.description,
      image: requestBody.image,
    });
    responseSuccess.message = "Create Menu Success";
    responseSuccess.data = menu;
    return responseSuccess;
  } catch (error) {
    responseError.message = error.message;
    return responseError;
  }
};

module.exports = {
  getAllMenu,
  getMenuById,
  deleteMenu,
  updateMenu,
  createMenu,
};
