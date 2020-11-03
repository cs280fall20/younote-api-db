const Note = require("./Note");

class NoteDao {
  constructor() {
  }

  async create(content, author) {
    const note = await Note.create({ content, author });
    return note;
  }  

  async readAll(author = "") {
    const filter = author ? { author } : {};
    const notes = await Note.find(filter);
    return notes;
  }

  async read(id) {
    const note = await Note.findById(id);
    return note;
  }

  update(id, content, author) {
    return null;
  }

  delete(id) {
    return null;
  }
}

module.exports = NoteDao;
