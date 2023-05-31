const UserService = require("../services/UserService.js");
const ResponseClass = require("../utils/response.js");

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

const getUserFavorite = async (req, res) => {
  try {
    res.json(await UserService.getUserFavorite(req.params.id));
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

const getCurrentUserFavorite = async (req, res) => {
  try {
    res.json(await UserService.getUserFavorite(req.userId));
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
  getUserFavorite,
  getCurrentUser,
  getCurrentUserHistory,
  getCurrentUserFavorite,
};
