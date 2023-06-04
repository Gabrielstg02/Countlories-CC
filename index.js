const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const router = require('./src/routes');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(router);
app.use(express.json);

const db = require("./src/models");
db.sequelize.sync()
.then(() => {
  console.log("Synced db.");
})
.catch((err) => {
  console.log("Failed to sync db: " + err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});