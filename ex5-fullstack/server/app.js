const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let items = [];
let idCounter = 1;

app.get("/", (req, res) => {
  res.send("Welcome to the API! Use /api/items to interact with items.");
});

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.post("/api/items", (req, res) => {
  const newItem = { id: idCounter++, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.delete("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  items = items.filter(item => item.id !== id);
  res.status(204).send();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
