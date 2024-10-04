const router = require('express').Router();
const authRouter = require('./auth.api.routes');
const tokenRouter = require('./token.api.routes');

router.use('/tokens', tokenRouter);
router.use('/auth', authRouter);


module.exports = router;