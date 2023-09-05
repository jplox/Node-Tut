const express = require('express');
const router = express.Router();
const path = require('path');
const products = [];

// /admin/add-product
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'Views', 'addProduct.html'))
    res.render('addProduct')
})

router.post('/add-product', (req, res, next) => {
    products.push({title : req.body.title})
    res.redirect('/')
})


exports.router = router;
exports.products = products;