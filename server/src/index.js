const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
type Query {
  appName: String
}
`

const resolvers = {
  Query: {
    appName: () =>
      'ProductHunt clone'
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(() => {
  console.log('Listening on port 4000')
})
