const { getObjectId } = require('mongo-seeding')

module.exports = [
  {
    _id: getObjectId('education'),
    slug: 'education',
    name: 'Education',
  },
  {
    _id: getObjectId('frameworks'),
    slug: 'frameworks',
    name: 'Frameworks',
  },
  {
    _id: getObjectId('api'),
    slug: 'api',
    name: 'API',
  },
]