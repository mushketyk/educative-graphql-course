require('./mongo.js')
const { ApolloServer } = require('apollo-server')
const { readSchema } = require('./schema.js')
const { resolvers } = require('./resolvers.js')
const logger = require('./logger.js')

const typeDefs = readSchema()

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(() => {
  logger.info('Listening on port 4000')
})
