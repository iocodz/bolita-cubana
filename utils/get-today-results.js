const fs = require("fs");
const data = require("../data/data.json");
const bolitaFetcher = require("./bolita-fetcher");
const clearResult = require("./clear-result");

function writeToFile(data) {
  fs.writeFile(`data/data.json`, JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log(`Saved!`);
  });
}

function fetchData() {
  return bolitaFetcher(1, 1)
    .then((res) => res.json())
    .then((data) => data.result);
}

async function run() {
  const nowResult = await fetchData();
  const r = clearResult(nowResult[0]);
  if (data.indexOf(r) == -1) writeToFile([r, ...data]);
}

run();
