module.exports = function clearResult(result) {
  let r = result;
  const properties = ["_id", "comments", "rating"];
  properties.map((property) => delete r[property]);
  return r;
};
