const router = require('express').Router();
const authRouter = require('./auth.api.routes');
const tokenRouter = require('./token.api.routes');
const categoryRouter = require('./category.routes');
const collectionRouter = require('./collection.routes');
const voucherRouter = require('./voucher.routes');
const productRouter = require('./product.routes');
const subcategoryRouter = require('./subcategory.routes');
const cartRouter = require('./cart.routes');
const cartItemRouter = require('./cartItem.routes')

router.use('/tokens', tokenRouter);
router.use('/auth', authRouter);
router.use('/categories', categoryRouter);
router.use('/collections', collectionRouter);
router.use('/vouchers', voucherRouter);
router.use('/products', productRouter);
router.use('/subcategories', subcategoryRouter);
router.use('/cart', cartRouter);
router.use('/cartItems', cartItemRouter);


module.exports = router;
