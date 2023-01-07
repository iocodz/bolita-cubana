const fetch = require("node-fetch");

const fetchConfig = {
  headers: {
    accept: "*/*",
    "accept-language": "es-US,es;q=0.9,es-419;q=0.8,en;q=0.7",
    "sec-ch-ua":
      '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": '"Android"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    cookie:
      "_ga=GA1.1.999223356.1673014404; __Host-next-auth.csrf-token=1c2881fa0fdd74761c84b97a110fc27ec0682cb4600fbb7ddadc7f5333529627%7C238a5eb21f486ab84056008c00aea6430df8776acd3302ddba34810e26a9a4f4; __Secure-next-auth.callback-url=https%3A%2F%2Fbolitacuba.com; AwesomeCookie=true; _ga_DDBM6T01B5=GS1.1.1673014403.1.0.1673014407.0.0.0; __gads=ID=48dbcad32d0c43e3-22ddffba877f00af:T=1673014408:RT=1673014408:S=ALNI_MbDGEsNa4KsMQCAERwRuW-9ThJkiw; __gpi=UID=000009de4d129930:T=1673014408:RT=1673014408:S=ALNI_MZFakYpt5buryUJoSowVsbGKdHwug",
    Referer: "https://bolitacuba.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: null,
  method: "GET",
};

const bolitaFetcher = (page, limit = 1000) =>
  fetch(
    `https://bolitacuba.com/api/bolita_cuba/tiradas?currentPage=${page}&sort=DESC&find=&draw=&day=&datefrom=&dateto=&limit=${limit}`,
    fetchConfig
  );

module.exports = bolitaFetcher;
