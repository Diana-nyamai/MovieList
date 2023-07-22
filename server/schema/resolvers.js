const {movieList, producerList} = require('../DummyData');
const _ = require("lodash");

const resolvers = {
    Query: {
        movies: () =>{
            return movieList
        },
        movie: (parent, args) =>{
            return _.find(movieList, {name: args.name});
        },
        directors: () =>{
            return producerList;
        },
        director: (parent, args) =>{
            return _.find(producerList, {name: args.name})
        },
    },
    Mutation: {
        createMovie: (parent, args) =>{
            const id = movieList[movieList.length - 1].id;
            const movie = args.input;
            movie.id = id + 1;
            movieList.push(movie);
            return movie;
        },
        updateMovie: (parent, args) =>{
            const {id, newMovieName, newGenre, newYearUpdate} = args.input;
            let UpdatedMovie;
            movieList.forEach((movie) =>{
                if (movie.id === id){
                    movie.name = newMovieName
                    movie.genre = newGenre
                    movie.yearReleased = newYearUpdate

                    UpdatedMovie = movie
                }
            })
            console.log(UpdatedMovie)
            return UpdatedMovie;
        },
        deleteMovie: (parent, args) =>{
            const id = args.id
            _.remove(movieList, (movie)=> movie.id === id)
            return null;
        }
    }
}

module.exports = {resolvers}