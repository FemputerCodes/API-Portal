const express = require("express");
const app = express();
const cors = require("cors");
const affirmationRoutes = require("./routes/affirmation-routes");
const journalPromptRoutes = require("./routes/journal-prompt-routes");
const stepBackRoutes = require("./routes/step-back-routes");
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("This is my API Portal");
});

app.use("/affirmations", affirmationRoutes);

app.use("/journal-prompts", journalPromptRoutes);

app.use("/step-backs", stepBackRoutes);

app.listen(PORT, () =>
  console.log(`It's alive! Server is running on http://localhost:${PORT}`)
);
