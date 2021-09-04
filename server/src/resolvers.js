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

    allCategories: () => {
      return Category.find()
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

  Mutation: {
    createProduct: async(_, { input } ) => {
      const author = await User.findOne({userName: "ellen"})
      return Product.create({
        name: input.name,
        description: input.description,
        url: input.url,
        numberOfVotes: 0,
        publishedAt: Date.now(),
        authorId: author._id,
        categoriesIds: input.categoriesIds,
       });
    },

    createCategory: async(_, { input } ) => {
      return Category.create({
        slug: input.slug,
        name: input.name,
       });
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
