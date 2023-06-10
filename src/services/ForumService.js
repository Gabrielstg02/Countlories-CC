const db = require("../models");
const Forum = db["Forum"];
const ForumComment = db["ForumComment"];
const User = db["User"];
const ResponseClass = require("../utils/response");
const { Sequelize } = require("sequelize");

const createForum = async (body) => {
  try {
    console.log(body);
    const forum = await Forum.create(body);
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Forum created successfully";
    responseSuccess.data = forum;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const getAllForums = async (option = {}) => {
  try {
    const forums = await Forum.findAll({
      attributes: {
        include: [
          [
            Sequelize.fn("COUNT", Sequelize.col("ForumComments.id")),
            "CommentCount",
          ],
        ],
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: ForumComment,
          attributes: [],
          // required: false,
        },
      ],
      group: ["Forum.id"],
      ...option,
    });
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Get all forums successfully";
    responseSuccess.data = forums;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error.message;
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
    responseError.message = error.message;
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
    responseError.message = error.message;
    return responseError;
  }
};

const updateForum = async (id, body) => {
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
    forum = await Forum.update(body, {
      where: { id: id },
    });
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Forum updated successfully";
    responseSuccess.data = forum;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const createForumComment = async (body) => {
  try {
    const forumComment = await ForumComment.create(body);
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Forum comment created successfully";
    responseSuccess.data = forumComment;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error.message;
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
    console.log(body.role);
    if (forumComment.UserId !== body.UserId && body.role !== "admin") {
      const responseError = new ResponseClass.ErrorResponse();
      responseError.code = 403;
      responseError.message = "You are not allowed to edit this comment";
      return responseError;
    }
    delete body.UserId;
    forumComment = await ForumComment.update(body, {
      where: { id: id },
    });
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Forum comment updated successfully";
    responseSuccess.data = forumComment;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error.message;
    return responseError;
  }
};

const deleteForumComment = async (id) => {
  try {
    const forumComment = await ForumComment.findOne({
      where: { id: id },
    });
    if (forumComment === null) {
      const responseError = new ResponseClass.ErrorResponse();
      responseError.code = 404;
      responseError.message = "Forum comment not found";
      return responseError;
    }
    if (forumComment.UserId !== body.UserId && body.role !== "admin") {
      const responseError = new ResponseClass.ErrorResponse();
      responseError.code = 403;
      responseError.message = "You are not allowed to delete this comment";
      return responseError;
    }
    const deletedForumComment = await ForumComment.destroy({
      where: { id: id },
    });
    const responseSuccess = new ResponseClass.SuccessResponse();
    responseSuccess.message = "Forum comment deleted successfully";
    responseSuccess.data = deletedForumComment;
    return responseSuccess;
  } catch (error) {
    const responseError = new ResponseClass.ErrorResponse();
    responseError.code = 500;
    responseError.message = error.message;
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
