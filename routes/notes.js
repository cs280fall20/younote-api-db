const NoteDao = require("../model/NoteDao.js");
const express = require("express");
const { addSampleNotes } = require("../data/notes.js");
const router = express.Router();

const notes = new NoteDao();
addSampleNotes(notes);

router.get("/api/notes", (req, res) => {
  const author = req.query.author;
  notes
    .readAll(author)
    .then((notes) => res.json({ data: notes }))
    .catch((err) => errorHandler(res, 500, err));
});

router.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  notes
    .read(id)
    .then((note) => res.json({ data: note }))
    .catch((err) => errorHandler(res, 500, err));
});

router.post("/api/notes", (req, res) => {
  const content = req.body.content;
  const author = req.body.author;
  notes
    .create(content, author)
    .then((note) => res.status(201).json({ data: note }))
    .catch((err) => errorHandler(res, 400, err));
});

router.delete("/api/notes/:id", (req, res) => {

});

router.put("/api/notes/:id", (req, res) => {

});

function errorHandler(res, status, error) {
  res.status(status).json({
    errors: [
      {
        status: status,
        detail: error.message || error,
      },
    ],
  });
}

module.exports = router;
