import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../actions/authActions";

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        password: ""
      }
    };
  }

  onChange = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { user } = this.state;

    const loginData = {
      name: user.name,
      password: user.password
    };

    this.props.login(loginData, this.props.history);
  };

  render() {
    return (
      <div className="loginForm">
        <h4>Connexion</h4>
        <form noValidate className="form-group" onSubmit={this.onSubmit}>
          <input
            className="form-control"
            name="name"
            placeholder="Identifiant"
            type="text"
            onChange={this.onChange}
          />
          <input
            className="form-control"
            name="password"
            placeholder="Mot de passe"
            type="password"
            onChange={this.onChange}
          />
          <button type="submit">Connexion</button>
        </form>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { login }
  )(LoginForm)
);
