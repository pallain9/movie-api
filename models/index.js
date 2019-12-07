const Sequelize = require('sequelize')
const MoviesModel = require('./movies')
const DirectorsModel = require('./directors')
const GenresModel = require('./genre')
const MovieDirectorsModel = require('./MovieDirectors')
const MovieGenresModel = require('./MovieGenres')

const connection = new Sequelize('movies', 'root', 'Brayden9!', {
    host: 'localhost',
    dialect: 'mysql'
})


const Movies = MoviesModel(connection, Sequelize)
const Directors = DirectorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const MovieDirectors = MovieDirectorsModel(connection, Sequelize, Movies, Directors)
const MovieGenres = MovieGenresModel(connection, Sequelize, Movies, Genres)


Movies.BelongsToMany(Directors, { through: MovieDirectors })
Directors.BelongsToMany(Movies, { through: MovieDirectors })


Movies.BelongsToMany(Genres, { through: MovieGenres })
Genres.BelongsToMany(Movies, { through: MoviesByGenre })



module.exports = {
    Movies,
    Directors,
    Genres,
    MovieDirectors,
    DirectorMovies,
    MovieGenres,
    MoviesByGenre
}