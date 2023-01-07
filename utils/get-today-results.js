const fs = require("fs");
const data = require("../data/data.json");
const bolitaFetcher = require("./bolita-fetcher");

function writeToFile(data) {
  fs.appendFile(`../data/data.json`, JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log(`Saved!`);
  });
}

function fetchData() {
  return bolitaFetcher(1, 3)
    .then((res) => res.json())
    .then((data) => data.result);
}

async function run() {
  let allData = data;
  const newData = await fetchData();
  const addData = [];
  newData.map((result) => {
    const is = allData.filter((item) => item.id === result.id);
    if (!is) addData.push(result);
  });
  allData = [...addData, ...allData];
  writeToFile(allData);
}

run();
