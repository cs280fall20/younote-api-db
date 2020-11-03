const NoteDao = require("../model/NoteDao.js");
const express = require("express");
const { addSampleNotes } = require("../data/notes.js");
const router = express.Router();

const notes = new NoteDao();
addSampleNotes(notes);

router.use(express.json());

router.get("/api/notes", (req, res) => {
  const author = req.query.author;
  res.json({ data: notes.readAll(author) });
});

router.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  res.json({ data: notes.read(id) });
});

router.post("/api/notes", (req, res) => {
  const content = req.body.content;
  const author = req.body.author;

  try {
    const note = notes.create(content, author);
    res.status(201).json({ data: note });
  } catch (error) {
    res.status(400).json({
      errors: [
        {
          status: 400,
          detail: error.message,
        },
      ],
    });
  }
});

router.delete("/api/notes/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  const note = notes.delete(id);
  if (note) {
    res.json({ data: note });
  } else {
    res.status(404).json({
      errors: [
        {
          status: 404,
          detail: "Resource not found!",
        },
      ],
    });
  }
});

router.put("/api/notes/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  const content = req.body.content;
  const author = req.body.author;

  try {
    const note = notes.update(id, content, author);
    if (note) {
      res.json({ data: note });
    } else {
      res.status(404).json({
        errors: [
          {
            status: 404,
            detail: "Resource not found!",
          },
        ],
      });
    }
  } catch (error) {
    res.status(400).json({
      errors: [
        {
          status: 400,
          detail: error.message,
        },
      ],
    });
  }
});

module.exports = router;
