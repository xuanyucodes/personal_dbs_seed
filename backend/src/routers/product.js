const express = require('express')
const Product = require('../models/product')
const router = new express.Router()

// POST one product
// router.post('/products', async (req,res) => {
//     const product = new Product({...req.body})
//     try{
//         await product.save()
//         res.status(201).send(product)
//     } catch(e) {res.status(400).send(e)}
// })

// POST many products
router.post('/products', async (req,res) => {
    req.body.map(async pdt => {
        const product = new Product({...pdt})
        try{
            await product.save()
            res.status(201).send(product)
        } catch(e) {res.status(400).send(e)}
    })
})

// GET all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch(e) {res.status(500).send(e)}
})

// GET one products
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.find({id: req.params.id})
        res.send(product)
    } catch(e) {res.status(500).send(e)}
})

// PATCH one product to change its quantity
router.patch('/products/:id', async (req, res) => {
    try {
        const product = await Product.findOne({id: req.params.id})
        product.qty -= req.body.qtypurchased
        await product.save()
        res.send(product)
    } catch(e) {res.status(400).send(e)}
})

module.exports = router