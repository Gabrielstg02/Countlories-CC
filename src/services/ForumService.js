const Forum = require("../models/forum");
const ForumComment = require("../models/forumcomment");
const User = require("../models/user");
const ResponseClass = require("../utils/response");
const { Op } = require("sequelize");

const createForum = async (body, image) => {
  try {
    const forum = await Forum.create({
      title: body.title,
      content: body.content,
      image: image,
      UserId: body.userId,
    });
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Forum created successfully";
    responseSuccess.data = forum;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error;
    return responseError;
  }
};

const getAllForums = async () => {
  try {
    const forums = await Forum.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: ForumComment,
          include: [
            {
              model: User,
              attributes: ["name"],
            },
          ],
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Get all forums successfully";
    responseSuccess.data = forums;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error;
    return responseError;
  }
};

const getForumById = async (id) => {
  try {
    const forum = await Forum.findOne({
      where: { id: id },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: ForumComment,
          include: [
            {
              model: User,
              attributes: ["name"],
            },
          ],
        },
      ],
    });
    if (forum === null) {
      const responseError = new ResponseClass.ErrorResponse();
      responseError.code = 404;
      responseError.message = "Forum not found";
      return responseError;
    }
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Get forum by id successfully";
    responseSuccess.data = forum;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error;
    return responseError;
  }
};

const deleteForum = async (id, permanent = false) => {
  try {
    let forum = await Forum.findOne({
      where: { id: id },
    });
    if (forum === null) {
      const responseError = new ResponseClass.ErrorResponse();
      responseError.code = 404;
      responseError.message = "Forum not found";
      return responseError;
    }
    forum = await Forum.destroy({
      where: { id: id },
      force: permanent,
    });
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Forum deleted successfully";
    responseSuccess.data = forum;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error;
    return responseError;
  }
};

const updateForum = async (id, body) => {
  try {
    const title = body.title;
    const content = body.content;
    let forum = await Forum.findOne({
      where: { id: id },
    });
    if (forum === null) {
      const responseError = new ResponseClass.ErrorResponse();
      responseError.code = 404;
      responseError.message = "Forum not found";
      return responseError;
    }
    forum = await Forum.update(
      {
        title,
        content,
      },
      {
        where: { id: id },
      }
    );
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Forum updated successfully";
    responseSuccess.data = forum;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error;
    return responseError;
  }
};

const createForumComment = async (body) => {
  try {
    const forumComment = await ForumComment.create({
      content: body.content,
      ForumId: body.forumId,
      UserId: body.userId,
    });
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Forum comment created successfully";
    responseSuccess.data = forumComment;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error;
    return responseError;
  }
};

const updateForumComment = async (id, body) => {
  try {
    const content = body.content;
    let forumComment = await ForumComment.findOne({
      where: { id: id },
    });
    if (forumComment === null) {
      const responseError = new ResponseClass.ErrorResponse();
      responseError.code = 404;
      responseError.message = "Forum comment not found";
      return responseError;
    }
    forumComment = await ForumComment.update(
      {
        content,
      },
      {
        where: { id: id },
      }
    );
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Forum comment updated successfully";
    responseSuccess.data = forumComment;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error;
    return responseError;
  }
};

const deleteForumComment = async (id) => {
  try {
    const forumComment = await ForumComment.destroy({
      where: { id: id },
    });
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Forum comment deleted successfully";
    responseSuccess.data = forumComment;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error;
    return responseError;
  }
};

module.exports = {
  createForum,
  getAllForums,
  getForumById,
  deleteForum,
  updateForum,
  createForumComment,
  updateForumComment,
  deleteForumComment,
};
