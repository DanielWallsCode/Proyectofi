const { Router } = require('express');
const router = Router();

const { getProducts, getProductById, saveProduct, updateProduct, deleteProduct } = require('../controllers/products.js');
const { checkAuth } = require('../middlewares/middlewares.js');

router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', checkAuth, saveProduct);

router.put('/:id', checkAuth, updateProduct);

router.delete('/:id', checkAuth, deleteProduct);

module.exports = router;