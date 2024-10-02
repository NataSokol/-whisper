const router = require('express').Router();

const categoryRouter = require('./category.routes');
const collectionRouter = require('./collection.routes');
const voucherRouter = require('./voucher.routes');
const productRouter = require('./product.routes');

router.use('/categories', categoryRouter);
router.use('/collections', collectionRouter);
router.use('/vouchers', voucherRouter);
router.use('/products', productRouter);

module.exports = router;
