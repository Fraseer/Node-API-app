"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Authors", [
      { name: "A. Lindgren", createdAt: new Date(), updatedAt: new Date() },
      { name: "J.K. Rowling", createdAt: new Date(), updatedAt: new Date() },
      { name: "F. Hughes", createdAt: new Date(), updatedAt: new Date() },
    ]);

    const astrid = await queryInterface.sequelize.query(
      `SELECT id FROM "Authors" WHERE "Authors".name = 'A. Lindgren' LIMIT 1`
    );
    const rowling = await queryInterface.sequelize.query(
      `SELECT id FROM "Authors" WHERE "Authors".name = 'J.K. Rowling' LIMIT 1`
    );
    const fraser = await queryInterface.sequelize.query(
      `SELECT id FROM "Authors" WHERE "Authors".name = 'F. Hughes' LIMIT 1`
    );

    await queryInterface.bulkInsert("Books", [
      {
        title: "Pippi LongStocking",
        AuthorId: astrid[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Harry Potter",
        AuthorId: rowling[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fake Book Name",
        AuthorId: fraser[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
