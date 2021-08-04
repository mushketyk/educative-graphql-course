const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  // TODO: Define Mongo schema
})

module.exports = mongoose.model('User', UserSchema)