const {movies, producers} = require('../DummyData')

const resolvers = {
    Query: {
        movies: () =>{
            return movies
        }
    }
}

module.exports = {resolvers}