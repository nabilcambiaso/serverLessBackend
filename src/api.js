const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nabil:nabil@cluster0.bq5u4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  console.log(err)
  console.log("connected")
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get("/users", (req, res) => {
  res.json({
    hello: "table of users 100"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
