import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchSkills,
  deleteSkill,
  skillsUnload
} from "../../../actions/skillActions";
import SkillListItem from "../../../components/admin/Skill/SkillListItem";
import { addFlashMessage } from "./../../../actions/flashMessageActions";

class SkillList extends PureComponent {
  componentDidMount() {
    this.props.fetchSkills();
  }

  componentWillUnmount() {
    this.props.skillsUnload();
  }

  renderSkills() {
    const { skills } = this.props;
    if (skills) {
      return skills.map(skill => {
        return (
          <SkillListItem
            key={skill._id}
            skill={skill}
            deleteSkillCallBack={skill => this.deleteSkillCallBack(skill)}
          />
        );
      });
    }
  }

  deleteSkillCallBack(skill) {
    this.props.deleteSkill(skill._id);
    this.props.addFlashMessage({
      type: "warning",
      text: "Compétence supprimée."
    });
  }

  render() {
    return (
      <div className="col-lg-6">
        <div className="row justify-content-center">
          <h3>Compétences</h3>
        </div>

        <table className="table table-sm mt-4 table-skill">
          <thead>
            <tr>
              <th scope="col">Compétence</th>
              <th scope="col">Niveau</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderSkills()}</tbody>
        </table>

        <Link
          className="btn btn-primary btn-lg btn-raised btn-block"
          to="/administration/ajouter-competence"
        >
          Ajouter une compétence
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    skills: state.skill.skills,
    skillFetching: state.skill.isFetching
  };
};

export default connect(mapStateToProps, {
  fetchSkills,
  deleteSkill,
  addFlashMessage,
  skillsUnload
})(SkillList);
