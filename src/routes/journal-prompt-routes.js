const express = require("express");
const journalPrompts = require("../data/journal-prompts");
const router = express.Router();
const { getRandom } = require("../utils/utils");

router.get("/", (req, res) => {
  res.status(200).send({
    journalPrompts,
  });
});

router.get("/random", (req, res) => {
  try {
    const random = getRandom(journalPrompts.length);
    const journalPrompt = journalPrompts[random];
    if (!journalPrompt) {
      throw new Error("No journal prompts available");
    }
    // 200 means OK
    res.status(200).send({
      journalPrompt,
    });
  } catch (error) {
    console.error("error getting journal prompt: ", error.message);
    // 500 means Internal Server Error
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
});

router.get("/random/:type", (req, res) => {
  const { type } = req.params;
  const typeJournalPrompts = journalPrompts.filter(
    (journalPrompt) => journalPrompt.type === type
  );
  if (typeJournalPrompts.length === 0) {
    return res.status(404).send({
      error:
        "Type not found or no journal prompt available for the specified type",
    });
  }

  const random = getRandom(typeJournalPrompts.length);
  const journalPrompt = typeJournalPrompts[random];

  res.status(200).send({
    journalPrompt,
  });
});

module.exports = router;
