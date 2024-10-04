/* 

Метод для продуктов FINDLAll

static getAllProducts = async () => {
    const products = await Product.findAll({
        include: [
            {
        model: ProductSize,
      },
    ],
});
return products.map((product) => product.get());
};

Метод для сертификатов FINDALL

static getAllVouchers = async () => {
    const vouchers = await Voucher.findAll({
        include: [
            {
        model: User,
            through: {
                model: UserVoucher,
            attributes: ['userId']
        },
            attributes: ['id', 'name']
            }
        ]
    });
    return vouchers.map((voucher) => voucher.get());
};

*/
