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
        movies: [Movie!]
        movie(name: String!): Movie!
        directors: [Director!]
        director(name: String!): Director!
    }
`

module.exports = {typeDefs}