"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.ForumComment);
      this.belongsTo(models.User, { foreignKey: { onDelete: "SET NULL" } });
    }
  }
  Forum.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Forum",
    }
  );
  return Forum;
};
