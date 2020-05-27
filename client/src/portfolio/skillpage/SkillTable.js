import React, { PureComponent } from "react";
import { connect } from "react-redux";

import SkillTableItem from "./SkillTableItem";
import { fetchSkills, skillsUnload } from "../../actions/skillActions";

class SkillTable extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sorting: "",
    };
  }

  componentDidMount() {
    this.props.fetchSkills();
  }

  componentWillUnmount() {
    this.props.skillsUnload();
  }

  renderSkills = () => {
    if (this.props.skills) {
      const skills = [...this.props.skills];

      if (this.state.sorting === "sla") {
        skills.sort(function (a, b) {
          return a.level - b.level;
        });
      }

      if (this.state.sorting === "sld") {
        skills.sort(function (a, b) {
          return b.level - a.level;
        });
      }

      return skills.map((skill) => {
        return <SkillTableItem key={skill._id} skill={skill} />;
      });
    }
  };

  handleSelectChange = (e) => {
    this.setState({ sorting: e.target.value });
  };

  render() {
    return (
      <div className="table-skills">
        <div className="form-group">
          <select
            value={this.state.sorting}
            className="form-control"
            onChange={this.handleSelectChange}
          >
            <option disabled value="">
              Choisissez un mode de tri...
            </option>
            <option value="sla">
              Trier par niveau de compétence (Ascendant)
            </option>
            <option value="sld">
              Trier par niveau de compétence (Descendant)
            </option>
          </select>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Compétence</th>
              <th scope="col">Niveau</th>
            </tr>
          </thead>
          <tbody>{this.renderSkills()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.skill.skills,
  };
};

export default connect(mapStateToProps, { fetchSkills, skillsUnload })(
  SkillTable
);
