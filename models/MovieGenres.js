const MovieGenres = (connection, Sequelize, Movies, Genres) => {
    return connection.define('MoviesGenres', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        movieId: { type: Sequelize.INTEGER, reference: { model: Movies, key: 'id' } },
        genreId: { type: Sequelize.INTEGER, reference: { model: Genres, key: 'id' } }

    }, { paranoid: true })
}

module.exports = MovieGenres