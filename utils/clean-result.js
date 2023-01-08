module.exports = function cleanResult(result) {
  let r = result;
  const properties = ["_id", "comments", "rating"];
  properties.map((property) => delete r[property]);
  return r;
};
