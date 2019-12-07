const Sequelize = require('sequelize')
const MoviesModel = require('./movies')
const DirectorsModel = require('./directors')
const GenresModel = require('./genre')
const RatingsModel = require('./ratings')

const connection = new Sequelize('movies', 'root', 'Brayden9!', {
    host: 'localhost',
    dialect: 'mysql'
})


const Movies = MoviesModel(connection, Sequelize)
const Directors = DirectorsModel(connection, Sequelize, Movies)
const Genres = GenresModel(connection, Sequelize, Movies)
const Ratings = RatingsModel(connection, Sequelize, Movies)


Teams.hasMany(Players)
Players.belongsTo(Teams)


module.exports = {
    Movies,
    Directors,
    Genres,
    Ratings
}