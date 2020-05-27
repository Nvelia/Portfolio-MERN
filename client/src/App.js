import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import WorkHomepage from "./components/workPage/WorkHomepage";
import SkillHomepage from "./components/skillPage/SkillHomepage";
import AdminHomePage from "./components/admin/AdminHomepage";
import Logout from "./containers/partials/auth/Logout";
import RequireAuth from "./utils/RequireAuth";
import AddCategory from "./containers/admin/category/AddCategory";
import AddSkill from "./containers/admin/skill/AddSkill";
import AddWork from "./containers/admin/work/AddWork";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/creations" component={WorkHomepage} />
      <Route exact path="/competences" component={SkillHomepage} />
      <Route
        exact
        path="/administration"
        component={RequireAuth(AdminHomePage)}
      />
      <Route exact path="/logout" component={RequireAuth(Logout)} />
      <Route
        exact
        path="/administration/ajouter-categorie"
        component={RequireAuth(AddCategory)}
      />
      <Route
        exact
        path="/administration/ajouter-competence"
        component={RequireAuth(AddSkill)}
      />
      <Route
        exact
        path="/administration/ajouter-creation"
        component={RequireAuth(AddWork)}
      />
    </Switch>
  );
}

export default App;
