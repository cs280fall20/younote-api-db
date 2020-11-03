const faker = require("faker");

const NUM_SAMPLES = 4;

async function addSampleNotes(notes) {
  const data = await notes.readAll();

  if (data.length === 0) {
    for (let i = 0; i < NUM_SAMPLES; i++) {
      await notes.create(faker.lorem.paragraphs(), faker.name.findName());
    }
  }
}

module.exports = { addSampleNotes };