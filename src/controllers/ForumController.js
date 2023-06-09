const ForumService = require("../services/ForumService");
const ImageService = require("../services/ImageService");
const ResponseClass = require("../utils/response");
const RequestValidator = require("../utils/request");

const getAllForums = async (req, res) => {
  try {
    const forums = await ForumService.getAllForums();
    res.status(forums.code).json(forums);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const getForumById = async (req, res) => {
  try {
    const forum = await ForumService.getForumById(req.params.id);
    res.status(forum.code).json(forum);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const createForum = async (req, res) => {
  try {
    if (!req.files) {
      return res
        .status(400)
        .json(new ResponseClass.ErrorResponse(400, "Image is required"));
    }
    const body = req.body;
    body.userId = req.userId;
    const validate = RequestValidator.verifyRequest(body, [
      "title",
      "content",
      "userId",
    ]);

    if (validate !== true) {
      return res.status(400).json(validate);
    }

    const uploadImage = await ImageService.uploadToGcs(req.files[0], "Forum");
    if (uploadImage.code !== 200) {
      return res.status(uploadImage.code).json(uploadImage);
    }

    body.image = uploadImage.data;

    const createForum = await ForumService.createForum(body);
    res.status(createForum.code).json(createForum);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const updateForum = async (req, res) => {
  try {
    if (req.files) {
      const forum = await ForumService.getForumById(req.params.id);
      if (forum.data === null) {
        return res
          .status(404)
          .json(
            new ResponseClass.ErrorResponse(
              (code = 404),
              (message = "Forum not found")
            )
          );
      }
      const filename = ImageService.getFilename(forum.data.image);
      const deleteImage = await ImageService.deleteFromGcs(filename);
      if (deleteImage.code !== 200 && deleteImage.code !== 404) {
        return res.status(deleteImage.code).json(deleteImage);
      }
      const uploadImage = await ImageService.uploadToGcs(req.files[0], "Forum");
      if (uploadImage.code !== 200) {
        return res.status(uploadImage.code).json(uploadImage);
      }
      req.body.image = uploadImage.data;
    }
    const updateForum = await ForumService.updateForum(req.params.id, req.body);
    res.status(updateForum.code).json(updateForum);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const deleteForum = async (req, res) => {
  try {
    const permanent = req.query.permanent ? req.query.permanent : false;
    if (permanent) {
      const forum = await ForumService.getForumById(req.params.id);
      if (forum.data === null) {
        return res
          .status(404)
          .json(
            new ResponseClass.ErrorResponse(
              (code = 404),
              (message = "Forum not found")
            )
          );
      }
      const filename = ImageService.getFilename(forum.data.image);
      const deleteImage = await ImageService.deleteFromGcs(filename);
      if (deleteImage.code !== 200 && deleteImage.code !== 404) {
        return res.status(deleteImage.code).json(deleteImage);
      }
    }
    const deleteForum = await ForumService.deleteForum(
      req.params.id,
      permanent
    );
    res.status(deleteForum.code).json(deleteForum);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const createForumComment = async (req, res) => {
  try {
    const body = req.body;
    body.userId = req.userId;
    const validate = RequestValidator.verifyRequest(body, [
      "comment",
      "userId",
    ]);

    if (validate !== true) {
      return res.status(400).json(validate);
    }

    const createForumComment = await ForumService.createForumComment(
      req.params.id,
      body
    );
    res.status(createForumComment.code).json(createForumComment);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const updateForumComment = async (req, res) => {
  try {
    const updateForumComment = await ForumService.updateForumComment(
      req.params.id,
      req.body
    );
    res.status(updateForumComment.code).json(updateForumComment);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

const deleteForumComment = async (req, res) => {
  try {
    const deleteForumComment = await ForumService.deleteForumComment(
      req.params.id
    );
    res.status(deleteForumComment.code).json(deleteForumComment);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ResponseClass.ErrorResponse(500, "Internal Server Error"));
  }
};

module.exports = {
  getAllForums,
  getForumById,
  createForum,
  updateForum,
  deleteForum,
  createForumComment,
  updateForumComment,
  deleteForumComment,
};
