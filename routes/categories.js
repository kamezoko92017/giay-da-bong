const Categories = require('../models/Categories');

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
    = require('./verifyToken');

const router = require('express').Router();

//CREATE NEW CATEGORY (chỉ Admin thực hiện được request)

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newCategory = new Categories(req.body);
    try {
        const savedCategory = await newCategory.save();

        res.status(200).json(savedCategory);
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE CATEGORY (chỉ Admin thực hiện được request)

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updateCategory = await Categories.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true });
        res.status(200).json(updateCategory);
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE PRODUCT (chỉ Admin thực hiện được request)

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Categories.findByIdAndDelete(req.params.id);
        res.status(200).json("Da xoa san pham !");
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET CATEGORIES BY ID (Tất cả user đều thực hiện request này được)

router.get("/find/:id", async (req, res) => {
    try {
        const category = await Categories.findById(req.params.id);
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET ALL CATEGORIES (Tất cả user đều thực hiện request này được)

router.get("/", async (req, res) => {
    //Lấy 5 category mới nhất

    try {
        let  categories = await Categories.find().sort({ createdAt: -1 }).limit(5);
        

        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;