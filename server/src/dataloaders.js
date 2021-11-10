const DataLoader = require('dataloader')
const Category = require('./models/Category.js')

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

// TODO: Add usersLoader()

module.exports = {
  categoriesLoader,
  // TODO: Export usersLoader here
}