const Sequelize = require('sequelize')
const MoviesModel = require('./movies')
const DirectorsModel = require('./directors')
const GenresModel = require('./genre')

const connection = new Sequelize('movies', 'root', 'Brayden9!', {
    host: 'localhost',
    dialect: 'mysql'
})


const Movies = MoviesModel(connection, Sequelize)
const Directors = DirectorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)


Movies.BelongsToMany(Directors, { through: MovieDirectors })
Directors.BelongsToMany(Movies, { through: DirectorMovies })


Movies.BelongsToMany(Genres, { through: MovieGenres })
Genres.BelongsToMany(Movies, { through: MoviesByGenre })





module.exports = {
    Movies,
    Directors,
    Genres
}