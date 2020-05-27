import React, { Fragment } from "react";

const SkillTableItem = props => {
  function displaySkillLevel() {
    const level = props.skill.level;
    switch (level) {
      case 1:
        return <i className="fas fa-star starRating"></i>;
      case 2:
        return (
          <Fragment>
            <i className="fas fa-star starRating"></i>
            <i className="fas fa-star starRating"></i>
          </Fragment>
        );
      case 3:
        return (
          <Fragment>
            <i className="fas fa-star starRating"></i>
            <i className="fas fa-star starRating"></i>
            <i className="fas fa-star starRating"></i>
          </Fragment>
        );
      case 4:
        return (
          <Fragment>
            <i className="fas fa-star starRating"></i>
            <i className="fas fa-star starRating"></i>
            <i className="fas fa-star starRating"></i>
            <i className="fas fa-star starRating"></i>
          </Fragment>
        );
      case 5:
        return (
          <Fragment>
            <i className="fas fa-star starRating"></i>
            <i className="fas fa-star starRating"></i>
            <i className="fas fa-star starRating"></i>
            <i className="fas fa-star starRating"></i>
            <i className="fas fa-star starRating"></i>
          </Fragment>
        );
      default:
        break;
    }
  }

  return (
    <tr>
      <td>{props.skill.name}</td>
      <td>{displaySkillLevel()}</td>
    </tr>
  );
};

export default SkillTableItem;
