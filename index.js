const bodyParser = require('body-parser')
const express = require('express')
const { postMovie, getMovies, getMoviesById, getDirectorByID, matchingGenres } = require('./controllers/movieAPI')

const app = express()

app.get('/movies', getMovies)

app.get('/movies/:id', getMoviesById)

app.get('/genre/:id', matchingGenres)

app.get('/director/:id', getDirectorByID)

app.post('/movies', bodyParser.json(), postMovie)

const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server