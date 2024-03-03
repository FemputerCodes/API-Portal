const getRandom = (len) => {
  if (isNaN(len) || len <= 0) {
    console.log(`length is not a positive integer`);
    throw new Error("Invalid length argument");
  }
  return Math.floor(Math.random() * len);
};

module.exports = { getRandom };
