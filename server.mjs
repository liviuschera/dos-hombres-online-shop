import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

if (process.env.NODE_ENV !== "production") {
  // import dotenv from "dotenv";
  // dotenv.config();
  // require("dotenv").config();
}

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendfile(path.join(__dirname, "client/build", "index.html"));
  });

  app.listen((port, error) => {
    if (error) {
      throw error;
    }
    console.log(`Server running on port ${port}`);
  });
}
