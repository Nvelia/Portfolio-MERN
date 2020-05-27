import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LoggedMenu = () => {
  return (
    <Fragment>
      <Link to="/administration" className="nav-link text-light">
        Administration
      </Link>
      <Link to="/logout" className="nav-link text-light">
        Se déconnecter
      </Link>
    </Fragment>
  );
};

export default LoggedMenu;
