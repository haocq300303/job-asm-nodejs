const routerAdmin = require("./admin");
const routerHome = require("./home");

const router = (app) => {
  // app.use('/me', routerMe);

  // app.use('/news', routerNews);

  app.use("/admin", routerAdmin);

  app.use("/", routerHome);
};

module.exports = router;
