import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../../partials/Header";
import { addSkill, updateSkill } from "../../../actions/skillActions";
import AdminHomepageBtn from "../../../components/admin/partials/AdminHomepageBtn";
import { addFlashMessage } from "./../../../actions/flashMessageActions";

class AddSkill extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      skill: {
        name: "",
        level: ""
      },
      action: "Ajouter",
      errors: {}
    };
  }

  componentDidMount() {
    if (typeof this.props.location.state !== "undefined") {
      const { skill } = this.props.location.state;

      this.setState(previousState => ({
        skill: {
          ...previousState.skill,
          name: skill.name,
          level: skill.level
        },
        action: this.props.location.state.action
      }));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = event => {
    this.setState({
      skill: {
        ...this.state.skill,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { skill } = this.state;

    const skillData = {
      name: skill.name,
      level: skill.level
    };

    if (typeof this.props.location.state !== "undefined") {
      const id = this.props.location.state.skill._id;
      this.props.updateSkill(id, skillData, this.props.history);
    } else {
      this.props.addSkill(skillData, this.props.history);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        <Header />
        <AdminHomepageBtn />
        <div className="container">
          <form noValidate onSubmit={this.onSubmit}>
            <div className="row justify-content-md-center">
              <h5 className="mb-3">{this.state.action} une compétence</h5>
            </div>
            <div className="formErrors">
              <span>{errors.error}</span>
              <span>{errors.name}</span>
              <span>{errors.level}</span>
            </div>
            <div className="row justify-content-md-center">
              <fieldset className="col-md-4 form-group">
                <label className="bmd-label-floating">Nom</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  error={errors.name}
                  onChange={this.onChange}
                  value={this.state.skill.name}
                />
              </fieldset>
            </div>
            <div className="row justify-content-md-center">
              <fieldset className="col-md-4 form-group">
                <label className="bmd-label-floating">Niveau</label>
                <input
                  name="level"
                  type="number"
                  min="1"
                  max="5"
                  className="form-control"
                  error={errors.level}
                  onChange={this.onChange}
                  value={this.state.skill.level}
                />
              </fieldset>
            </div>

            <div className="row justify-content-md-center">
              <button type="submit" className="btn btn-primary btn-raised">
                {this.state.action} la compétence
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { addSkill, updateSkill, addFlashMessage }
  )(AddSkill)
);
