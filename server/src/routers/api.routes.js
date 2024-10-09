const router = require("express").Router();
const authRouter = require("./auth.api.routes");
const userInfoRouter = require("./user.routes");
const tokenRouter = require("./token.api.routes");
const categoryRouter = require("./category.routes");
const collectionRouter = require("./collection.routes");
const voucherRouter = require("./voucher.routes");
const productRouter = require("./product.routes");
const subcategoryRouter = require("./subcategory.routes");
const productSizeRouter = require("./productSize.routes");
const cartRouter = require("./cart.routes");
const cartItemRouter = require("./cartItem.routes");
const colorRouter = require("./color.routes");

router.use("/tokens", tokenRouter);
router.use("/auth", authRouter);
router.use("/user", userInfoRouter);
router.use("/categories", categoryRouter);
router.use("/collections", collectionRouter);
router.use("/vouchers", voucherRouter);
router.use("/products", productRouter);
router.use("/subcategories", subcategoryRouter);
router.use("/productsizes", productSizeRouter);
router.use("/cart", cartRouter);
router.use("/cartItems", cartItemRouter);
router.use("/colors", colorRouter);

module.exports = router;
