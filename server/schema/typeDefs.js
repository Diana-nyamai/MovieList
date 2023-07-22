const {gql} = require("apollo-server");

const typeDefs = gql`
    type Movie{
        id: ID!
        name: String!
        genre: String!
        yearReleased: String!
    }
    type Director{
        id: ID!
        name: String!
        age: Int!
    }
    type Query{
        movies: [Movie!]!
        movie(name: String!): Movie!
        directors: [Director!]!
        director(name: String!): Director!
    }

    input movieCreateInput{
        name: String!
        genre: String!
        yearReleased: String!
    }
    input movieUpdateInput{
        id: ID!
        newMovieName: String!
        newGenre: String!
        newYearUpdate: String!
    }
    type Mutation{
        createMovie(input: movieCreateInput!): Movie
        updateMovie(input: movieUpdateInput!): Movie
        deleteMovie(id: ID!): Movie
    }
`

module.exports = {typeDefs}