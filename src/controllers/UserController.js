const UserService = require("../services/UserService.js");
const ResponseClass = require("../utils/response.js");
const RequestValidator = require("../utils/request.js");

const getUserById = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.status(user.code).json(user);
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(users.code).json(users);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    res.status(user.code).json(user);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    res.status(user.code).json(user);
  } catch (error) {
    console.log(error);
  }
};

const getUserHistory = async (req, res) => {
  try {
    const history = await UserService.getUserHistory(req.params.id);
    res.status(history.code).json(history);
  } catch (error) {
    console.log(error);
  }
};

const deleteUserHistory = async (req, res) => {
  try {
    const history = await UserService.deleteUserHistory(req.params.id);
    res.status(history.code).json(history);
  } catch (error) {
    console.log(error);
  }
};

const getUserFavorite = async (req, res) => {
  try {
    const favorite = await UserService.getUserFavorite(req.params.id);
    res.status(favorite.code).json(favorite);
  } catch (error) {
    console.log(error);
  }
};

const deleteUserFavorite = async (req, res) => {
  try {
    const favorite = await UserService.deleteUserFavorite(req.params.id);
    res.status(favorite.code).json(favorite);
  } catch (error) {
    console.log(error);
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.userId);
    res.status(user.code).json(user);
  } catch (error) {
    console.log(error);
  }
};

const getCurrentUserHistory = async (req, res) => {
  try {
    const history = await UserService.getUserHistory(req.userId);
    res.status(history.code).json(history);
  } catch (error) {
    console.log(error);
  }
};

const createCurrentUserHistory = async (req, res) => {
  try {
    const validate = RequestValidator.verifyRequest(req.body, ["menuId"]);
    if (validate.code !== 200) {
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
  }
};

const getCurrentUserFavorite = async (req, res) => {
  try {
    const favorite = await UserService.getUserFavorite(req.userId);
    res.status(favorite.code).json(favorite);
  } catch (error) {
    console.log(error);
  }
};

const createCurrentUserFavorite = async (req, res) => {
  try {
    const validate = RequestValidator.verifyRequest(req.body, ["menuId"]);
    if (validate.code !== 200) {
      return res.status(validate.code).json(validate);
    }
    req.body.userId = req.userId;
    const userFavorite = await UserService.createUserFavorite(req.body);
    res.status(userFavorite.code).json(userFavorite);
  } catch (error) {
    console.log(error);
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
