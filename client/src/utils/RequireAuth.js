import React, { Component } from "react";
import { connect } from "react-redux";
import { addFlashMessage } from "./../actions/flashMessageActions";

export default function(ChildComponent) {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);

      if (!this.props.isLoggedIn) {
        this.props.history.push("/");
        /*this.props.addFlashMessage({
          type: "warning",
          text: "Vous devez être connecté pour accéder à cette page."
        });*/
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isLoggedIn) {
        nextProps.history.push("/");
      }
    }

    render() {
      return <ChildComponent />;
    }
  }
  const mapStateToProps = state => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
  };

  return connect(
    mapStateToProps,
    { addFlashMessage }
  )(RequireAuth);
}
