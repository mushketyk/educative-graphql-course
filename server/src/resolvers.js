const mongoose = require('mongoose')

const Product = require('./models/Product.js')
const Category = require('./models/Category.js')

const resolvers = {
  Query: {
    appName: () => 'ProductHunt clone',

    allProducts: async () => {
      return Product.find({})
    },
    productsByAuthor: (parent, { authorName }) => {
      // TODO: Implement this method
    },

    productsByCategory: async (_, { slug }) => {
      const category = await Category.findOne({ slug })
      return Product.find({ categoriesIds: category._id })
    }
  },

  Product: {

    publishedAt: (product) => {
      return product.publishedAt.toISOString()
    },

    author: async (product, args) => {
      // TODO: Implement this method
    },

    categories: async (product) => {
      const allIds = product.categoriesIds
      return Category.find().where('_id').in(allIds)
    }
  },
}

module.exports = {
  resolvers,
}
