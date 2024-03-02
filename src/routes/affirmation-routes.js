const express = require("express");
const affirmations = require("../data/affirmations");
const router = express.Router();
const { getRandom } = require("../util/util");

router.get("/", (req, res) => {
  res.status(200).send({
    affirmations,
  });
});

router.get("/random", (req, res) => {
  try {
    const random = getRandom(affirmations.length);
    const affirmation = affirmations[random];
    if (!affirmation) {
      throw new Error("No affirmations available");
    }
    // 200 means OK
    res.status(200).send({
      affirmation,
    });
  } catch (error) {
    console.error("error getting affirmation: ", error.message);
    // 500 means Internal Server Error
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
