const express = require("express");
const fetch = require("node-fetch");
const mongoose = require("mongoose");
const fs = require("fs");

const port = 3000;
const app = express();

const dbConn = "mongodb://localhost:27017/comments_app";
mongoose.connect(
  dbConn,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  err => {
    if (err) {
      console.log("Error connecting to database", err);
    } else {
      console.log("Connected to database!");
    }
  }
);

const fetchData = async () => {
  try {
    const dataUrl = "https://jsonplaceholder.typicode.com/comments";
    const response = await fetch(dataUrl);
    const data = await response.json();
    let json = JSON.stringify(data, null, 2);

    fs.writeFile("./data/comments.json", json, "utf8", err => {
      if (err) throw err;
      console.log("Data Written to file");
    });
  } catch (err) {
    console.log(err);
  }
};

fetchData();

app.listen(port, () => {
  console.log(`express app listening on port ${port}`);
});
