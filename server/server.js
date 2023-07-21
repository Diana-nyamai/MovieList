const {ApolloServer} = require('apollo-server');
const { resolvers } = require('./schema/resolvers');
const { typeDefs } = require('./schema/typeDefs');

const server = new ApolloServer({
    typeDefs,
    resolvers
})

// listen to port
server.listen().then(({url}) => console.log("Listening on port ", url)).catch((err) => console.log(" Failed to connect to server",err))