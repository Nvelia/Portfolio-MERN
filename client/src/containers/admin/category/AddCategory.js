import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../../partials/Header";
import { addCategory, updateCategory } from "../../../actions/categoryActions";
import AdminHomepageBtn from "../../../components/admin/partials/AdminHomepageBtn";
import { addFlashMessage } from "../../../actions/flashMessageActions";

class AddCategory extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      category: {
        name: ""
      },
      action: "Ajouter",
      errors: {}
    };
  }

  componentDidMount() {
    if (typeof this.props.location.state !== "undefined") {
      const { category } = this.props.location.state;

      this.setState(previousState => ({
        category: {
          ...previousState.category,
          name: category.name
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
      category: {
        ...this.state.category,
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { category } = this.state;

    const categoryData = {
      name: category.name
    };
    if (typeof this.props.location.state !== "undefined") {
      const id = this.props.location.state.category._id;
      this.props.updateCategory(id, categoryData, this.props.history);
    } else {
      this.props.addCategory(categoryData, this.props.history);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        <Header />
        <AdminHomepageBtn />
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="row justify-content-md-center">
              <h5 className="mb-3">{this.state.action} une catégorie</h5>
            </div>
            <div className="formErrors">
              <span>{errors.error}</span>
              <span>{errors.name}</span>
            </div>
            <div className="row justify-content-md-center">
              <fieldset className="col-md-4 form-group">
                <label className="bmd-label-floating">Nom</label>
                <input
                  name="name"
                  onChange={this.onChange}
                  value={this.state.category.name}
                  type="text"
                  error={errors.name}
                  className="form-control"
                />
              </fieldset>
            </div>

            <div className="row justify-content-md-center">
              <button type="submit" className="btn btn-primary btn-raised">
                {this.state.action} la catégorie
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
    { addCategory, updateCategory, addFlashMessage }
  )(AddCategory)
);
