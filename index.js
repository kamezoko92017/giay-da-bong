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

mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log('Connect to database success!') })
    .catch((err) => { console.log('Error connect to database: ', err) });

//để server có thể nhận các request có body truyền dạng JSON
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running !")
})