const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  item: String ,
  description: String,
})

const model = mongoose.model('products', schema)

module.exports = model