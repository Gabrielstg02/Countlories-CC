const axios = require("axios");
const FormData = require("form-data");
const ResponseClass = require("../utils/response.js");

const predict = async (image) => {
  const SuccessResponse = new ResponseClass.SuccessResponse();
  const ErrorResponse = new ResponseClass.ErrorResponse();

  try {
    const formData = new FormData();
    formData.append("image", image.buffer, image.originalname);
    const response = await axios.post(
      `${process.env.PREDICT_API_URL}/predict`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    SuccessResponse.message = "Prediction Success";
    SuccessResponse.data = response.data;
    return SuccessResponse;
  } catch (err) {
    ErrorResponse.code = 500;
    ErrorResponse.message = err.message;
    return ErrorResponse;
  }
};

module.exports = {
  predict,
};
