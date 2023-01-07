module.exports = function applyFilters(data, event) {
  const filters = event.queryStringParameters;
  if (!filters) return data;

  const filteredData = data.filter((item) => {
    let isValid = true;
    for (key in filters) {
      isValid = isValid && item[key] == filters[key];
    }
    return isValid;
  });

  return filteredData;
};
