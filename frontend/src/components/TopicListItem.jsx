import React from "react";

import "../styles/TopicListItem.scss";
import PhotoList from "./PhotoList";

const TopicListItem = (props) => {

  // Destructured the received parameters (props)
  const { id, slug, title } =  props.topicValue;
  const { getPhotosByTopic } = props;

  //This function will handle the favorite toggle
  const handleGetPhotosByTopic = () => {
    getPhotosByTopic(props.topicValue.id);
  };

  return (
    <div className="topic-list__item">
      <span onClick={handleGetPhotosByTopic}>
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;
