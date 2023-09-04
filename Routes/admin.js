const express = require('express');
const router = express.Router();
const path = require('path');

// /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'Views', 'addProduct.html'))
})

router.post('/product', (req, res, next) => {
    console.log(req.body, 'response man')
    let data = req.body;
    res.send(`<h1>${data.title}</h1>`)
})


module.exports = router;