const { getObjectId, getObjectIds } = require('mongo-seeding')

module.exports = [

  {
    name: 'Educative',
    description: 'Interactive Courses for Software Developers',
    url: 'https://educative.io/',
    numberOfVotes: 10,
    publishedAt: '2021-04-05',
    authorId: getObjectId('ellen'),
    categoriesIds: getObjectIds(['education']),
  },
  {
    name: 'Apollo',
    description: 'The Apollo Data Graph Platform',
    url: 'https://www.apollographql.com/',
    numberOfVotes: 5,
    publishedAt: '2021-01-08',
    authorId: getObjectId('peter'),
    categoriesIds: getObjectIds(['frameworks', 'api']),
  },
  {
    name: 'OneGraph',
    description: 'Build Integrations 100x Faster',
    url: 'https://www.onegraph.com',
    numberOfVotes: 5,
    publishedAt: '2020-08-22',
    authorId: getObjectId('ellen'),
    categoriesIds: getObjectIds(['api']),
  },

]