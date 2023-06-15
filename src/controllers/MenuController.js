const MenuService = require("../services/MenuService");
const ImageService = require("../services/ImageService");
const RequestValidator = require("../utils/request");
const ResponseClass = require("../utils/response");

const getAllMenu = async (req, res) => {
  try {
    const menu = await MenuService.getAllMenu();
    res.status(menu.code).json(menu);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const getMenuById = async (req, res) => {
  try {
    const menu = await MenuService.getMenuById(req.params.id);
    res.status(menu.code).json(menu);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const deleteMenu = async (req, res) => {
  try {
    const permanent = req.query.permanent ? req.query.permanent : false;
    if (permanent) {
      const menu = await MenuService.getMenuById(req.params.id);
      if (menu.data == null) {
        return res
          .status(404)
          .json(
            new ResponseClass.ErrorResponse(
              (code = 404),
              (message = "Menu not found")
            )
          );
      }
      if (menu.data.image) {
        const filename = ImageService.getFilename(menu.data.image);
        const deleteImage = await ImageService.deleteFromGcs(filename);
        if (deleteImage.code !== 200 && deleteImage.code !== 404) {
          return res.status(deleteImage.code).json(deleteImage);
        }
      }
    }
    const deleteMenu = await MenuService.deleteMenu(req.params.id, permanent);
    res.status(deleteMenu.code).json(deleteMenu);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const updateMenu = async (req, res) => {
  try {
    if (req.files) {
      console.log("coek");
      const menu = await MenuService.getMenuById(req.params.id);
      if (menu.data == null) {
        return res
          .status(404)
          .json(
            new ResponseClass.ErrorResponse(
              (code = 404),
              (message = "Menu not found")
            )
          );
      }
      if (menu.data.image) {
        const filename = ImageService.getFilename(menu.data.image);
        const deleteImage = await ImageService.deleteFromGcs(filename);
        if (deleteImage.code !== 200 && deleteImage.code !== 404) {
          return res.status(deleteImage.code).json(deleteImage);
        }
      }
      const uploadImage = await ImageService.uploadToGcs(req.files[0], "Menu");
      if (uploadImage.code !== 200) {
        return res.status(uploadImage.code).json(uploadImage);
      }
      req.body.image = uploadImage.data;
    }
    const updateMenu = await MenuService.updateMenu(req.params.id, req.body);
    res.status(updateMenu.code).json(updateMenu);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const createMenu = async (req, res) => {
  try {
    if (!req.files) {
      return res.json({
        status: 400,
        message: "Image is required",
      });
    }
    const validate = RequestValidator.verifyRequest(req.body, [
      "name",
      "label",
      "kkal",
      "description",
    ]);
    if (validate !== true) {
      return res.status(400).json(validate);
    }

    const uploadImage = await ImageService.uploadToGcs(req.files[0], "Menu");
    if (uploadImage.code !== 200) {
      return res.status(uploadImage.code).json(uploadImage);
    }
    const requestBody = req.body;
    requestBody.image = uploadImage.data;
    const createMenu = await MenuService.createMenu(requestBody);
    res.status(createMenu.code).json(createMenu);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

module.exports = {
  getAllMenu,
  getMenuById,
  deleteMenu,
  updateMenu,
  createMenu,
};
