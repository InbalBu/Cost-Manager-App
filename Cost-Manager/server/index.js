const express = require('express')
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors');
const path = require("path");
const port = 5000
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const getReport = require("./routes/Cost/getReport");
const addCost = require("./routes/Cost/addcost");
const getCostById = require("./routes/Cost/getCostById");
const deleteCost = require("./routes/Cost/deleteCost");
const updateCost = require("./routes/Cost/updateCost");


dotenv.config();
app.use(express.json());
app.use(cors())

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
    
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/report", getReport);
app.use("/getCostById", getCostById);
app.use("/addcost", addCost);
app.use("/deleteCost", deleteCost);
app.use("/updateCost", updateCost);


app.use(express.static(path.resolve(__dirname, './build2')));

app.listen(port, () => {
    console.log(`Connected to server on port ${port}`)
})









