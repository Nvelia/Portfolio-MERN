const MemberController = require("./controllers/MemberController");
const WorkController = require("./controllers/WorkController");
const SkillController = require("./controllers/SkillController");
const CategoryController = require("./controllers/CategoryController");
const ImageController = require("./controllers/ImageController");
require("./config/passport");
const passport = require("passport");

// Indique a passport d'utiliser un type d'authentification jwt et pas de session ( authentification avec cookie )
//const requireAuth = passport.authenticate("jwt", { session: false });
const requireValidLogin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.post("/members/register", MemberController.register);
  app.post("/members/login", requireValidLogin, MemberController.login);

  app.post("/works/add", WorkController.add);
  app.get("/works/", WorkController.fetchAll);
  app.delete("/works/:id", WorkController.delete);
  app.put("/works/:id", WorkController.update);

  app.post("/skills/add", SkillController.add);
  app.get("/skills/", SkillController.fetchAll);
  app.delete("/skills/:id", SkillController.delete);
  app.post("/skills/:id", SkillController.update);

  app.post("/categories/add", CategoryController.add);
  app.get("/categories/", CategoryController.fetchAll);
  app.delete("/categories/:id", CategoryController.delete);
  app.post("/categories/:id", CategoryController.update);

  app.post("/images/add", ImageController.add);
  app.post("/images/:id", ImageController.update);
  app.get("/images/:id", ImageController.fetchOne);
};
