const express = require('express')
const router = express.Router()
const Seller = require("../models/seller")


// ALL SELLERS ROUTE // 
router.get('/', async (req,res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try{
        const sellers = await Seller.find(searchOptions)
        res.render('sellers/index', { sellers: sellers, searchOptions:req.query})

    } catch {
        res.redirect('/')
    }
})

//NEW SELLER ROUTE
router.get('/new', (req,res) => {
    res.render('sellers/new', { seller: new Seller() })
})

//CREATE SELLER ROUTE//
router.post('/', async (req,res) => {
    const seller = new Seller({
        name: req.body.name
    })
    try {
        const newSeller = await seller.save()
        res.redirect('/sellers')

    } catch {
        res.render('sellers/new', {
            seller: seller,
            errorMessage: 'Error creating Seller'
        })
       }
    
})

module.exports = router