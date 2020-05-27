import React from "react";
import { Link } from "react-router-dom";

const WorkListItem = props => {
  const { work } = props;

  function deleteWork(work) {
    props.deleteWorkCallBack(work);
  }

  function createMarkup() {
    return { __html: work.content.substr(0, 110) };
  }

  return (
    <tr>
      <td>{work.name}</td>
      <td>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </td>
      <td>
        <Link
          to={{
            pathname: "/administration/ajouter-creation",
            state: {
              work,
              action: "Modifier"
            }
          }}
        >
          <button className="btn btn-warning text-white">Modifier</button>
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteWork(work)}>
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default WorkListItem;
