require("dotenv").config();
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
const app = require("./app");
require("../config/database");

async function main() {
  await app.listen(port, host, () => {
    console.log('Server running')
  });
}

main();
