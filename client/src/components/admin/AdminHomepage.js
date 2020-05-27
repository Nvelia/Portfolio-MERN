import React, { Fragment } from "react";
import Header from "../../containers/partials/Header";
import CategoryList from "../../containers/admin/category/CategoryList";
import WorkList from "../../containers/admin/work/WorkList";
import SkillList from "../../containers/admin/skill/SkillList";
import FlashMessage from "../../containers/partials/FlashMessage";

const AdminHomePage = () => {
  return (
    <Fragment>
      <Header />
      <div className="container mb-5 adminHomepage">
        <FlashMessage />
        <div className="row">
          <WorkList />
        </div>
        <div className="row">
          <CategoryList />
          <SkillList />
        </div>
      </div>
    </Fragment>
  );
};

export default AdminHomePage;
