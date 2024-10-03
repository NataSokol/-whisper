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

exports.createVoucher = async (req, res) => {
  try {
    const { title } = req.body;

    const voucher = await VoucherServices.createVoucher(title);
    res.status(201).json({ message: 'success', voucher });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.updateVoucher = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const voucher = await VoucherServices.updateVoucher(id, { title });
    res.status(200).json({ message: 'success', voucher });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.deleteVoucher = async (req, res) => {
  try {
    const { id } = req.params;
    
    const voucher = await VoucherServices.getVoucherById(id);
    if (!voucher) {
      res.status(404).json({ message: 'Voucher not found' });
    }
    await VoucherServices.deleteVoucher(id);
    res.status(200).json({ message: 'success' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
