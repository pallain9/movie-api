const Directors = (connection, Sequelize, Movies) => {
    return connection.define('directors', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        directors: { type: Sequelize.STRING },
        moviesId: {
            type: Sequelize.INTEGER, references: { model: Movies, key: 'id' }
        }
    }, { paranoid: true })
}

module.exports = Directors