const Sequelize = require('sequelize')
const MoviesModel = require('./movies')
const DirectorsModel = require('./directors')
const GenresModel = require('./genre')
const MovieDirectorsModel = require('./movie-directors')
const MovieGenresModel = require('./movie-genres')

const connection = new Sequelize('movies', 'root', 'Brayden9!', {
    host: 'localhost',
    dialect: 'mysql'
})


const Movies = MoviesModel(connection, Sequelize, Directors, Genres)
const Directors = DirectorsModel(connection, Sequelize, Movies)
const Genres = GenresModel(connection, Sequelize, Movies)
const MovieDirectors = MovieDirectorsModel(connection, Sequelize, Movies, Directors)
const MovieGenres = MovieGenresModel(connection, Sequelize, Movies, Genres)


Movies.BelongsToMany(Directors, { through: MovieDirectors })
Directors.BelongsToMany(Movies, { through: MovieDirectors })
Movies.BelongsToMany(Genres, { through: MovieGenres })
Genres.BelongsToMany(Movies, { through: MovieGenres })



module.exports = {
    Movies,
    Directors,
    Genres,
    MovieDirectors,
    MovieGenresModel
}