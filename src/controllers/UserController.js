const UserService = require("../services/UserService.js");
const ResponseClass = require("../utils/response.js");
const RequestValidator = require("../utils/request.js");

const getUserById = async (req, res) => {
  try {
    res.json(await UserService.getUserById(req.params.id));
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    res.json(await UserService.getAllUsers());
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    res.json(await UserService.deleteUser(req.params.id));
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    res.json(await UserService.updateUser(req.params.id, req.body));
  } catch (error) {
    console.log(error);
  }
};

const getUserHistory = async (req, res) => {
  try {
    res.json(await UserService.getUserHistory(req.params.id));
  } catch (error) {
    console.log(error);
  }
};

const deleteUserHistory = async (req, res) => {
  try {
    res.json(await UserService.deleteUserHistory(req.params.id));
  } catch (error) {
    console.log(error);
  }
};

const getUserFavorite = async (req, res) => {
  try {
    res.json(await UserService.getUserFavorite(req.params.id));
  } catch (error) {
    console.log(error);
  }
};

const deleteUserFavorite = async (req, res) => {
  try {
    res.json(await UserService.deleteUserFavorite(req.params.id));
  } catch (error) {
    console.log(error);
  }
};

const getCurrentUser = async (req, res) => {
  try {
    res.json(await UserService.getUserById(req.userId));
  } catch (error) {
    console.log(error);
  }
};

const getCurrentUserHistory = async (req, res) => {
  try {
    res.json(await UserService.getUserHistory(req.userId));
  } catch (error) {
    console.log(error);
  }
};

const createCurrentUserHistory = async (req, res) => {
  try {
    const validate = RequestValidator.verifyRequest(req.body, ["menuId"]);
    if (validate.status !== 200) {
      return res.json(validate);
    }
    if (!req.file) {
      return res.json(new ResponseClass(400, "Image is required"));
    }
    const uploadImage = ImageService.uploadToGcs(req, "UserHistory");
    if (uploadImage.status !== 200) {
      return res.json(uploadImage);
    }
    req.body.image = uploadImage.data;
    req.body.userId = req.userId;
    res.json(await UserService.createUserHistory(req.body));
  } catch (error) {
    console.log(error);
  }
};

const getCurrentUserFavorite = async (req, res) => {
  try {
    res.json(await UserService.getUserFavorite(req.userId));
  } catch (error) {
    console.log(error);
  }
};

const createCurrentUserFavorite = async (req, res) => {
  try {
    const validate = RequestValidator.verifyRequest(req.body, ["menuId"]);
    if (validate.status !== 200) {
      return res.json(validate);
    }
    req.body.userId = req.userId;
    res.json(await UserService.createUserFavorite(req.body));
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
