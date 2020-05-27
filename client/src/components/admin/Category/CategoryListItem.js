import React from "react";
import { Link } from "react-router-dom";

const CategoryListItem = props => {
  const { category } = props;

  function deleteCategory(category) {
    props.deleteCategoryCallBack(category);
  }

  return (
    <tr>
      <td>{category.name}</td>
      <td>
        <Link
          to={{
            pathname: "/administration/ajouter-categorie",
            state: {
              category,
              action: "Modifier"
            }
          }}
        >
          <button className="btn btn-warning text-white">Modifier</button>
        </Link>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteCategory(category)}
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default CategoryListItem;
