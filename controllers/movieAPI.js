const models = require('../models')


async function getMovies(request, response) {

    let movies = await models.Movies.findAll({
        include: [{
            model: models.Directors
        },
        {
            model: models.Genres
        }]
    })
    return movies
        ? response.send(movies)
        : response.sendStaus(404)
}


async function getMoviesById(request, response) {
    const id = parseInt(request.params.id)
    const matchingMovie = await models.Movies.findOne({
        where: { id: id },
        include: [{
            model: models.Directors
        },
        {
            model: models.Genres
        }]
    })
    return matchingMovie
        ? response.send(matchingMovie)
        : response.sendStatus(404)
}

async function getDirectorByID(request, response) {
    const id = parseInt(request.params.id)
    const matchingDirector = await models.Directors.findAll({
        where: { id: id },
        include: models.Movies
    })
    return matchingDirector
        ? response.send(matchingDirector)
        : response.sendStatus(404)
}
async function matchingGenres(request, response) {
    const id = request.params.id
    const matchingGenres = await models.Genres.findAll({
        where: { genres: id },
        include: models.Movies
    })
    return matchingGenres
        ? response.send(matchingGenres)
        : response.sendStatus(404)
}



async function postMovie(request, response) {

    let { title, directors, releaseDate, rating, runTime, genres } = request.body

    releaseDate = new Date(releaseDate)

    releaseDate = (releaseDate.getMonth() + 1) + "/" + (releaseDate.getDate() + 1) + "/" + releaseDate.getFullYear()

    let timeString = runTime
    if (typeof runTime === 'number') {
        timeString = runTime.toString()
    }

    if (timeString.toLowerCase().includes('mins')) {
        timeString = runTime
    } else {
        runTime = (`${timeString} 'mins'`)
    }
    console.log(timeString)
    if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
        response.status(400).send('The following fields are required: title, director, releaseDate, rating, runTime, genre')
    }


    const [newTitle] = await models.Movies.findOrCreate({
        where: {
            title: title
        },
        defaults: {
            releaseDate: releaseDate,
            rating: rating,
            runTime: runTime
        }

    })
    let genreIds = []
    const genreSplit = genres.split(',')
    for (let i = 0; i < genreSplit.length; i++) {

        [newGenre] = await models.Genres.findOrCreate({
            where: {
                genres: genreSplit[i].trim()
            },
        })
        genreIds.push(newGenre.id)
    }
    await newTitle.setGenres(genreIds)
    await newTitle.save()
    console.log(newTitle)

    let newDirectors = []
    const directorSplit = directors.split(',')
    for (let i = 0; i < directorSplit.length; i++) {
        [newDirector] = await models.Directors.findOrCreate({
            where: {
                directors: directorSplit[i].trim()
            }
        })
        newDirectors.push(newDirector.id)
    }
    await newTitle.setDirectors(newDirectors)
    await newTitle.save()
    console.log(newTitle)
    const createdMovie = await models.Movies.findAll({
        where: { id: newTitle.id },
        include: [{
            model: models.Directors
        },
        {
            model: models.Genres
        }]

    })
    return createdMovie
        ? response.status(201).send(createdMovie)
        : response.sendStatus(404)
}


module.exports = {
    postMovie,
    getMovies,
    getMoviesById,
    getDirectorByID,
    matchingGenres
}