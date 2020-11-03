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

  async update(id, content, author) {
    const note = await Note.findByIdAndUpdate(
      id,
      { content, author },
      { new: true, runValidators: true }
    );
    return note;
  }

  async delete(id) {
    const note = await Note.findByIdAndDelete(id);
    return note;
  }
}

module.exports = NoteDao;
