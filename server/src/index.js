require('./mongo.js')
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { readSchema } = require('./schema.js')
const { resolvers } = require('./resolvers.js')
const logger = require('./logger.js')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./auth.js')
const { categoriesLoader, usersLoader } = require('./dataloaders.js')

async function startApp() {
  const typeDefs = readSchema()
  const app = express()
  app.use(cors({
    origin: ['https://studio.apollographql.com', 'http://localhost:3000'],
    credentials: true,
  }))
  app.use(cookieParser())

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req, res}) => {

      const jwtToken = req.cookies.authCookie
      let userId = null
      try {
        const decodedJwt = jwt.verify(jwtToken, JWT_SECRET)
        userId = decodedJwt.userId
      } catch(err) {
        logger.warn('Invalid JWT')
      }
      return {
        userId,
        req,
        res,
        categoriesLoader: categoriesLoader(),
        usersLoader: usersLoader(),
      }
    }
  })

  await server.start()
  server.applyMiddleware({ app, cors: false })

  app.listen({ port: 4000 })
}

startApp().then(() => {
  logger.info('Listening on port 4000')
})