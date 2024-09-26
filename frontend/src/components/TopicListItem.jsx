import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  // Destructured the received parameters (props)
  const { id, slug, title } =  props.topicValue;
  const { getPhotosByTopic, isDarkMode } = props;

  //This function will handle the favorite toggle
  const handleGetPhotosByTopic = () => {
    getPhotosByTopic(props.topicValue.id);
  };

  return (
    <div 
      className={`topic-list__item ${isDarkMode ? 'dark-mode' : ''}`}
      onClick={handleGetPhotosByTopic}
    >
      {title}   
    </div>
  );
};

export default TopicListItem;