import React, { Component } from "react";
import VizSensor from "react-visibility-sensor";
import { connect } from "react-redux";

import Career from "./Career";
import Menu from "../partials/Menu";
import SkillTable from "./SkillTable";

import { setComponentsVisibility } from "../../actions/componentVisibilityActions";
import { setModalState } from "../../actions/modalActions";

class SkillHomepage extends Component {
  state = {
    skillPageOnScreen: false,
    animationLaunched: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.skillPageOnScreen && !this.state.animationLaunched) {
      this.setState({
        animationLaunched: true,
      });
    }
    if (
      prevState.skillPageOnScreen !== this.state.skillPageOnScreen &&
      this.state.skillPageOnScreen === true
    ) {
      this.props.setComponentsVisibility(
        "skillpage",
        this.props.skillPageOnScreen
      );
    }

    if (prevProps.modal !== this.props.modal && this.props.modal.opened) {
      this.props.fullpageApi.setAllowScrolling(false);
    } else {
      this.props.fullpageApi.setAllowScrolling(true);
    }
  }

  render() {
    return (
      <VizSensor
        onChange={(isVisible) => {
          this.setState({ skillPageOnScreen: isVisible });
        }}
      >
        <div className="full-height section">
          <div className="skillpage">
            <button
              onClick={() => this.props.setModalState(true)}
              className="skill-contact-btn"
            >
              Me contacter
            </button>
            {this.state.animationLaunched && (
              <Menu page="skillpage" fullpageApi={this.props.fullpageApi} />
            )}
            <div className="curved-shape">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#FFF"
                  fillOpacity="1"
                  d="M0,224L120,213.3C240,203,480,181,720,170.7C960,160,1200,160,1320,160L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="skillpage-container">
              <SkillTable />
              <Career />
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillHomepage);
