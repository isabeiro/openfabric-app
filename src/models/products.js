const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  product: String ,
  description: String,
})

const model = mongoose.model('products', schema)

module.exports = model