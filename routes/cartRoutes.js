const Router = require('express')
const router = new Router()
const cartController = require('../controllers/cartController')


router.get('/', cartController.getAllProducts)
router.post('/filtered', cartController.getByFilter)
router.get('/:id', cartController.getOneProduct)
router.post('/', cartController.postInCart)
router.put('/:id', cartController.update)
router.delete('/:id', cartController.delete)

module.exports = router