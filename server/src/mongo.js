const mongoose = require('mongoose')
const logger = require('./logger.js')

const mongoDB = 'mongodb://user:pass@127.0.0.1:27017/products-db'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.once('open', function() {
  logger.info('Connected to a DB')
})

mongoose.set('debug', (collectionName, method, query, doc) => {
  logger.info(`${collectionName}.${method}, ${JSON.stringify(query)}, ${doc}`)
})

db.on('error', () => {
  logger.error('MongoDB connection error')
})