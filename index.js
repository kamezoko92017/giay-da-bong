const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.js");
const authRouter = require("./routes/auth.js");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log('Connect to database success!') })
    .catch((err) => { console.log('Error connect to database: ', err) });


app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running !")
})