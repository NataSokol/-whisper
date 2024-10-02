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

  static createVoucher = async (title) => {
    const voucher = await Voucher.create({ title });
    return voucher.get();
  };

  static updateVoucher = async (id, { title }) => {
    const voucher = await Voucher.findByPk(id);
    if (voucher) {
      await voucher.update({ title });
      return voucher.get();
    }
    return null;
  };

  static deleteVoucher = async (id) => {
    const voucher = await Voucher.findByPk(id);
    if (voucher) {
      return voucher.destroy();
    }
    return 'Voucher not found';
  };
}

module.exports = VoucherServices;
