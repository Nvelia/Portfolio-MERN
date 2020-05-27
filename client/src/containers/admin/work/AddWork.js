import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import Header from "../../partials/Header";
import { addWork, updateWork } from "../../../actions/workActions";
import { fetchCategories } from "../../../actions/categoryActions";
import AdminHomepageBtn from "../../../components/admin/partials/AdminHomepageBtn";
// import { getImage } from "../../../actions/imageActions";
// import Image from "./../../../components/partials/Image";
import { addFlashMessage } from "./../../../actions/flashMessageActions";

class AddWork extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      work: {
        name: "",
        content: "",
        github: "",
        link: "",
        // image: null,
        category: "",
        image: ""
        // imageId: ""
      },
      action: "Ajouter",
      errors: {},
      loading: true
    };

    this.props.fetchCategories();
  }

  componentDidMount() {
    if (typeof this.props.location.state !== "undefined") {
      const { work } = this.props.location.state;

      this.setState(previousState => ({
        work: {
          ...previousState.work,
          name: work.name,
          content: work.content,
          github: work.github,
          link: work.link,
          // image: work.image,
          category: work.category,
          image: work.image
          // imageId: work.image
        },
        action: this.props.location.state.action
      }));
      // this.props.getImage(work.image);
    }
  }

  onChange = event => {
    // if (event.target.type === "file") {
    //   this.setState({
    //     work: {
    //       ...this.state.work,
    //       [event.target.name]: event.target.files[0]
    //     }
    //   });
    // } else {
    this.setState({
      work: {
        ...this.state.work,
        [event.target.name]: event.target.value
      }
    });
    // }
  };

  onEditorChange = event => {
    this.setState({
      work: {
        ...this.state.work,
        content: event.target.getContent()
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { work } = this.state;

    const workData = {
      name: work.name,
      content: work.content,
      github: work.github,
      link: work.link,
      category: work.category,
      image: work.image
    };

    // const imageData = new FormData();
    // if (work.image) {
    //   imageData.append("image", work.image, work.image.name);
    // } else {
    //   imageData.append("image", work.image);
    // }

    if (typeof this.props.location.state !== "undefined") {
      const id = this.props.location.state.work._id;
      this.props.updateWork(
        // this.state.work.imageId,
        // imageData,
        id,
        workData,
        this.props.history
      );
    } else {
      this.props.addWork(workData, this.props.history);
    }
  };

  // renderImage = () => {
  //   if (this.state.action === "Modifier") {
  //     const { image } = this.props;

  //     if (image.length !== 0) {
  //       return <Image image={image} />;
  //     }
  //   }
  // };

  renderOptions = () => {
    const { categories } = this.props;
    if (categories) {
      return categories.map((category, index) => {
        if (index === 0) {
          return (
            <Fragment key={category._id}>
              <option disabled value="">
                Selectionnez une catégorie
              </option>
              <option value={category._id}>{category.name}</option>
            </Fragment>
          );
        } else {
          return (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          );
        }
      });
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
              <h5 className="mb-3">{this.state.action} une création</h5>
            </div>
            <div className="row justify-content-md-center">
              {" "}
              {/* {this.renderImage()} */}
              <img
                className="work-image"
                src={this.state.work.image}
                alt="Illustration du travail"
              />
            </div>
            <div className="formErrors">
              <span>{errors.error}</span>
              <span>{errors.name}</span>
              <span>{errors.content}</span>
              <span>{errors.github}</span>
              <span>{errors.link}</span>
              <span>{errors.category}</span>
              <span>{errors.errorImage}</span>
            </div>
            <div className="row justify-content-md-center">
              <fieldset className="col-lg-12 form-group">
                <input
                  type="text"
                  name="name"
                  error={errors.name}
                  onChange={this.onChange}
                  value={this.state.work.name}
                  className="form-control"
                  placeholder="Titre de la création"
                />
              </fieldset>
            </div>
            <div className="row justify-content-md-center">
              <fieldset className="col-lg-12 form-group">
                <Editor
                  apiKey="1azrfjc2kkedm4a6ag32virm439hn631gvi9rhhg8e16rk15"
                  initialValue={this.state.work.content}
                  init={{
                    plugins: "link image code autoresize ",
                    toolbar:
                      "undo redo | bold italic | alignleft aligncenter alignright | code"
                  }}
                  name="content"
                  error={errors.content}
                  onChange={this.onEditorChange}
                  className="form-control"
                />
              </fieldset>
            </div>

            <div className="row justify-content-md-center">
              <fieldset className="col-lg-12 form-group">
                <input
                  type="text"
                  name="github"
                  error={errors.github}
                  onChange={this.onChange}
                  value={this.state.work.github}
                  className="form-control"
                  placeholder="Lien Github de la création"
                />
              </fieldset>
            </div>
            <div className="row justify-content-md-center">
              <fieldset className="col-lg-12 form-group">
                <input
                  type="text"
                  name="link"
                  error={errors.link}
                  onChange={this.onChange}
                  value={this.state.work.link}
                  className="form-control"
                  placeholder="Lien de la création"
                />
              </fieldset>
            </div>
            <div className="row justify-content-md-center">
              <fieldset className="col-lg-12 form-group">
                {/* <input
                  type="file"
                  name="image"
                  error={errors.errorImage}
                  onChange={this.onChange}
                  className="form-control-file input-file"
                /> */}
                <input
                  type="text"
                  name="image"
                  error={errors.image}
                  onChange={this.onChange}
                  value={this.state.work.image}
                  className="form-control"
                  placeholder="Lien de l'image'"
                />
              </fieldset>
            </div>
            <div className="row justify-content-md-center">
              <fieldset className="col-lg-12 form-group">
                <select
                  name="category"
                  error={errors.category}
                  value={this.state.work.category}
                  onChange={this.onChange}
                  className="form-control"
                >
                  {this.renderOptions()}
                </select>
              </fieldset>
            </div>

            <div className="row justify-content-md-center">
              <button
                type="submit"
                className="btn btn-primary btn-raised btn-block"
              >
                {this.state.action}
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
    categories: state.category.categories,
    errors: state.errors,
    image: state.image
  };
};

export default withRouter(
  connect(mapStateToProps, {
    addWork,
    updateWork,
    fetchCategories,
    // getImage,
    addFlashMessage
  })(AddWork)
);
