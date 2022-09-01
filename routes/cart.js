const Cart = require('../models/Cart');
const CryptoJS = require('crypto-js');

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
    = require('./verifyToken');

const router = require('express').Router();

//CREATE NEW CART (verifyToken thực hiện được request)

router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();

        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE CART

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true });
        res.status(200).json(updateCart);
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE CART

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findById(req.params.id);
        res.status(200).json("Da xoa giỏ hàng !");
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET CART BY ID (Tất cả user đều thực hiện request này được)

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
})

// //GET ALL CART 

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        let carts = await Cart.find()
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;