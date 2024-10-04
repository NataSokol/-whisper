const router = require('express').Router();
const voucherController = require('../controllers/voucherController');

router
  .route('/')
  .get(voucherController.getAllVouchers)
  .post(voucherController.createVoucher);

router
  .route('/:id')
  .get(voucherController.getVoucherById)
  .put(voucherController.updateVoucher)
  .delete(voucherController.deleteVoucher);

module.exports = router;
