import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { logout } from "../../../actions/authActions";

class Logout extends PureComponent {
  constructor(props) {
    super(props);

    this.props.logout();
  }

  render() {
    return <div>Déconnexion</div>;
  }
}

export default connect(
  null,
  { logout }
)(Logout);
