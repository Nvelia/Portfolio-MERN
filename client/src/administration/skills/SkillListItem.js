import React from "react";
import { Link } from "react-router-dom";

const SkillListItem = (props) => {
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
            pathname: "/administration/skill-form",
            state: {
              skill,
              action: "Modifier",
            },
          }}
        >
          <button className="btn btn-warning text-white">Edit</button>
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteSkill(skill)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SkillListItem;
