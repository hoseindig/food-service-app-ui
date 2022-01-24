const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const bugs = [
  { id: 1, description: "Bug 1", userId: 1, resolved: true },
  { id: 2, description: "Bug 2", userId: 1 },
  { id: 3, description: "Bug 3", userId: 2 },
  { id: 4, description: "Bug 4" },
];
const foods = [
  { id: 1, description: "food 1" },
  { id: 2, description: "food 2" },
  { id: 3, description: "food 3" },
];

console.log(bugs);

app.get("/api/foods", (req, res) => {
  console.log("foods ", bugs.length);
  res.json(foods);
});

app.get("/api/bugs", (req, res) => {
  console.log("get ", bugs.length);
  res.json(bugs);
});

app.post("/api/bugs", (req, res) => {
  const bug = { id: Date.now(), resolved: false, ...req.body };
  console.log("post ", bug);
  bugs.push(bug);

  res.json(bug);
});

app.patch("/api/bugs/:id", (req, res) => {
  debugger;
  console.log("patch # req.params.id", req.params.id);

  const index = bugs.findIndex((bug) => bug.id === parseInt(req.params.id));
  const bug = bugs[index];
  if ("resolved" in req.body) bug.resolved = req.body.resolved;
  if ("userId" in req.body) bug.userId = req.body.userId;

  console.log("patch ", bug);

  if (bug) res.json(bug);
  else res.json({ error: "Bug Not Found !", isSuccsess: false });
});

///////////////////
//
let orders = [];
app.post("/api/order/new", (req, res) => {
  const order = { id: Date.now(), ...req.body };
  orders.push(order);
  console.log("post ", order);
  res.json({ isSucsses: true, mesagge: "sucsess", order });
});

app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});
