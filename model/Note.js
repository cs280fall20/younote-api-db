const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  content: { type: String, required: true },
  author: { type: String, required: true },
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;