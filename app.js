const express = require("express");
const app = express();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "L!rg2x!220X75WM",
  database: "casaxavi",
});
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/browse", (req, res) => {
  connection.query("SELECT * FROM properties", (err, results) => {
    if (err) {
      console.error("Error fetching properties:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.render("browse.ejs", { properties: results });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
