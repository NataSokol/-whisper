const router = require('express').Router();
const voucherController = require('../controllers/voucherController');

router
  .route('/')
  .get(voucherController.getAllVouchers);

router
  .route('/:id')
  .get(voucherController.getVoucherById);

module.exports = router;
