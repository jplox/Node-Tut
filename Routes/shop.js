const express = require('express');
const router = express.Router();
const path = require('path');

const product = require('./admin')

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'Views', 'shop.html'))
    let allProducts = product.products;
    console.log(allProducts, 'hemlo...')
    res.render('shop' , {prod : allProducts})
});

module.exports = router;
