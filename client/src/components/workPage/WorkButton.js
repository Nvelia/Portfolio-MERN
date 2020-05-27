import React from "react";

const WorkButton = props => {
  const { work } = props;

  function sendWork(work) {
    props.getWorkCallback(work);
  }

  return (
    <button onClick={() => sendWork(work)} className="workBtn">
      {work.name}
    </button>
  );
};

export default WorkButton;
