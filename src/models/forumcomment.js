"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ForumComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Forum);
      this.belongsTo(models.User, { foreignKey: { onDelete: "SET NULL" } });
    }
  }
  ForumComment.init(
    {
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ForumComment",
    }
  );
  return ForumComment;
};
