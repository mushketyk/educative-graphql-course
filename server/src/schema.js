const { readFileSync } = require('fs')

function readSchema() {
  return readFileSync('src/schema.graphql').toString('utf-8')
}

module.exports = {
  readSchema
}