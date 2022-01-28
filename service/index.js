const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/test01", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.on("open", console.log(console, "MongoDB connection is OK:"));
// async function mongooseInit() {
//   try {
//     mongoose.connection
//       .on("error", (err) => {
//         console.error(err);
//       })
//       .on("open", (err) => {
//         console.log("%cDB connected", "background:green");
//       });

//     await mongoose.connect("mongodb://localhost:27017/test01");
//   } catch (error) {
//     // handleError(error);
//   }
// }

var db = mongoose.connection;

function mongooseInit() {
  mongoose.connect("mongodb://127.0.0.1:27017/test01", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  // db.on("open", console.log(console, "MongoDB connection is OK:"));
}
mongooseInit();

///////////////////
// User model
const OrderModel = mongoose.model("Order", {
  shopList: [],
  foodSelected: { type: Number },
  id: { type: Number },
  state: { type: Number },
});

async function saveOrder(p) {
  console.log("saveOrder", p);

  let newOrder = new OrderModel({
    count: p.count,
    type: p.type,
    id: p.foodSelected ? p.foodSelected : p.id,
    shopList: p.shopList,
  });
  let res = null;
  await newOrder.save(function (err, result) {
    if (err) {
      res = false;
      console.log("saveDb err", err);
    } else {
      res = true;
      console.log("saveDb result", result);
    }
  });

  return await res;
}

// function saveOrder(order) {
//   debugger;
//   db.OrderModel.insert({ name: "xxx", rank: 1, purchases: [] }); //empty array optional
//   db.OrderModel.update(
//     { name: "xxx" },
//     { $push: { purchases: ["t-shirt", "shoes"] } }
//   );
//   // db.OrderModel.insert({name:"xxx",rank:1,purchases:[]});//empty array optional
//   // db.OrderModel.insert({ id: order.id, orders: order.data.shopList }); //empty array optional
// }
///////////////////
app.use(cors());
app.use(bodyParser.json());
///////////////////
const bugs = [
  { id: 1, description: "Bug 1", userId: 1, resolved: true },
  { id: 2, description: "Bug 2", userId: 1 },
  { id: 3, description: "Bug 3", userId: 2 },
  { id: 4, description: "Bug 4" },
];

///////////////////
// console.log(bugs);
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
  try {
    console.log("/api/order/new", req.body.data);
    const { data } = req.body;
    const order = { id: Date.now(), shopList: data.shopList };
    console.log("post ", order.shopList, "#issueTracking", order.id);

    // saveDb(data.shopList);
    let saveDb = saveOrder(order)
      .then((resSave) => {
        console.log(resSave);
        res.json({
          isSucsses: true,
          saveDb: saveDb,
          mesagge: "sucsess",
          issueTracking: order.id,
          order,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          isSucsses: false,
          mesagge: "error " + err,
        });
      });
    orders.push(order);
    
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
