const getResults = require("../services/getResults");

exports.handler = async function (event) {
  try {
    const data = await getResults(event);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        e,
      }),
    };
  }
};
