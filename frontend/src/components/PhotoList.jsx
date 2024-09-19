import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const photoData = props.photoData.map((data) => {
    return <PhotoListItem key={data.id} photo={data} />
  })

  return (
    <ul className="photo-list">
      {photoData}
    </ul>
  );
};

export default PhotoList;
