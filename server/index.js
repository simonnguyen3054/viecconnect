const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    //parse income body to json
    server.use(express.json());

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
