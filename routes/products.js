const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

const Product = require("../models/product");
const Order = require("../models/order");

router.post('/add', (req, res) => {
    // var otp1 = Math.floor(100000 + Math.random() * 900000);
    // var otp2 = Math.floor(100000 + Math.random() * 900000);
    let newProduct = new Product({
        product_name: req.body.product_name,
        address_out: req.body.address_out,
        address_in: req.body.address_in,
        weight: req.body.weight,
        metro_line:req.body.metro_line,
        // reciever_otp: otp1,
        // dropper_otp: otp2,
        product_code: req.body.product_code
    });
    newProduct.save((err) => {
        if (err) {
            res.json({ sucsess: false, msg: err })
        } else {
            res.json({ sucsess: true, msg: newProduct })
        }
    })
})

router.post('/code', (req, res) => {
    var product_code = req.body.product_code;
    var email = req.body.email;
    Product.findOne({ product_code: product_code }, (err, prod) => {
        if (err) {
            res.json({ sucsess: false, msg: err })
        } else {

            if (prod == null || prod == undefined || prod == '') {
                res.json({ success: false, msg: 'No such Product' })
            }
            // console.log(prod)
            //check if status is already 1 - do this
            if (prod.status == 1) {
               return res.json({ success: false, msg: 'order already picked up.' })
            }
            //update product status
            Product.findOneAndUpdate({
                    product_code: product_code
                }, { $set: { status: 1 } }, { new: true })
                .then(product => console.log(product))
                .catch(err => console.log(err));

            //save - email and prod in orders
            var otp1 = Math.floor(100000 + Math.random() * 900000);
            var otp2 = Math.floor(100000 + Math.random() * 900000);
            let newOrder = new Order({
                email: email,
                product_name: prod.product_name,
                address_out: prod.address_out,
                address_in: prod.address_in,
                metro_line:prod.metro_line,
                weight: prod.weight,
                reciever_otp: otp1,
                dropper_otp: otp2,
                product_code: prod.product_code
            });
            newOrder.save((err) => {
                if (err) {
                    res.json({ sucsess: false, msg: err })
                } else {
                    res.json({ sucsess: true, msg: newOrder })
                }
            })
        }
    })
});

//dropper otp
router.post('/dotp', (req, res) => {
    var dotp = req.body.dotp;
    var email = req.body.email
    var product_code = req.body.product_code

    Order.findOne({ email: email, product_code: product_code, dropper_otp: dotp }, (err, prod) => {
        if (err) {
            res.json({ sucsess: false, msg: err })
        } else {
            if (prod == null || prod == undefined || prod == '') {
                res.json({ success: false, msg: 'Invalid input' })
            }
            //check if already dropped
            if (prod.status_dropper == 1) {
                res.json({ success: false, msg: 'Already Dropped.' })
            }
            //update order status_dropper
            Order.findOneAndUpdate({
                    email: email,
                    product_code: product_code,
                    dropper_otp: dotp
                }, { $set: { status_dropper: 1 } }, { new: true })
                .then(product => res.json({ success: true, msg: product }))
                .catch(err => res.json({ success: false, msg: err }));
        }
    });
});

//reciever otp
router.post('/rotp', (req, res) => {
    var rotp = req.body.rotp;
    var email = req.body.email
    var product_code = req.body.product_code
    Order.findOne({ email: email, product_code: product_code, reciever_otp: rotp }, (err, prod) => {
        if (err) {
            res.json({ sucsess: false, msg: err })
        } else {
            if (prod == null || prod == undefined || prod == '') {
                res.json({ success: false, msg: 'Invalid input' })
            }
            //check if already dropped
            if (prod.status_reciever == 1) {
                res.json({ success: false, msg: 'Already Recieved.' })
            }
            //update order status_dropper
            Order.findOneAndUpdate({
                    email: email,
                    product_code: product_code,
                    reciever_otp: rotp
                }, { $set: { status_reciever: 1 } }, { new: true })
                .then(product => res.json({ success: true, msg: product }))
                .catch(err => res.json({ success: false, msg: err }));
        }
    });
});

module.exports = router