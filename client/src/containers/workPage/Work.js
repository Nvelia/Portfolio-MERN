import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import { getImage } from "../../actions/imageActions";
// import Image from "../../components/partials/Image";

class Work extends PureComponent {
  // componentDidUpdate(prevProps) {
  //   if (prevProps.work !== this.props.work) {
  //     this.props.getImage(this.props.work.image);
  //   }
  // }

  createMarkup = () => {
    return { __html: this.props.work.content };
  };

  render() {
    const { work /*image, imageFetching*/ } = this.props;
    return work ? (
      <div className="row work">
        <div className="col-lg-12">
          <div className="row work-title">
            <h3>{work.name}</h3>
          </div>

          <div className="row">
            {/* {image && <Image image={image} isFetching={imageFetching} />} */}
            <img
              className="work-image"
              src={work.image}
              alt="illustration du travail"
            />
          </div>

          <div className="row">
            <p dangerouslySetInnerHTML={this.createMarkup()} />
          </div>

          <div className="row">
            <div className="linksBtn">
              <a href={work.github}>
                <em>Github</em>
              </a>
              <a href={work.link}>
                <em>Lien</em>
              </a>
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    work: state.work.workToDisplay,
    image: state.image.image,
    imageFetching: state.image.isFetching
  };
};

export default connect(mapStateToProps, null)(Work);
