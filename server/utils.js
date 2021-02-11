const axios = require('axios');

const getWikiSummary = (name) => {
  let url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${name}&format=json&exintro&explaintext`;

  return axios.get(url)
    .then((res) => {
      return Object.values(res.data.query.pages)[0].extract;
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getWikiSummary,
};
