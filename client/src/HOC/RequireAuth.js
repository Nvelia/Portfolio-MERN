import React, { Component } from "react";
import { connect } from "react-redux";

export default function (ChildComponent) {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);

      if (!this.props.auth.isAuthenticated) {
        return this.props.history.push("/administration");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth.isAuthenticated) {
        return nextProps.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    };
  };

  return connect(mapStateToProps, null)(RequireAuth);
}
