module.exports = function applyPagination(data, page, limit) {
  if (page < 1 || limit < 1) return [];
  const startIndex = (page - 1) * limit;
  if (startIndex > data.length) return [];
  return data.slice(startIndex, startIndex + limit);
};
