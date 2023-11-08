const dotenv = require('dotenv');
const express = require("express");
const app = express();
const path = require("path");
const PORT =8081;
const ViteExpress = require("vite-express");

dotenv.config();
const cors = require('cors');
app.use(cors());

app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api", require('./api'))
app.use("/auth", require("./auth"))

app.use((req, res, next) => {
  next();
});


const server = app.listen(PORT, ()=>{
    console.log('On port'+PORT)
})

app.use((err, req, res, next) => {
  console.error(err.stack);


  console.error(`Error Status Code: ${err.status || 500}`);
  console.error(`Error Message: ${err.message || "Internal server error."}`);

  res.status(err.status || 500).send(err.message || "Internal server error.");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
