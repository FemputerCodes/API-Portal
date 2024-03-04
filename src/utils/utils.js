const getRandom = (len) => {
  if (isNaN(len) || len <= 0) {
    console.log(`length is not a positive integer`);
    throw new Error("Invalid length argument");
  }
  return Math.floor(Math.random() * len);
};

const filterStepBacks = (param, filteredStepBacks) => {
  console.log("param: ", param);
  // param is location
  if (param === "indoor" || param === "outdoor") {
    return filteredStepBacks.filter((stepBack) => stepBack.location === param);
  }
  // param is type
  if (param === "inactive" || param === "active") {
    return filteredStepBacks.filter((stepBack) => stepBack.type === param);
  }
  // param is length
  if (param === "short" || param === "long") {
    return filteredStepBacks.filter((stepBack) => stepBack.length === param);
  }
};
module.exports = { getRandom, filterStepBacks };
