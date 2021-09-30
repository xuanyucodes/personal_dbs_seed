const express = require('express')
const Customer = require('../models/customer')
const router = new express.Router()

// POST many customers
router.post('/customers', async (req,res) => {
    req.body.map(async cst => {
        const customer = new Customer({...cst})
        try{
            await customer.save()
            res.status(201).send(customer)
        } catch(e) {res.status(400).send(e)}
    })
})

// GET all customers
router.get('/customers', async (req, res) => {
    try {
        const customers = await Customer.find({})
        res.send(customers)
    } catch(e) {res.status(500).send(e)}
})

// login
router.get('/login', async (req, res) => {
    try{
        const customer = await Customer.findOne({username: req.body.username, password: req.body.password})
        if (!customer) {return res.send(404)}
        res.send(customer)
    } catch(e) {res.status(500).send(e)}
})

module.exports = router