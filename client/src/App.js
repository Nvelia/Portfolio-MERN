import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import store from "./store";
import Fullpage from "./portfolio/Fullpage";
import ContactModal from "./portfolio/partials/ContactModal";
import AdminHomePage from "./administration/AdminHomepage";
import SkillForm from "./administration/forms/SkillForm";
import WorkForm from "./administration/forms/WorkForm";

import RequireAuth from "./HOC/RequireAuth";
import { fetchWorks } from "./actions/workActions";

class App extends Component {
  state = {
    works: null,
  };

  componentDidMount() {
    this.props.fetchWorks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.works !== this.props.works) {
      this.setState({
        works: this.props.works,
      });
    }

    if (prevProps.auth.token !== this.props.auth.token) {
      const token = store.getState().auth.token;

      if (token) {
        axios.defaults.headers.common["Authorization"] = token;
      } else {
        axios.defaults.headers.common["Authorization"] = null;
        // delete axios.defaults.headers.common['Authorization'];
      }
    }
  }

  render() {
    const { works } = this.state;

    return (
      <Fragment>
        {this.props.modal.opened && <ContactModal />}

        <Switch>
          <Route
            exact
            path="/"
            render={works && ((props) => <Fullpage works={works} />)}
          />
          <Route exact path="/administration" component={AdminHomePage} />
          <Route
            exact
            path="/administration/skill-form"
            component={RequireAuth(SkillForm)}
          />
          <Route
            exact
            path="/administration/work-form"
            component={RequireAuth(WorkForm)}
          />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    works: state.work.workList,
    modal: state.modal,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  fetchWorks,
})(App);
