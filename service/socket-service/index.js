//1400-11-10 hosein Sheykhi
const uuidv4 = require("uuid").v4;
const MongoClient = require("mongodb").MongoClient;

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://192.168.1.151:3000", "http://192.168.1.151:3001"],
  },
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  next();
});

const dbUsers = [
  {
    name: "reza",
    id: 13131,
    type: 2,
    username: "h1",
    password: "1",
  },
];
let orders = [];

io.on("connection", (socket) => {
  const userConected = socket.handshake.auth;
  const users = [];

  function checkUserIsAdmin(user) {
    let findUser = dbUsers.find(
      (u) =>
        u.username === user.username &&
        u.password &&
        user.password &&
        u.type === 2
    );
    return findUser ? true : false;
  }

  console.log("io.on connection", socket.username, socket.id);
  // fetch existing users
  for (let [id, socket] of io.of("/").sockets) {
    console.log("user Conected ", userConected.username);
    let isAdmin = false;
    if (socket.handshake.auth.type && socket.handshake.auth.type == 2)
      isAdmin = checkUserIsAdmin(socket.handshake.auth);
    users.push({
      userID: id,
      isAdmin,
      username: socket.username,
    });
  }

  // notify  user list
  socket.emit("users", users);

  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.id,
    username: socket.username,
    // isAdmin: resAdminFind ? true : false,
  });

  // forward the private message to the right recipient
  socket.on("private message", ({ content, to }) => {
    console.log("private message", content, to, socket.id);
    // sendMesaageToHimSelf(content, to);
    socket.to(to).emit("private message", {
      content,
      from: socket.id,
    });
  });

  ///////////////////////////////////////
  function getDateTimeNow() {
    const today = new Date();
    const dateTime =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();
    return dateTime;
  }

  async function getOrderFromDb(tackingNumber) {
    var url = "mongodb://localhost:27017/";
    const query = { id: 1643358677550 };
    let myPromise = new Promise(function (resolve, reject) {
      // resolve("I love You !!");
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test01");
        dbo
          .collection("orders")
          .find({ id: tackingNumber })
          // .find({}, { id: 1643358677550 })
          // .findOne(query)
          .toArray(function (err, result) {
            if (err) throw err;
            console.log("getOrderFromDb", result);
            resolve(result);
            db.close();
          });
      });
    });
    return await myPromise;
  }

  function findAndUpdateOrder(order) {
    const index = orders.findIndex((i) => i.trackNumber === order.trackNumber);
    
    if (index !== 1) {
      orders[index] = order;
      orders[index].lastChange=getDateTimeNow()
      socket.to(order.userID).emit("orders", orders[index]);
      socket.emit("orders",orders[index])
    } else console.log("findAndUpdateOeder not found");
  }

  function sendOrder() {
    orders.forEach((order) => {
      console.log("sendOrder userID", order.userID, order);
      socket.emit("orders", order); //.to(order.userID)
    });
  }
  ///////////////////////////////////////
  //                orders             //

  ///////////////////////////////////////
  socket.on("test", () => {
    console.log("socket.emit test");
    socket.emit("test", 1);
  });

  //new order =>1)save order 2) refer order
  socket.on("newOrder", ({ orders, to }) => {
    console.log("newOrder", orders, to, socket.id);
    const orderObject = {
      orders,
      from: socket.id,
      to: to,
      id: uuidv4(),
      time: getDateTimeNow(),
      type: 1,
      state: 1,
    };
    orders.push(orderObject);
    socket.to(to).emit("newOrder", { orderObject });
  });
  // getOrderState 1)get from data base 2)add to orders 3)send to client
  socket.on("getOrderState", ({ tackingNumber, to }) => {
    console.log("getOrderState", tackingNumber, to, socket.id);

    getOrderFromDb(tackingNumber)
      .then((res) => {
        console.log("#getOrderState emit", res);

        const shopList = res[0].shopList; //get new orders from db and send to kichecn
        const trackNumber = res[0].id; //get new orders from db and send to kichecn

        orders.push({
          orders: shopList,
          trackNumber,
          userID: socket.id,
          AdminID: to,
          state: 1,
          time:getDateTimeNow(),
          user: {
            username: socket.username,
          },
        });

        const admin = users.find((u) => u.isAdmin);
        orders.forEach((order) => {
          console.log("sendOrder userID", order.userID, order);
          socket.emit("orders", order); //.to(order.userID)
          // socket.to(to).emit("orders", order);
          if (admin) socket.to(admin.userID).emit("orders", order); //if admin online send order//.to(order.userID)
        });
      })
      .catch((err) => {
        console.log("#getOrderState err", err);
      });
  });
  //get ordders
  socket.on("getOrders", () => {
    console.log("getOrders");
    sendOrder(socket.id);
  });
  //change order state 1)find order 2)update order 3)send to user
  socket.on("setOrderState", (order) => {
    findAndUpdateOrder(order);
    console.log("setOrderState", order,  socket.id);

  });

  ///////////////////////////////////////
  // notify users upon disconnection
  socket.on("disconnect", () => {
    socket.broadcast.emit("user disconnected", socket.id);
    let user = users.find((i) => i.userID === socket.id);
    console.log("user disconnected", user.username, socket.id);
  });
});

const PORT = process.env.PORT || 9901;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
