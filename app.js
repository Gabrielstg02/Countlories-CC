const express = require('express');
const dotenv = require('dotenv');
const router = require('./src/routes');
const cors = require('cors');
dotenv.config()


const app = express();
app.use(cors())

app.use(router);
app.use(express.json);

/* Karena DB nya belum dibuat aku comment dulu */
// const db = require("./app/models");
// db.sequelize.sync()
// .then(() => {
//   console.log("Synced db.");
// })
// .catch((err) => {
//   console.log("Failed to sync db: " + err);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});