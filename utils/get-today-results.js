const fs = require("fs");
const data = require("../data/data.json");
const bolitaFetcher = require("./bolita-fetcher");

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
  if (data.indexOf(nowResult) === -1) writeToFile([...nowResult, ...data]);
}

run();
