"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Admins", [
      {
        name: "Admin",
        email: "admin@gmail.com",
        password:
          "$2a$12$ZPf3To0PeRpvlSTBFQMtCOPdPjoHD93XDRdbfQD/8h3Sk2dXVERhS", //admin123
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Admins", null, {});
  },
};
