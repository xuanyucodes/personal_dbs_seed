const express = require('express')
const Category = require('../models/category')
const router = new express.Router()

// POST many category
router.post('/categories', async (req,res) => {
    req.body.map(async cat => {
        const category = new Category({...cat})
        try{
            await category.save()
            res.status(201).send(category)
        } catch(e) {res.status(400).send(e)}
    })
})

// GET all category
router.get('/categories', async (req, res) => {
    try {
        const category = await Category.find({})
        res.send(category)
    } catch(e) {res.status(500).send(e)}
})

module.exports = router