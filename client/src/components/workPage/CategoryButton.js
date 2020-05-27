import React from "react";

const CategoryButton = props => {
  const { category } = props;

  function sendFilter(categoryId) {
    props.getFilterCallback(categoryId);
  }

  return (
    <button onClick={() => sendFilter(category._id)} className="categoryBtn">
      {category.name}
    </button>
  );
};

export default CategoryButton;
