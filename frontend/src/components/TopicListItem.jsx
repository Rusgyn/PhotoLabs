import React from "react";

import "../styles/TopicListItem.scss";
import PhotoList from "./PhotoList";

const TopicListItem = (props) => {

  // Destructured the received parameters (props)
  const { id, slug, title } =  props.topicValue;

  return (
    <div className="topic-list__item" key={id}>
      {/* Insert React */}
      <span>
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;
