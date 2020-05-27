import React from "react";
import Spinner from "./Spinner";

const Image = props => {
  function renderImage() {
    const { image, isFetching } = props;

    const imageUrl = `${process.env.PUBLIC_URL}/images/${image.url}`;

    if (isFetching) {
      return <Spinner />;
    }

    return <img className="work-image" src={imageUrl} alt="Helpful alt text" />;
  }

  return <div>{renderImage()}</div>;
};

export default Image;
