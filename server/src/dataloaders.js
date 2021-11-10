const DataLoader = require('dataloader')
const Category = require('./models/Category.js')
const User = require('./models/User.js')

function categoriesLoader() {
  return new DataLoader(async (categoriesIds) => {
    // Fetch all categories with IDs passed to the function
    const categories = await Category.find().where('_id').in(categoriesIds)
    // Convert the result list into a map, where the key is a
    // category's ID, and a value is fetched category
    const categoryForId = Object.fromEntries(
      categories.map(c => [c.id, c])
    )
    // Return a category object for each category ID in the input
    return categoriesIds.map(categoryId => categoryForId[categoryId])
  })
}

function usersLoader() {
  return new DataLoader(async (usersIds) => {
    const users = await User.find().where('_id').in(usersIds)
    const userForId = Object.fromEntries(
      users.map(u => [u.id, u])
    )
    return usersIds.map(userId => userForId[userId])
  })
}

module.exports = {
  categoriesLoader,
  usersLoader,
}