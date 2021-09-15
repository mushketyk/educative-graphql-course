const allProducts = [
  1, 2, 3
].map(id => {
  return {
    id,

    description: 'The Apollo Data Graph Platform',
    name: 'Apollo',
    url: 'https://www.apollographql.com/',
    numberOfVotes: 5,
    publishedAt: '2021-01-08T00:00:00.000Z',
    author: {
      id: '4b8373d016f277527198385b',
      userName: 'peter',
      fullName: 'Peter Miles'
    },
    categories: [
      {
        id: '7561bfb015d8f536760cb671',
        slug: 'frameworks',
        name: 'Frameworks'
      },
      {
        id: 'a033a528b603fed46f861d4b',
        slug: 'api',
        name: 'API'
      }
    ]
  }
})

export default allProducts