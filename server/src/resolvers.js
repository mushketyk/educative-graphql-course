const productsData = [
  {
    name: 'Educative',
    description: 'Interactive Courses for Software Developers',
    url: 'https://educative.io/',
    numberOfVotes: 10,
    publishedAt: '2021-04-05',
    authorId: '1',
  },
  {
    name: 'Apollo',
    description: 'The Apollo Data Graph Platform',
    url: 'https://www.apollographql.com/',
    numberOfVotes: 5,
    publishedAt: '2021-01-08',
    authorId: '2',
  },
  {
    name: 'OneGraph',
    description: 'Build Integrations 100x Faster',
    url: 'https://www.onegraph.com',
    numberOfVotes: 5,
    publishedAt: '2020-08-22',
    authorId: '1',
  },
]

const usersData = [
  {
    id: '1',
    userName: 'ellen',
    fullName: 'Ellen James'
  },
  {
    id: '2',
    userName: 'peter',
    fullName: 'Peter Miles'
  },
]

const resolvers = {
  Query: {
    appName: () => 'ProductHunt clone',

    allProducts: () => {
      return productsData
    },
  },

  Product: {
    author: (product) => {
      return usersData.find(user => user.id === product.authorId)
    },
  },
}

module.exports = {
  resolvers,
}
