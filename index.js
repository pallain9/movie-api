const bodyParser = require('body-parser')
const express = require('express')
const Sequelize = require('sequelize')
const models = require('./models')

const app = express()

//**POST /movies** - this route should accept a JSON formatted movie an add that movie to the database. The body of the request should match the following format:

app.get('/movies', async (request, response) => {

    let movies = await models.Movies.findAll({
        include: [{
            model: models.Directors
        },
        {
            model: models.Genres
        }]
    })
    /*.then(movies => {
        let updatedMovies = movies.map(movie => {
            return Object.assign(
                {},
                {
                    id: movie.id,
                    title: movie.title,
                    runtime: movie.runTime,
                    releaseDate: movie.releaseDate,
                    rating: movie.rating,
                    director: movie.director,
                    genre: movie.genre
                }
            )

        })

    })*/
    response.send(movies)
})

/*app.get('/players', async (request, response) => {
    const players = await models.Players.findAll({ include: models.Teams })
    response.send(players)
})*/

app.get('/movies/:id', async (request, response) => {
    const matchingMovie = await models.Movies.findAll({
        where: { id: request.params.id }
    })
    if (matchingMovie.length) {
        response.send(matchingMovie)
    } else {
        response.sendStatus(404)
    }
})

app.get('/directors/:id', async (request, response) => {
    const matchingDirector = await models.Directors.findAll({
        where: { id: request.params.id },
        include: models.Movies
    })
    if (matchingDirector.length) {
        response.send(matchingDirector)
    } else {
        response.sendStatus(404)
    }
})

app.get('/genres/:id', async (request, response) => {
    const matchingGenres = await models.Genres.findAll({
        where: { genre: request.params.id },
        include: models.Movies
    })
    if (matchingGenres.length) {
        response.send(matchingGenres)
    } else {
        response.sendStatus(404)
    }
})

app.use(bodyParser.json())
//**POST /movies** - this route should accept a JSON formatted movie an add that movie to the database. The body of the request should match the following format:
//{ "title": "Only Lovers Left Alive", "directors": "Jim Jarmusch", "releaseDate": "2013-12-25", "rating": "R", "runTime": 123, "genres": "Drama, Musical" }
app.post('/movies', (request, response) => {
    const { title, director, releaseDate, rating, runTime, genre } = request.body
    if (!title || !director || !releaseDate || !rating || !runTime || !genre) {
        response.status(400).send('The following fields are required: title, director, releaseDate, rating, runTime, genre')
    }


    const newMovie = models.Movies.create({ title, releaseDate, rating, runTime })
    const newDirector = models.Directors.create({ director })
    const newGenre = models.Genres.create({ genre })


    response.sendStatus(201).send(newMovie, newDirector, newGenre)
})

const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server