const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://anu:anucool123@ds239578.mlab.com:39578/metro-delivery", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("MongoDbConnected"))
    .catch(err => console.log(err));

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Start
const auth = require("./routes/authentication");
app.use("/auth", auth);

const prod = require("./routes/products");
app.use("/prod", prod);

const get = require("./routes/get");
app.use("/get", get);

// End
var port = process.env.PORT || 8080;
app.listen(port, console.log(`server started at port:${port}`));