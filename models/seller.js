// CREATE SELLERS SCHEMA //

const mongoose = require('mongoose')


const sellersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("Seller", sellersSchema)