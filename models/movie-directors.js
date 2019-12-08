const movieDirectors = (connection, Sequelize) => {
    return connection.define('movieDirectors', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        movieId: { type: Sequelize.INTEGER, reference: { model: 'Movies', key: 'id' } },
        directorsId: { type: Sequelize.INTEGER, reference: { model: 'Directors', key: 'id' } }
    }, { paranoid: true })
}

module.exports = movieDirectors