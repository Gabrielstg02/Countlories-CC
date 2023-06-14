const MenuService = require("../services/MenuService");
const PredictService = require("../services/PredictService");
const ResponseClass = require("../utils/response.js");

const predict = async (req, res) => {
  try {
    if (!req.files) {
      return res
        .status(400)
        .json(new ResponseClass.ErrorResponse(400, "No file uploaded"));
    }
    const predict = await PredictService.predict(req.files[0]);
    const menu = await MenuService.getAllMenu({
      where: { label: predict.data.prediction },
      limit: 1,
    });
    console.log(menu);
    if (menu.data.length === 0) {
      return res.json({
        message: "Menu not found",
        data: {
          name: predict.data.prediction,
          kkal: null,
          image: null,
          description: null,
        },
      });
    }
    res.json({ menu: menu.data[0] });
  } catch (err) {
    console.log(err.message);
    const ErrorResponse = new ResponseClass.ErrorResponse();
    ErrorResponse.code = 500;
    ErrorResponse.message = err.message;
    res.status(ErrorResponse.code).json(ErrorResponse);
  }
};

module.exports = {
  predict,
};
