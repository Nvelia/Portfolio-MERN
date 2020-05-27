import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { renderField } from "./form";
import { userLoginAttempt } from "../../actions/authActions";

class LoginForm extends Component {
  onSubmit = (values) => {
    return this.props.userLoginAttempt(values);
  };

  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div className="login-form pt-5">
        <h2>Administration</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="name" label="User" type="text" component={renderField} />
          <Field
            name="password"
            label="Password"
            type="password"
            component={renderField}
          />
          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = {
  userLoginAttempt,
};

export default reduxForm({ form: "LoginForm" })(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
