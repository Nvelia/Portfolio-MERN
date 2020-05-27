import React, { Component } from "react";
import VizSensor from "react-visibility-sensor";
import classnames from "classnames";
import { connect } from "react-redux";

import Menu from "./partials/Menu";
import { setComponentsVisibility } from "../actions/componentVisibilityActions";
import { setModalState } from "../actions/modalActions";

class WorkHomepage extends Component {
  state = {
    workPageOnScreen: false,
    animationLaunched: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.workPageOnScreen && !this.state.animationLaunched) {
      this.setState({
        animationLaunched: true,
      });
    }
    if (
      prevState.workPageOnScreen !== this.state.workPageOnScreen &&
      this.state.workPageOnScreen === true
    ) {
      this.props.setComponentsVisibility(
        "workpage",
        this.props.workPageOnScreen
      );
    }

    if (prevProps.modal !== this.props.modal && this.props.modal.opened) {
      this.props.fullpageApi.setAllowScrolling(false);
    } else {
      this.props.fullpageApi.setAllowScrolling(true);
    }
  }

  createMarkup(content) {
    return { __html: content };
  }

  renderSlides = (works) => {
    return works
      .slice(0)
      .reverse()
      .map((work) => {
        return (
          <div className="slide" key={work._id}>
            <div className="work-slide">
              <div className="work-image">
                <h3>{work.name}</h3>
                <img src={work.image} alt="" />
                Lien: <a href={work.link}>{work.link}</a>
              </div>
              <div className="work-content">
                <p dangerouslySetInnerHTML={this.createMarkup(work.content)} />
                Github: <a href={work.github}>{work.github}</a>
              </div>
            </div>
          </div>
        );
      });
  };

  render() {
    const { works } = this.props;

    return (
      <VizSensor
        onChange={(isVisible) => {
          this.setState({ workPageOnScreen: isVisible });
        }}
      >
        <div className="full-height section">
          <div className="workpage">
            {this.state.animationLaunched && (
              <Menu page="workpage" fullpageApi={this.props.fullpageApi} />
            )}
            <button
              onClick={() => this.props.setModalState(true)}
              className={classnames("work-contact-btn", {
                "work-contact-btn-enter": this.state.animationLaunched,
              })}
            >
              Me contacter
            </button>

            <div
              className={classnames("work-slider", {
                "work-slider-enter": this.state.animationLaunched,
              })}
            >
              {works && this.renderSlides(works)}
            </div>

            <span
              className={classnames("top", {
                "workpage-animation": this.state.animationLaunched === true,
              })}
            />
            <span
              className={classnames("right", {
                "workpage-animation": this.state.animationLaunched === true,
              })}
            />
            <span
              className={classnames("bottom-left", {
                "workpage-animation": this.state.animationLaunched === true,
              })}
            />
            <span
              className={classnames("bottom-right", {
                "workpage-animation": this.state.animationLaunched === true,
              })}
            />
            <span
              className={classnames("left", {
                "workpage-animation": this.state.animationLaunched === true,
              })}
            />

            <div
              className={classnames("arrows-scroll", {
                "work-arrows-scroll-enter": this.state.animationLaunched,
              })}
            >
              <span className="arrow first">&gt;</span>
              <span className="arrow second">&gt;</span>
            </div>
          </div>
        </div>
      </VizSensor>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

const mapDispatchToProps = { setComponentsVisibility, setModalState };

export default connect(mapStateToProps, mapDispatchToProps)(WorkHomepage);
