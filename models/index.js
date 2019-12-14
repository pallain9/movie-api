const Sequelize = require('sequelize')
const MoviesModel = require('./movies')
const DirectorsModel = require('./directors')
const GenresModel = require('./genres')
const MovieDirectorsModel = require('./movie-directors')
const MovieGenresModel = require('./movie-genres')

const connection = new Sequelize('movies', 'root', 'Brayden9!', {
    host: 'localhost',
    dialect: 'mysql'
})


const Movies = MoviesModel(connection, Sequelize)
const Directors = DirectorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const MovieDirectors = MovieDirectorsModel(connection, Sequelize)
const MovieGenres = MovieGenresModel(connection, Sequelize)


Movies.belongsToMany(Directors, { through: 'MovieDirectors' })
Directors.belongsToMany(Movies, { through: 'MovieDirectors' })
Movies.belongsToMany(Genres, { through: 'MovieGenres' })
Genres.belongsToMany(Movies, { through: 'MovieGenres' })



module.exports = {
    Movies,
    Directors,
    Genres,
    MovieDirectors,
    MovieGenres
}