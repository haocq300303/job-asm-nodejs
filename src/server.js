const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const app = express();
const port = 8800;

app.use(methodOverride("_method"));
app.use(express.static("src/public"));

// database
const db = require("./config/db/index.js");
db.connect();

// router
const router = require("./app/routes/index");

// HTTP logger
app.use(morgan("combined"));

// bodyparser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// router
router(app);

// listen
app.listen(port, () => {
  console.log(`App listening to http://localhost:${port}`);
});
