const movieInformation = (connection, Sequelize, Movies, Directors, Genres) => {
    return connection.define('movieInformation', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        movieId: { type: Sequelize.INTEGER, reference: { model: Movies, key: 'id' } },
        directorsId: { type: Sequelize.INTEGER, reference: { model: Directors, key: 'id' } },
        genresId: { type: Sequelize.INTEGER, reference: { model: Genres, key: 'id' } }
    }, { paranoid: true })
}

module.exports = movieInformation