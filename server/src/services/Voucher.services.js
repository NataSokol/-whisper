const { Voucher } = require('../db/models');

class VoucherServices {
  static getAllVouchers = async () => {
    const vouchers = await Voucher.findAll();
    return vouchers.map((voucher) => voucher.get());
  };

  static getVoucherById = async (id) => {
    const voucher = await Voucher.findByPk(id);
    return voucher ? voucher.get() : null;
  };
}

module.exports = VoucherServices;
