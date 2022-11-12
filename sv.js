const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.js");
const authRouter = require("./routes/auth.js");
const productRouter = require("./routes/product.js");
const cartRouter = require("./routes/cart.js");
const orderRouter = require("./routes/order.js");

dotenv.config();
const PORT_BACKEND = process.env.PORT || 8000;

// MONGO_URL=mongodb+srv://hainguyen:12345@cluster0.vz5lssj.mongodb.net/giay_da_bong?retryWrites=true&w=majority


mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log('Connect to database success!') })
    .catch((err) => { console.log('Loi ket noi: ', err) });

//để server có thể nhận các request có body truyền dạng JSON
app.use(express.json());

//fix loi CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.listen(PORT_BACKEND, () => {
    console.log("Backend server dang chay tren - port ", PORT_BACKEND)
})