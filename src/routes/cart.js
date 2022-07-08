const { Router } = require('express');
const router = Router();

const { newCart, deleteCart, getProductsCart, saveProductsCart, deleteProductCart } = require('../controllers/cart.js');

router.post('/', newCart);

router.delete('/:id', deleteCart);

router.get('/:id/productos', getProductsCart);

router.post('/:id/productos', saveProductsCart);

router.delete('/:id/productos/:id_prod', deleteProductCart);
module.exports = router;