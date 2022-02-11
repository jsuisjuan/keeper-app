const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema ({
    // _id: ObjectId
    title: String,
    content: String
});

const Note = new mongoose.model("Note", noteSchema);

module.exports = Note;