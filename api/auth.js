const dotenv = require("dotenv");

dotenv.config()

const auth = {
    headers: { Authorization:`token ${process.env.GITHUB_TOKEN}` },
  };

module.exports = auth