const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    // reciever_otp: {
    //     type: String,
    //     required: true,
    // },
    // dropper_otp: {
    //     type: String,
    //     required: true
    // },
    weight: {
        type: String,
        required: true
    },
    address_out: {
        type: String,
        required: true
    },
    address_in: {
        type: String,
        required: true
    },
    metro_line:{
        type:String,
        required:true
    },
    product_code: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Number,
        required: true,
        default: 0
    }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);