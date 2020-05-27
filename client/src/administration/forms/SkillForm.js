import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import AdminHomePageBtn from "./../partials/AdminHomepageBtn";
import { renderField } from "./form";
import { addSkill, updateSkill } from "./../../actions/skillActions";

class SkillForm extends Component {
  onSubmit = (values) => {
    const { history, location } = this.props;

    if (typeof this.props.location.state !== "undefined") {
      return this.props.updateSkill(location.state.skill._id, values, history);
    }
    return this.props.addSkill(values, history);
  };

  render() {
    const { handleSubmit, error } = this.props;

    const { skill } =
      typeof this.props.location.state !== "undefined" &&
      this.props.location.state;

    return (
      <div className="container">
        <AdminHomePageBtn to="admin" />
        <div className="skill-form ">
          <h2>Add Skill</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              name="name"
              label="Nom"
              type="text"
              inputValue={skill && skill.name}
              component={renderField}
            />
            <Field
              name="level"
              label="Niveau"
              type="number"
              inputValue={skill && skill.level}
              min="1"
              max="5"
              component={renderField}
            />
            <button type="submit" className="add-btn">
              {skill ? "Edit" : "Add"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.error,
});

const mapDispatchToProps = {
  addSkill,
  updateSkill,
};

export default reduxForm({ form: "SkillForm" })(
  connect(mapStateToProps, mapDispatchToProps)(SkillForm)
);
