import React from "react";
import { Link } from "react-router-dom";

const SkillListItem = props => {
  const { skill } = props;

  function deleteSkill(skill) {
    props.deleteSkillCallBack(skill);
  }

  return (
    <tr>
      <td>{skill.name}</td>
      <td>{skill.level}</td>
      <td>
        <Link
          to={{
            pathname: "/administration/ajouter-competence",
            state: {
              skill,
              action: "Modifier"
            }
          }}
        >
          <button className="btn btn-warning text-white">Modifier</button>
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteSkill(skill)}>
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default SkillListItem;
