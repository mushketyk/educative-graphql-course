const productsData = [
  {
    name: 'Educative',
    description: 'Interactive Courses for Software Developers',
    url: 'https://educative.io/',
    numberOfVotes: 10,
    publishedAt: '2021-04-05',
  },
  {
    name: 'Apollo',
    description: 'The Apollo Data Graph Platform',
    url: 'https://www.apollographql.com/',
    numberOfVotes: 5,
    publishedAt: '2021-01-08',
  },
  {
    name: 'OneGraph',
    description: 'Build Integrations 100x Faster',
    url: 'https://www.onegraph.com',
    numberOfVotes: 5,
    publishedAt: '2020-08-22',
  },
]


const resolvers = {
  Query: {
    appName: () => 'ProductHunt clone',

    allProducts: () => {
      return productsData
    },
  },
}

module.exports = {
  resolvers,
}
