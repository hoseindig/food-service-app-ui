const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const redis = require('redis');
const client = redis.createClient();

app.use(cors());
app.use(bodyParser.json());

///////////////////
//
let orders = [];
app.post("/api/order/new", (req, res) => {
  try {
    const { data } = req.body;
    const order = { id: Date.now(), data };
    orders.push(order);
    console.log("post ", order.data.shopList, "#issueTracking", order.id);
    res.json({
      isSucsses: true,
      mesagge: "sucsess",
      issueTracking: order.id,
      order,
    });
  } catch (e) {
    res.json({
      isSucsses: false,
      mesagge: "error " + e,
    });
  }
});

app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});
