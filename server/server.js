require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use("/", require("./routes/noteRoute"));

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true}) 
.then(() => {
    console.log("DB Connected!");
})
.catch((err) => {
    console.log(err);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}
app.listen(port, function() {
    console.log("Server has started on port 3001");
});