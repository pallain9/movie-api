'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('genres', [
      { genres: "Drama" },
      { genres: "Science fiction" },
      { genres: "Comedy" },
      { genres: "Romantic comedy" },
      { genres: "Epic" },
      { genres: "Biography" },
      { genres: "Screwball comedy" },
      { genres: "Comedy-drama" },
      { genres: "Musical" },
      { genres: "Romance" },
      { genres: "Mystery" },
      { genres: "Film noir" },
      { genres: "Black comedy" },
      { genres: "Fantasy" },
      { genres: "Western" },
      { genres: "Horror" },
      { genres: "Adventure" },
      { genres: "Thriller" },
      { genres: "Musical comedy" },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('genres', [
      { genres: "Drama" },
      { genres: "Science fiction" },
      { genres: "Comedy" },
      { genres: "Romantic comedy" },
      { genres: "Epic" },
      { genres: "Biography" },
      { genres: "Screwball comedy" },
      { genres: "Comedy-drama" },
      { genres: "Musical" },
      { genres: "Romance" },
      { genres: "Mystery" },
      { genres: "Film noir" },
      { genres: "Black comedy" },
      { genres: "Fantasy" },
      { genres: "Western" },
      { genres: "Horror" },
      { genres: "Adventure" },
      { genres: "Thriller" },
      { genres: "Musical comedy" },
    ])
  },
};
