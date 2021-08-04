const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
  slug: String,
  name: String,
})

module.exports = mongoose.model('Category', CategorySchema)