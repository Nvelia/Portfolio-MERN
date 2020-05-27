import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import AdminHomePageBtn from "./../partials/AdminHomepageBtn";
import { renderField } from "./form";
import { addWork, updateWork } from "./../../actions/workActions";

class WorkForm extends Component {
  onSubmit = (values) => {
    const { history, location } = this.props;

    if (typeof this.props.location.state !== "undefined") {
      return this.props.updateWork(location.state.work._id, values, history);
    }

    return this.props.addWork(values, history);
  };

  render() {
    const { handleSubmit, error } = this.props;

    const { work } =
      typeof this.props.location.state !== "undefined" &&
      this.props.location.state;

    return (
      <div className="container">
        <AdminHomePageBtn to="admin" />
        <div className="work-form ">
          <h2>Add Work</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              name="name"
              label="Title"
              type="text"
              inputValue={work && work.name}
              component={renderField}
            />

            <Field
              name="content"
              label="Content"
              type="tinymce"
              inputValue={work && work.content}
              component={renderField}
            />

            <Field
              name="github"
              label="Github"
              type="text"
              inputValue={work && work.github}
              component={renderField}
            />

            <Field
              name="link"
              label="Link"
              type="text"
              inputValue={work && work.link}
              component={renderField}
            />

            <Field
              name="image"
              label="Image Link"
              type="text"
              inputValue={work && work.image}
              component={renderField}
            />

            <button type="submit" className="add-btn">
              {work ? "Edit" : "Add"}
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
  addWork,
  updateWork,
};

export default reduxForm({ form: "WorkForm" })(
  connect(mapStateToProps, mapDispatchToProps)(WorkForm)
);
