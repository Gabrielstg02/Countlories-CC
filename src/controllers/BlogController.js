const BlogService = require("../services/BlogService");
const ImageService = require("../services/ImageService");

const getAllBlogs = async (req, res) => {
  try {
    res.json(await BlogService.getAllBlogs());
  } catch (error) {
    console.log(error);
  }
};

const getBlogById = async (req, res) => {
  try {
    res.json(await BlogService.getBlogById(req.params.id));
  } catch (error) {
    console.log(error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await BlogService.getBlogById(req.params.id);
    const filename = ImageService.getFilename(blog.data.image);
    const deleteImage = ImageService.deleteFromGcs(filename);
    if (deleteImage.status !== 200) {
      return res.json(deleteImage);
    }
    res.json(await BlogService.deleteBlog(req.params.id));
  } catch (error) {
    console.log(error);
  }
};

const updateBlog = async (req, res) => {
  try {
    if (req.file) {
      const blog = await BlogService.getBlogById(req.params.id);
      const filename = ImageService.getFilename(blog.data.image);
      const deleteImage = ImageService.deleteFromGcs(filename);
      if (deleteImage.status !== 200) {
        return res.json(deleteImage);
      }
      const uploadImage = ImageService.uploadToGcs(req, "Blog");
      if (uploadImage.status !== 200) {
        return res.json(uploadImage);
      }
      req.body.image = uploadImage.data;
    }
    res.json(await BlogService.updateBlog(req.params.id, req.body));
  } catch (error) {
    console.log(error);
  }
};

const createBlog = async (req, res) => {
  try {
    const uploadImage = ImageService.uploadToGcs(req, "Blog");
    if (uploadImage.status !== 200) {
      return res.json(uploadImage);
    }
    const requestBody = req.body;
    requestBody.image = uploadImage.data;
    res.json(await BlogService.createBlog(requestBody));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  deleteBlog,
  updateBlog,
  createBlog,
};
