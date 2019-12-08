const movieGenres = (connection, Sequelize) => {
    return connection.define('movieGenres', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        movieId: { type: Sequelize.INTEGER, reference: { model: 'Movies', key: 'id' } },
        genresId: { type: Sequelize.INTEGER, reference: { model: 'Genres', key: 'id' } }
    }, { paranoid: true })
}

module.exports = movieGenres