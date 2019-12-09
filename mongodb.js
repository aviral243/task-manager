// CRUD create read update and delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    db.collection("users").findOne(
      { name: "Aviral", age: "67" },
      (error, user) => {
        if (error) {
          return console.log("Unable to find");
        }
        console.log(user);
      }
    );
  }
);
