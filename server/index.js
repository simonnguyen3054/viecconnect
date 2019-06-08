const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "viecconnect";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log("unable to connect");

  console.log("Connected successfully to server");

  //connnect to database
  const db = client.db(databaseName);

  // db.collection('jobs').insertOne({
  //   job_name: 'Nail',
  //   job_avatar: 'https://s3-us-west-1.amazonaws.com/acceptmycrypto/dealsImages/acceptmycrypto/sample-deal-images/nail_avatar.jpeg'
  // }), (error, result) => {
  //   if (error) return console.log('Unable to connect to jobs');

  //   console.log(result.ops);
  // }

  // db.collection('jobs').insertMany([
  //   {
  //     job_name: 'Server',
  //     job_avatar: 'https://s3-us-west-1.amazonaws.com/acceptmycrypto/dealsImages/acceptmycrypto/sample-deal-images/hau_ban.jpeg'
  //   },
  //   {
  //     job_name: 'Cook',
  //     job_avatar: 'https://s3-us-west-1.amazonaws.com/acceptmycrypto/dealsImages/acceptmycrypto/sample-deal-images/hau_ban.jpeg'
  //   }
  // ]), (err, result) => {
  //   if (err) return console.log('unable to insert documents');

  //   console.log(result.ops);
  // }
});

app
  .prepare()
  .then(() => {
    const server = express();

    //API
    const postRoutes = require("./routers/posts.js");

    server.use("/api", postRoutes);

    //Add new routes here
    //map the custom route "p/:id" to the existing page "/post"
    //map query params as well
    server.get("/p/:id", (req, res) => {
      const postPage = "/post";
      const queryParams = { id: req.params.id };

      app.render(req, res, postPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
