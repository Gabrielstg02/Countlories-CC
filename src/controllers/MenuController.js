const MenuService = require("../services/MenuService");
const ImageService = require("../services/ImageService");
const RequestValidator = require("../utils/request");

const getAllMenu = async (req, res) => {
  try {
    const menu = await MenuService.getAllMenu();
    res.status(menu.code).json(menu);
  } catch (error) {
    console.log(error);
  }
};

const getMenuById = async (req, res) => {
  try {
    const menu = await MenuService.getMenuById(req.params.id);
    res.status(menu.code).json(menu);
  } catch (error) {
    console.log(error);
  }
};

const deleteMenu = async (req, res) => {
  try {
    const menu = await MenuService.getMenuById(req.params.id);
    const filename = ImageService.getFilename(menu.data.image);
    const deleteImage = ImageService.deleteFromGcs(filename);
    if (deleteImage.code !== 200) {
      return res.status(deleteImage.code).json(deleteImage);
    }
    const deleteMenu = await MenuService.deleteMenu(req.params.id);
    res.status(deleteMenu.code).json(deleteMenu);
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
      if (deleteImage.code !== 200) {
        return res.status(deleteImage.code).json(deleteImage);
      }
      const uploadImage = ImageService.uploadToGcs(req, "Menu");
      if (uploadImage.code !== 200) {
        return res.status(uploadImage.code).json(uploadImage);
      }
      req.body.image = uploadImage.data;
    }
    const updateMenu = await MenuService.updateMenu(req.params.id, req.body);
    res.status(updateMenu.code).json(updateMenu);
  } catch (error) {
    console.log(error);
  }
};

const createMenu = async (req, res) => {
  try {
    const validate = RequestValidator.verifyRequest(req.body, [
      "name",
      "kkal",
      "description",
    ]);
    if (validate !== true) {
      return res.status(400).json(validate);
    }
    if (!req.file) {
      return res.json({
        status: 400,
        message: "Image is required",
      });
    }
    const uploadImage = ImageService.uploadToGcs(req, "Menu");
    if (uploadImage.code !== 200) {
      return res.status(uploadImage.code).json(uploadImage);
    }
    const requestBody = req.body;
    requestBody.image = uploadImage.data;
    const createMenu = await MenuService.createMenu(requestBody);
    res.status(createMenu.code).json(createMenu);
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
