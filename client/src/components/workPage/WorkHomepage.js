import React, { Fragment } from "react";
import Header from "./../../containers/partials/Header";
import Work from "./../../containers/workPage/Work";
import CategoryList from "./../../containers/workPage/CategoryList";
import FlashMessage from "./../../containers/partials/FlashMessage";

const WorkHomepage = () => {
  return (
    <Fragment>
      <Header />
      <FlashMessage />
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-lg-12">
            <CategoryList />
            <Work />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WorkHomepage;
