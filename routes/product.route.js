const express = require('express');
const product_controller = require('../controllers/product.controller');

const router = express.Router();

router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.put('/:id', product_controller.product_update);

router.delete('/:id', product_controller.product_delete);

module.exports = router;