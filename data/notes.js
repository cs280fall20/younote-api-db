const faker = require("faker");

const NUM_SAMPLES = 4;

function addSampleNotes(notes) {
  for (let i = 0; i < NUM_SAMPLES; i++) {
    notes.create(faker.lorem.paragraphs(), faker.name.findName());
  }
}

module.exports = { addSampleNotes };
