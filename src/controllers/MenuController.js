const MenuService = require("../services/MenuService");
const ImageService = require("../services/ImageService");
const RequestValidator = require("../utils/request");

const getAllMenu = async (req, res) => {
  try {
    res.json(await MenuService.getAllMenu());
  } catch (error) {
    console.log(error);
  }
};

const getMenuById = async (req, res) => {
  try {
    res.json(await MenuService.getMenuById(req.params.id));
  } catch (error) {
    console.log(error);
  }
};

const deleteMenu = async (req, res) => {
  try {
    const menu = await MenuService.getMenuById(req.params.id);
    const filename = ImageService.getFilename(menu.data.image);
    const deleteImage = ImageService.deleteFromGcs(filename);
    if (deleteImage.status !== 200) {
      return res.json(deleteImage);
    }
    res.json(await MenuService.deleteMenu(req.params.id));
  } catch (error) {
    console.log(error);
  }
};

const updateMenu = async (req, res) => {
  try {
    if (req.file) {
      const menu = await MenuService.getMenuById(req.params.id);
      const filename = ImageService.getFilename(menu.data.image);
      const deleteImage = ImageService.deleteFromGcs(filename);
      if (deleteImage.status !== 200) {
        return res.json(deleteImage);
      }
      const uploadImage = ImageService.uploadToGcs(req, "Menu");
      if (uploadImage.status !== 200) {
        return res.json(uploadImage);
      }
      req.body.image = uploadImage.data;
    }
    res.json(await MenuService.updateMenu(req.params.id, req.body));
  } catch (error) {
    console.log(error);
  }
};

const createMenu = async (req, res) => {
  try {
    const validate = RequestValidator.createMenu(req.body, [
      "name",
      "kkal",
      "description",
      "image",
    ]);
    if (validate !== true) {
      return res.json(validate);
    }
    const uploadImage = ImageService.uploadToGcs(req, "Menu");
    if (uploadImage.status !== 200) {
      return res.json(uploadImage);
    }
    const requestBody = req.body;
    requestBody.image = uploadImage.data;
    res.json(await MenuService.createMenu(requestBody));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllMenu,
  getMenuById,
  deleteMenu,
  updateMenu,
  createMenu,
};
