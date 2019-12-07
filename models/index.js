const Sequelize = require('sequelize')
const MoviesModel = require('./movies')
const DirectorsModel = require('./directors')
const GenresModel = require('./genre')
const MovieInformationModel = require('./movieInformation')

const connection = new Sequelize('movies', 'root', 'Brayden9!', {
    host: 'localhost',
    dialect: 'mysql'
})


const Movies = MoviesModel(connection, Sequelize)
const Directors = DirectorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const MovieInformation = MovieInformationModel(connection, Sequelize, Movies, Directors)


Movies.BelongsToMany(Directors, { through: MovieInformation })
Directors.BelongsToMany(Movies, { through: MovieInformation })
Movies.BelongsToMany(Genres, { through: MovieInformation })



module.exports = {
    Movies,
    Directors,
    Genres,
    MovieInformation
}