const express = require("express");
const router = require("./ROUTER/router.js").router;
const sequelize = require("./MODELS/connection.js").sequelize;
sync();
async function sync() {
  await sequelize.sync();
}

const app = express();

app.use(express.json());

app.use(router);

app.listen(5000);
