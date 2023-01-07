const fs = require("fs");
const bolitaFetcher = require("./bolita-fetcher");

function writeToFile(data) {
  fs.writeFile(`../data/data.json`, JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log(`Saved!`);
  });
}

function fetchData(page) {
  return bolitaFetcher(page).then((res) => res.json())
  .then(data => data.result);
}

async function run() {
  let allData = [];
  for (let page = 1; page < 2; page++){
    const data = await fetchData(page);
    allData = [...allData, ...data];
    console.log(allData.length);
  }
  writeToFile(allData);
}

run();
