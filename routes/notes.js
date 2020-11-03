const NoteDao = require("../model/NoteDao.js");
const express = require("express");
const { addSampleNotes } = require("../data/notes.js");
const router = express.Router();

const notes = new NoteDao();
addSampleNotes(notes);

router.get("/api/notes", (req, res) => {

});

router.get("/api/notes/:id", (req, res) => {

});

router.post("/api/notes", (req, res) => {

});

router.delete("/api/notes/:id", (req, res) => {

});

router.put("/api/notes/:id", (req, res) => {

});

module.exports = router;
