const mongoose = require('mongoose')
const { UserInputError, AuthenticationError } = require('apollo-server-express');
const bcrypt = require('bcrypt')
const logger = require('./logger.js')
const { JWT_SECRET } = require('./auth.js')
const jwt = require('jsonwebtoken')

const Product = require('./models/Product.js')
const Category = require('./models/Category.js')
const User = require('./models/User.js')

const resolvers = {
  Query: {
    appName: () => 'ProductHunt clone',

    allProducts: () => {
      return Product.find({}).exec()
    },

    products: (_, {skip, limit}) => {
      if (skip < 0 || limit <= 0) {
        throw new UserInputError('Invalid skip/limit arguments')
      }
      if (limit > 10) {
        throw new UserInputError('Cannot return so many products')
      }
      return Product.find({})
        .sort({publishedAt: -1})
        .skip(skip)
        .limit(limit)
        .exec()
    },

    allCategories: () => {
      return Category.find()
    },

    productsByAuthor: async (_, { authorName }) => {
      const user = await User.findOne({userName: authorName})
      if (!user) {
        throw new UserInputError('User does not exist')
      }
      return Product.find({authorId: user._id})
    },

    productsByCategory: async (_, { slug }) => {
      const category = await Category.findOne({ slug })
      return Product.find({ categoriesIds: category._id })
    }
  },

  Mutation: {
    createProduct: async(_, { input }, {userId} ) => {
      if (!userId) {
        throw new AuthenticationError('Authentication required')
      }

      return Product.create({
        name: input.name,
        description: input.description,
        url: input.url,
        numberOfVotes: 0,
        publishedAt: Date.now(),
        authorId: userId,
        categoriesIds: input.categoriesIds,
      })
    },

    upvoteProduct: async(_, { productId }, {userId} ) => {
      if (!userId) {
        throw new AuthenticationError('Authentication required')
      }

      return Product.findOneAndUpdate(
        {_id: productId},
        {$inc : {'numberOfVotes' : 1}},
        {new: true}
      )
    },

    createCategory: async(_, { input } ) => {
      errors = []
      if (!input.user) {
        errors.push({
          field: 'user',
          error: 'Should not be empty'
        })
      }
      if (!input.slug) {
        errors.push({
          field: 'slug',
          error: 'Should not be empty'
        })
      }
      if (errors) {
        throw new UserInputError('Invalid input', {
          validationErrors: errors
        });
      }
      return Category.create({
        slug: input.slug,
        name: input.name,
      })
    },

    login: async(_, {userName, password}, context) => {
      const user = await User.findOne({
        userName
      })
      logger.info(`Context keys: ${Object.keys(context)}`)

      if (!user) {
        throw new AuthenticationError('Invalid credentials')
      }

      if (!bcrypt.compare(password, user.passwordHash)) {
        throw new AuthenticationError('Invalid credentials')
      }

      const jwtStr = jwt.sign(
        {
          userId: user.id
        },
        JWT_SECRET,
        { expiresIn: '1h' }
      )
      const expiresIn = 60 * 60 * 1000
      context.res.cookie('authCookie', jwtStr, {
        maxAge: expiresIn,
        httpOnly: true,
        sameSite: 'none',
        secure: true
      })

      return {
        expiresIn,
        user,
      }
    },

    logOut: async(_, __, { res }) => {
      res.clearCookie('authCookie', {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'none',
        secure: true
      })
      return true
    }
  },

  Product: {

    publishedAt: (product) => {
      return product.publishedAt.toISOString()
    },

    author: async (product, _, { usersLoader }) => {
      // TODO: Use usersLoader here
      return usersLoader.load(product.authorId)
    },

    categories: async (product, _, { categoriesLoader }) => {
      const allIds = product.categoriesIds
      return categoriesLoader.loadMany(allIds)
    }
  }

}

module.exports = {
  resolvers,
}
