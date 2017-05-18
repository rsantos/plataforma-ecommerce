const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    return res.render('main/index', {
        title: 'Test ecommerce',
        layout: 'layouts/base'
    })
})

module.exports = router