"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Favorite);
      this.hasMany(models.History);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      refresh_token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true,
      defaultScope: {
        attributes: { exclude: ["password", "refresh_token"] },
      },
    }
  );
  return User;
};
