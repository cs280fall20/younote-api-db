const express = require("express");
const noteRoutes = require("./routes/notes.js");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 4567;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(noteRoutes);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
