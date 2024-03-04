const express = require("express");
const stepBacks = require("../data/step-backs");
const router = express.Router();
const { getRandom, filterStepBacks } = require("../utils/utils");

router.get("/", (req, res) => {
  res.status(200).send({
    stepBacks,
  });
});

router.get("/random", (req, res) => {
  try {
    const random = getRandom(stepBacks.length);
    const stepBack = stepBacks[random];
    if (!stepBack) {
      throw new Error("No step backs available");
    }
    // 200 means OK
    res.status(200).send({
      stepBack,
    });
  } catch (error) {
    console.error("error getting step back: ", error.message);
    // 500 means Internal Server Error
    res.status(500).send({
      error: "Internal Server Error",
    });
  }
});

router.get("/random/:param1?/:param2?/:param3?", (req, res) => {
  const { param1, param2, param3 } = req.params;
  let filteredStepBacks = stepBacks;

  console.log("param1: ", param1);
  console.log("param2: ", param2);
  console.log("param3: ", param3);

  if (param1) {
    filteredStepBacks = filterStepBacks(param1, filteredStepBacks);
  }
  if (param2) {
    filteredStepBacks = filterStepBacks(param2, filteredStepBacks);
  }
  if (param3) {
    filteredStepBacks = filterStepBacks(param3, filteredStepBacks);
  }

  if (filteredStepBacks.length === 0) {
    return res.status(400).send({
      error: "Location, type, or length not found or no step back available",
    });
  }

  const random = getRandom(filteredStepBacks.length);
  const stepBack = filteredStepBacks[random];

  res.status(200).send({
    stepBack,
  });
});

module.exports = router;
