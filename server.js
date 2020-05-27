const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./router");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const app = express();

// const db = require("./config/keys").mongoURI; // DB Config

const port = process.env.PORT || 5000;
const formData = require("express-form-data");

// Connect to MongoDB
mongoose
  .connect(require("./config/keys").mongoDB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.log(err));

// Middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(formData.parse());

app.use(cors());

router(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => console.log(`Serveur en ligne sur port:  ${port} !`));
