const Router = require('express')
const router = new Router()
const cartRoutes = require('./cartRoutes')
const laptopRoutes = require('./laptopRoutes')

router.use('/cart', cartRoutes)
router.use('/laptop', laptopRoutes)

module.exports = router