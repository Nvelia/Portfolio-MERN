import React from "react";
import { Link } from "react-router-dom";

const AdminHomepageBtn = () => {
  return (
    <Link to="/administration">
      <i className="fas fa-arrow-circle-left text-info btn-admin-homepage"></i>
    </Link>
  );
};

export default AdminHomepageBtn;
