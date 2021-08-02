const { getObjectId } = require('mongo-seeding')

module.exports = [
  {
    _id: getObjectId('ellen'),
    userName: 'ellen',
    fullName: 'Ellen James',
  },
  {
    _id: getObjectId('peter'),
    userName: 'peter',
    fullName: 'Peter Miles',
  },
]