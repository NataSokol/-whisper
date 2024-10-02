const VoucherServices = require('../services/Voucher.services');

exports.getAllVouchers = async (req, res) => {
  try {
    const vouchers = await VoucherServices.getAllVouchers();
    res.status(200).json({ message: 'success', vouchers });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getVoucherById = async (req, res) => {
  try {
    const { id } = req.params;
    const voucher = await VoucherServices.getVoucherById(id);
    res.status(200).json({ message: 'success', voucher });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
