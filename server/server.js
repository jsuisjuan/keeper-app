require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use("/", require("./routes/noteRoute"));

mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}) 
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

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port, function() {
    console.log("Server has started on port 3001");
});