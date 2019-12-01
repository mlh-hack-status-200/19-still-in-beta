const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

const User = require("../models/user");
const Product = require("../models/product");
const Order = require("../models/order");


router.get('/all-products', (req, res) => {
    Product.find({}, (err, prod) => {
        if (err) {
            res.send(err)
        } else {
            res.send(prod)
        }
    })
})

router.get('/all-users', (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.send(err)
        } else {
            res.send(user)
        }
    })
})

router.get('/products-picked', (req, res) => {
    Product.find({ status: 1 }, (err, prod) => {
        if (err) {
            res.send(err)
        } else {
            res.send(prod)
        }
    })
})

router.get('/products-not-picked', (req, res) => {
    Product.find({ status: 0 }, (err, prod) => {
        if (err) {
            res.send(err)
        } else {
            res.send(prod)
        }
    })
})

//orders by User email
router.get('/all-orders', (req, res) => {
    var email = req.body.email
    Order.find({ email: email }, (err, prod) => {
        if (err) {
            res.send(err)
        } else {
            res.send(prod)
        }
    })
})

router.get('/orders-delivered', (req, res) => {
    var email = req.body.email
    Order.find({ email: email, status_reciever: 1, status_dropper: 1 }, (err, prod) => {
        if (err) {
            res.send(err)
        } else {
            res.send(prod)
        }
    })
})

router.get('/orders-not-delivered', (req, res) => {
    var email = req.body.email
    Order.find({ email: email, status_reciever: 0, status_dropper: 0 }, (err, prod) => {
        if (err) {
            res.send(err)
        } else {
            res.send(prod)
        }
    })
})

//order delivered confirmation
router.get('/order-delivered-confirmation',(req,res)=>{
    // var email=req.body.email;
    var product_code=req.body.product_code;

    Order.find({ product_code:product_code, status_reciever: 1, status_dropper: 1 }, (err, prod) => {
        if (err) {
            res.send(err)
        } else {
            console.log(prod)
            if(prod==undefined || prod==null || prod.length==0){
                res.json({msg:'Not Delivered.',success:false});
            }
            else{
                res.json({msg:'Delivered.',success:true});
            }
        }
    })
})

module.exports = router