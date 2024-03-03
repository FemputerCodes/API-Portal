const express = require("express");
const affirmations = require("../data/affirmations");
const router = express.Router();
const { getRandom } = require("../utils/utils");

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

router.get("/random/:type", (req, res) => {
  const { type } = req.params;
  const typeAffirmations = affirmations.filter(
    (affirmation) => affirmation.type === type
  );
  if (typeAffirmations.length === 0) {
    return res.status(404).send({
      error:
        "Type not found or no affirmations available for the specified type",
    });
  }

  const random = getRandom(typeAffirmations.length);
  const affirmation = typeAffirmations[random];

  res.status(200).send({
    affirmation,
  });
});

module.exports = router;
