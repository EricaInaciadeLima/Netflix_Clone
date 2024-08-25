const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

// Configure Morgan to log HTTP requests
app.use(morgan("dev"));

// GET ALL RECORDS
app.get("/", (req, res) => {
  res.send("GET ALL");
});

// GET A SINGLE RECORD BY ID
app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Get only the record with ID: ${id}`);
});

// CREATE A NEW RECORD
app.post("/", (req, res) => {
  const body = req.body;
  res.send(body);
});

// UPDATE A RECORD BY ID
app.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Update only the record with ID: ${id}`);
});

// DELETE A RECORD BY ID
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Delete only the record with ID: ${id}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
