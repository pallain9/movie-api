const Directors = (connection, Sequelize) => {
    return connection.define('movies', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        Directors: { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = Movies