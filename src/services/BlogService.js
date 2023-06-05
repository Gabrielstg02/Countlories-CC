const db = require("../models");
const Blog = db["Blog"];
const ResponseClass = require("../utils/response.js");

const getAllBlogs = async () => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const blogs = await Blog.findAll();
    responseSuccess.message = "Get All Blogs Success";
    responseSuccess.data = blogs;
    return responseSuccess;
  } catch (error) {
    responseError.status = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const getBlogById = async (id) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const blog = await Blog.findOne({
      where: {
        id: id,
      },
    });
    responseSuccess.message = "Get Blog By Id Success";
    responseSuccess.data = blog;
    return responseSuccess;
  } catch (error) {
    responseError.status = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const deleteBlog = async (id, permanent = false) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const blog = await Blog.destroy({
      where: {
        id: id,
      },
      force: permanent,
    });
    responseSuccess.message = "Delete Blog Success";
    responseSuccess.data = blog;
    return responseSuccess;
  } catch (error) {
    responseError.status = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const updateBlog = async (id, requestBody) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const blog = await Blog.update(requestBody, {
      where: {
        id: id,
      },
    });
    responseSuccess.message = "Update Blog Success";
    responseSuccess.data = blog;
    return responseSuccess;
  } catch (error) {
    responseError.status = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const createBlog = async (requestBody) => {
  var responseError = new ResponseClass.ErrorResponse();
  var responseSuccess = new ResponseClass.SuccessResponse();
  try {
    const blog = await Blog.create({
      title: requestBody.title,
      content: requestBody.content,
      image: requestBody.image,
      category: requestBody.category,
    });
    responseSuccess.message = "Create Blog Success";
    responseSuccess.data = blog;
    return responseSuccess;
  } catch (error) {
    responseError.status = 500;
    responseError.message = error.message;
    return responseError;
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  deleteBlog,
  updateBlog,
  createBlog,
};
