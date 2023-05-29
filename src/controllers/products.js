const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params
    const obj = id ? { _id: id } : null
    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        item,
        description,
    } = req.body

    console.log(req.body)

    const products = new ProductsModel({
        name,
        item,
        description,
    })

    products.save()

    res.send({
        message: 'post success'
    })
}  

async function put(req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'send success',
        product
    })
}

module.exports = {
    get,
    post,
    put,
}