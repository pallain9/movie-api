const Movies = (connection, Sequelize, Directors) => {
    return connection.define('movies', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING },
        runTime: { type: Sequelize.STRING },
        releaseDate: { type: Sequelize.STRING },
        directorId: { type: Sequelize.INTEGER, reference: { model: Directors, key: 'id' } }
    }, { paranoid: true })
}

module.exports = Movies