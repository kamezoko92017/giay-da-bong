const Product = require('../models/Product');
const CryptoJS = require('crypto-js');

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
    = require('./verifyToken');

const router = require('express').Router();

//CREATE NEW PRODUCT (chỉ Admin thực hiện được request)

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();

        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE PRODUCT (chỉ Admin thực hiện được request)

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true });
        res.status(200).json(updateProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE PRODUCT (chỉ Admin thực hiện được request)

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Da xoa san pham !");
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET PRODUCT BY ID (Tất cả user đều thực hiện request này được)

router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET ALL PRODUCT (Tất cả user đều thực hiện request này được)

router.get("/", async (req, res) => {
    //Lấy 5 sản phẩm mới nhất hoặc lấy theo category

    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                }
            })
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;