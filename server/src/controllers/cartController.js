const CartServices = require('../services/Cart.services');

exports.getCartByUserId = async (req, res) => {
    try {
        const {id: userId} = res.locals.user
        const cart = await CartServices.getCartByUserId(userId);
        // const cart = await CartServices.getCartByUserId(1);
        res.status(200).json({ message: 'success', cart });
    } catch ({ message }) {
        res.status(500).json({ error: message });
    }
}
// exports.createCart = async (req, res) => {
//     try {
//         const {id: userId} = res.locals.user
//          console.log(2222222222222, res.locals.user);
        
//         const cart = await CartServices.createCart(userId);
//         res.status(201).json({ message: 'success', cart });
//     } catch ({ message }) {
//         res.status(500).json({ error: message });
//     }
// }

exports.updateCart = async (req, res) => {
    try {
        const {id: userId} = res.locals.user
        const {id} = req.params
        const {total, salePrice} = req.body
        const cart = await CartServices.updateCart(id, userId, total, salePrice);
        res.status(200).json({ message: 'success', cart });
    } catch ({ message }) {
        res.status(500).json({ error: message });
    }
}

exports.deleteCart = async (req, res) => {
    try {
        const {id: userId} = res.locals.user
        const {id} = req.params
        const cart = await CartServices.deleteCart(id, userId);
        res.status(200).json({ message: 'success', cart });
    } catch ({ message }) {
        res.status(500).json({ error: message });
    }
}