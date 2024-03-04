const express = require("express");
const stepBacks = require("../data/step-backs");
const router = express.Router();
const { getRandom } = require("../utils/utils");

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

router.get("/random/:param", (req, res) => {
  const { param } = req.params;
  let paramStepBacks = "";

  // check if param is location
  if (param === "indoor" || param === "outdoor") {
    paramStepBacks = stepBacks.filter(
      (stepBack) => stepBack.location === param
    );
  } else if (param === "active" || param === "inactive") {
    paramStepBacks = stepBacks.filter((stepBack) => stepBack.type === param);
  } else if (param === "short" || param === "long") {
    paramStepBacks = stepBacks.filter((stepBack) => stepBack.length === param);
  }
  if (paramStepBacks.length === 0) {
    return res.status(404).send({
      error:
        "Parameter not found or no step backs available for the specified paramter",
    });
  }

  const random = getRandom(paramStepBacks.length);
  const stepBack = paramStepBacks[random];

  res.status(200).send({
    stepBack,
  });
});

module.exports = router;
