const mongoose = require('mongoose')
require('dotenv').config()


const myDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        })
        console.log(`MongoDB connected: ${conn?.connection?.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = myDb
