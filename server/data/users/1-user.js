const { getObjectId } = require('mongo-seeding')
const bcrypt = require('bcrypt')

module.exports = [
  {
    _id: getObjectId('ellen'),
    userName: 'ellen',
    fullName: 'Ellen James',
    passwordHash: bcrypt.hashSync('ellen', 10),
  },
  {
    _id: getObjectId('peter'),
    userName: 'peter',
    fullName: 'Peter Miles',
    passwordHash: bcrypt.hashSync('peter', 10),
  },
]