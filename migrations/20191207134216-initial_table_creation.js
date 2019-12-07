'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.createTable('movies', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING },
      runTime: { type: Sequelize.STRING },
      releaseDate: { type: Sequelize.STRING },
      rating: { type: Sequelize.ENUM('Not Rated', 'G', 'R', 'Passed', 'PG', 'PG-13', 'Approved') },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
    await queryInterface.createTable('genres', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      genres: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
    await queryInterface.createTable('directors', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      directors: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
    return queryInterface.createTable('movieInformation', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      movieId: { type: Sequelize.INTEGER, reference: { model: 'movies', key: 'id' } },
      directorsId: { type: Sequelize.INTEGER, reference: { model: 'directors', key: 'id' } },
      genresId: { type: Sequelize.INTEGER, reference: { model: 'genres', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    await queryInterface.dropTable('movies', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      title: { type: Sequelize.STRING },
      runTime: { type: Sequelize.STRING },
      releaseDate: { type: Sequelize.STRING },
      rating: { type: Sequelize.ENUM('Not Rated', 'G', 'R', 'Passed', 'PG', 'PG-13', 'Approved') },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
    await queryInterface.dropTable('genres', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      genres: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
    await queryInterface.dropTable('directors', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      directors: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
    return queryInterface.dropTable('movieInformation', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      movieId: { type: Sequelize.INTEGER, reference: { model: 'Movies', key: 'id' } },
      directorsId: { type: Sequelize.INTEGER, reference: { model: 'Directors', key: 'id' } },
      genresId: { type: Sequelize.INTEGER, reference: { model: 'Genres', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP') },
      deletedAt: { type: Sequelize.DATE },
    })
  },
}