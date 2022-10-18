const User = require('../models/User');
const CryptoJS = require('crypto-js');

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
    = require('./verifyToken');

const router = require('express').Router();

//login by Google
router.post("/loginGoogle", async (req, res) => {
    return res.status(200).json({ success: true, usersid: 'id response from server' });
    // process to save to Database
})

//create new user normal (tất cả user thực hiện được request)
router.post("/", async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();

        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err)
    }
})

//update user
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        //Nếu người dùng nhập password mới thì mã hóa pass này để update password
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SECRET
        ).toString();
    }

    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {

            $set: req.body
        }, { new: true });
        res.status(200).json(updateUser);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('Da xoa user !');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json({ others });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    //Nếu truyền tham số new=true vào request (http://localhost:5000/api/users?new=true)
    //thì chỉ lấy 5 phần tử mới nhất

    const query = req.query.new;
    try {
        const users = query
            ? await User.find({}).select("-password").sort({ _id: -1 }).limit(5)
            : await User.find({}).select("-password");
        // const users = await User.find({}).select("-password");
        // const { password, ...others } = users;
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;