import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  return (
    <ul className="photo-list">
      {
        props.photoData.map((data) => {
          return <PhotoListItem key={data.id} photoValue={data} />
        })
      }
    </ul>
  );
};

export default PhotoList;
