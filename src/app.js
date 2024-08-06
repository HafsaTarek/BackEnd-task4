const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";

const dbname = "proj-1";

mongoClient.connect(connectionURL, (error, res1) => {
  if (error) {
    console.log("Unable to connect");
  }
  console.log("All perf");
  const db = res1.db(dbname);

  db.collection("users").insertOne(
    {
      name: "Hafsa",
      age: 20,
    },
    (error, data) => {
      if (error) {
        console.log("Unable to insert data");
      } else {
        console.log(data.insertedId);
      }
    }
  );

  db.collection("users").insertOne(
    {
      name: "Manar",
      age: 19,
    },
    (error, data) => {
      if (error) {
        console.log("Unable to insert data");
      } else {
        console.log(data.insertedId);
      }
    }
  );

  db.collection("users").insertMany(
    [
      {
        name: "Basil",
        age: 21,
      },
      {
        name: "Hend",
        age: 21,
      },
      {
        name: "Aml",
        age: 41,
      },
      {
        name: "Habiba",
        age: 19,
      },
      {
        name: "Shrouk",
        age: 37,
      },
      {
        name: "Mohamed",
        age: 27,
      },
      {
        name: "Mahmoud",
        age: 27,
      },
      {
        name: "Rosie",
        age: 27,
      },
      {
        name: "Ahmed",
        age: 27,
      },
      {
        name: "Sara",
        age: 27,
      },
    ],
    (error, data) => {
      if (error) {
        console.log("Unable to insert data");
      } else console.log(data.insertedCount);
    }
  );

  db.collection("users")
    .find({ age: 27 })
    .toArray((error, users) => {
      if (error) {
        console.log("Unable to fetch data");
        return;
      }
      console.log(users);
    });

  db.collection("users")
    .find({ age: 27 })
    .limit(3)
    .toArray((error, users) => {
      if (error) {
        console.log("Unable to fetch data");
        return;
      }
      console.log(users);
    });

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("66b29a01fa2a2f1c1d65c018") },
      {
        $set: { name: "Osama" },
        $inc: { age: 4 },
      }
    )
    .then((data1) => console.log(data1.modifiedCount))
    .catch((error) => console.log(error));

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("66b29a01fa2a2f1c1d65c019") },
      {
        $set: { name: "Rana" },
        $inc: { age: 4 },
      }
    )
    .then((data1) => console.log(data1.modifiedCount))
    .catch((error) => console.log(error));

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("66b29a01fa2a2f1c1d65c01a") },
      {
        $set: { name: "Rahma" },
        $inc: { age: 4 },
      }
    )
    .then((data1) => console.log(data1.modifiedCount))
    .catch((error) => console.log(error));

  db.collection("users")
    .updateOne(
      { _id: mongodb.ObjectId("66b29a01fa2a2f1c1d65c01b") },
      {
        $set: { name: "Maryam" },
        $inc: { age: 4 },
      }
    )
    .then((data1) => console.log(data1.modifiedCount))
    .catch((error) => console.log(error));

  db.collection("users")
    .updateMany(
      {},
      {
        $inc: { age: 10 },
      }
    )
    .then((data1) => console.log(data1.modifiedCount))
    .catch((error) => console.log(error));

  db.collection("users")
    .deleteMany({ age: 41 })
    .then((data1) => console.log(data1.deletedCount))
    .catch((error) => console.log(error));
});
