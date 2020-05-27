import React, { Component } from "react";
import { connect } from "react-redux";

import AdminHomePageBtn from "./partials/AdminHomepageBtn";
import FlashMessage from "./partials/FlashMessage";
import LoginForm from "./forms/LoginForm";
import SkillList from "./skills/SkillList";
import WorkList from "./works/WorkList";

class AdminHomePage extends Component {
  render() {
    return (
      <div className="container py-5">
        <AdminHomePageBtn to="home" />
        <FlashMessage />
        {!this.props.auth.isAuthenticated ? (
          <LoginForm />
        ) : (
          <div>
            <div className="row">
              <WorkList />
            </div>
            <div className="row">
              <SkillList />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(AdminHomePage);
