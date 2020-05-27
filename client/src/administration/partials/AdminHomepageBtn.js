import React from "react";
import { Link } from "react-router-dom";

const AdminHomepageBtn = ({ to }) => {
  return (
    <div className="admin-back-button">
      {to === "admin" && (
        <Link to="/administration">
          <i className="fas fa-arrow-circle-left btn-admin-homepage"></i>{" "}
          Administration
        </Link>
      )}
      {to === "home" && (
        <Link to="/">
          <i className="fas fa-arrow-circle-left btn-admin-homepage"></i>{" "}
          Homepage
        </Link>
      )}
    </div>
  );
};

export default AdminHomepageBtn;
