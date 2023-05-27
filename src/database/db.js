const mongoose = require('mongoose')

function connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/openfabric-app')
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('Conected to database!')
    })
    
    db.on('error', () => console.log('Error'))
}

module.exports =  {
    connect
}