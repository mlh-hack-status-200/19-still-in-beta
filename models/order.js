const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    reciever_otp: {
        type: String,
        required: true,
    },
    dropper_otp: {
        type: String,
        required: true
    },
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
    status_reciever: {
        type: Number,
        required: true,
        default: 0
    },
    status_dropper: {
        type: Number,
        required: true,
        default: 0
    },
    email: {
        type: String,
        required: true,
    },
});

const Order = module.exports = mongoose.model('Order', OrderSchema);