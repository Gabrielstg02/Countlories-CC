const UserService = require("../services/UserService.js");
const ImageService = require("../services/ImageService.js");
const ResponseClass = require("../utils/response.js");
const RequestValidator = require("../utils/request.js");

const getUserById = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.status(user.code).json(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(users.code).json(users);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    res.status(user.code).json(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    res.status(user.code).json(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const getUserHistory = async (req, res) => {
  try {
    const history = await UserService.getUserHistory(req.params.id);
    res.status(history.code).json(history);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const deleteUserHistory = async (req, res) => {
  try {
    const history = await UserService.deleteUserHistory(req.params.id);
    res.status(history.code).json(history);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const getUserFavorite = async (req, res) => {
  try {
    const favorite = await UserService.getUserFavorite(req.params.id);
    res.status(favorite.code).json(favorite);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const deleteUserFavorite = async (req, res) => {
  try {
    const favorite = await UserService.deleteUserFavorite(req.params.id);
    res.status(favorite.code).json(favorite);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.userId);
    res.status(user.code).json(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const getCurrentUserHistory = async (req, res) => {
  try {
    const history = await UserService.getUserHistory(req.userId);
    res.status(history.code).json(history);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const createCurrentUserHistory = async (req, res) => {
  try {
    const validate = RequestValidator.verifyRequest(req.body, ["menuId"]);
    if (validate !== true) {
      return res.json(validate);
    }
    if (!req.files) {
      return res.status(400).json(new ResponseClass(400, "Image is required"));
    }
    const uploadImage = await ImageService.uploadToGcs(
      req.files[0],
      "UserHistory"
    );
    if (uploadImage.code !== 200) {
      return res.status(uploadImage.code).json(uploadImage);
    }
    req.body.image = uploadImage.data;
    req.body.userId = req.userId;
    const userHistory = await UserService.createUserHistory(req.body);
    res.status(userHistory.code).json(userHistory);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const getCurrentUserFavorite = async (req, res) => {
  try {
    const favorite = await UserService.getUserFavorite(req.userId);
    res.status(favorite.code).json(favorite);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const createCurrentUserFavorite = async (req, res) => {
  try {
    const validate = RequestValidator.verifyRequest(req.body, ["menuId"]);
    if (validate !== true) {
      return res.status(validate.code).json(validate);
    }
    req.body.userId = req.userId;
    const userFavorite = await UserService.createUserFavorite(req.body);
    res.status(userFavorite.code).json(userFavorite);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

module.exports = {
  getUserById,
  getAllUsers,
  deleteUser,
  updateUser,
  getUserHistory,
  deleteUserHistory,
  getUserFavorite,
  deleteUserFavorite,
  getCurrentUser,
  getCurrentUserHistory,
  createCurrentUserHistory,
  getCurrentUserFavorite,
  createCurrentUserFavorite,
};
