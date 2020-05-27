import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";

class Menu extends Component {
  render() {
    const { componentsVisibility, fullpageApi } = this.props;
    return (
      <div
        className={classnames("menu", {
          "menu-enter": this.props.page === "homepage",
          "workpage-menu-enter": this.props.page === "workpage",
          "skillpage-menu-enter": this.props.page === "skillpage",
        })}
      >
        <ul>
          <li>
            <button
              onClick={() => fullpageApi.moveTo(1)}
              className={classnames("", {
                "menu-item-selected": componentsVisibility.isHomepageVisible,
                "menu-reversed-colors": componentsVisibility.isSkillpageVisible,
              })}
            >
              Présentation
            </button>
          </li>
          <li>
            <button
              onClick={() => fullpageApi.moveTo(2)}
              className={classnames("", {
                "menu-reversed-colors": componentsVisibility.isSkillpageVisible,
                "menu-item-selected": componentsVisibility.isWorkpageVisible,
              })}
            >
              Créations
            </button>
          </li>
          <li>
            <button
              onClick={() => fullpageApi.moveTo(3)}
              className={classnames("", {
                "menu-item-selected": componentsVisibility.isSkillpageVisible,
                "menu-reversed-colors": componentsVisibility.isSkillpageVisible,
              })}
            >
              Compétences
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  componentsVisibility: state.componentsVisibility,
});

export default connect(mapStateToProps, null)(Menu);
