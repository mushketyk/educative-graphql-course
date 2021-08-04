const mongoose = require('mongoose')

const Product = require('./models/Product.js')
const Category = require('./models/Category.js')
const User = require('./models/User.js')

const resolvers = {
  Query: {
    appName: () => 'ProductHunt clone',

    allProducts: () => {
      return Product.find({})
    },
    productsByAuthor: async (_, { authorName }) => {
      const user = await User.findOne({userName: authorName})
      return Product.find({authorId: user._id})
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

    author: async (product) => {
      return User.findById(product.authorId)
    },

    categories: async (product) => {
      const allIds = product.categoriesIds
      return Category.find().where('_id').in(allIds)
    }
  }
}

module.exports = {
  resolvers,
}
