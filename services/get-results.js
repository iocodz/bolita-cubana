const data = require("../data/data.json");
const applyFilters = require("../utils/apply-filters");
const applyPagination = require("../utils/apply-pagination");

module.exports = async function getResults(event) {
  const filters = event.queryStringParameters;
  const { page = 1, limit = 10 } = filters;

  delete filters.page;
  delete filters.limit;

  const results = applyFilters(data, event);
  const resultsPaginated = applyPagination(results, parseInt(page), parseInt(limit));

  return {
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      totalCount: results.length,
      totalPages: parseInt(results.length / limit) + 1,
    },
    results: resultsPaginated
  };
};
