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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {  
    console.log("Server started on port 3001");
});