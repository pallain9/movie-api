const Genres = (connection, Sequelize, Movies) => {
    return connection.define('genres', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        genres: { type: Sequelize.STRING },
        moviesId: {
            type: Sequelize.INTEGER, references: { model: Movies, key: 'id' }
        }
    }, { paranoid: true })
}

module.exports = Genres