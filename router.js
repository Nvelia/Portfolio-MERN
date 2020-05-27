const MemberController = require("./controllers/MemberController");
const WorkController = require("./controllers/WorkController");
const SkillController = require("./controllers/SkillController");
require("./config/passport");
const passport = require("passport");

// Indique a passport d'utiliser un type d'authentification jwt et pas de session ( authentification avec cookie )
const requireAuth = passport.authenticate("jwt", { session: false });
const requireValidLogin = passport.authenticate("local", { session: false });

module.exports = function (app) {
  app.post("/members/register", MemberController.register);
  app.post("/members/login", requireValidLogin, MemberController.login);

  app.post("/works/add", requireAuth, WorkController.add);
  app.get("/works/", WorkController.fetchAll);
  app.delete("/works/:id", requireAuth, WorkController.delete);
  app.put("/works/:id", requireAuth, WorkController.update);

  app.post("/skills/add", requireAuth, SkillController.add);
  app.get("/skills/", SkillController.fetchAll);
  app.delete("/skills/:id", requireAuth, SkillController.delete);
  app.post("/skills/:id", requireAuth, SkillController.update);
};
