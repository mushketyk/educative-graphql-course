const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: String,
  description: String,
  url: String,
  numberOfVotes: Number,
  publishedAt: Date,
  authorId: Schema.Types.ObjectId,
  categoriesIds: [Schema.Types.ObjectId]
})

module.exports = mongoose.model('Product', ProductSchema)