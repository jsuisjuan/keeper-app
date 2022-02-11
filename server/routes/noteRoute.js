const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

router.route("/notes").get((req, res) => {
    Note.find()
        .then(foundNotes => res.json(foundNotes));
});

router.route("/create").post((req, res) => {
    const newTitle = req.body.title;
    const newContent = req.body.content;

    const newNote = new Note ({
        title: newTitle,
        content: newContent
    });

    newNote.save();
});

router.route("/delete/:id").delete((req, res) => {
    const id = req.params.id;
    
    Note.findByIdAndDelete({_id: id}, (req, res, err) => {
        if (!err) {
            console.log("Item deleted");
        } else {
            console.log(err);
        }
    });
});

module.exports = router;