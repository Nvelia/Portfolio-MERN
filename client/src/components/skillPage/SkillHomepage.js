import React, { Fragment } from "react";
import Header from "../../containers/partials/Header";
import SkillTable from "./../../containers/skillPage/SkillTable";
import Career from "./Career";
import FlashMessage from "./../../containers/partials/FlashMessage";

const SkillHomepage = () => {
  return (
    <Fragment>
      <Header />
      <FlashMessage />
      <div className="container-fluid">
        <div className="row">
          <SkillTable />
          <Career />
        </div>
      </div>
    </Fragment>
  );
};

export default SkillHomepage;
