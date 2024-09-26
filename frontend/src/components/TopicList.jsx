import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, getPhotosByTopic, isDarkMode } = props;

  return (
    <div className={`top-nav-bar__topic-list ${isDarkMode ? 'dark-mode' : ''}`}>
      { 
        topics.map((topic) => {
          return <TopicListItem
                    key={topic.id}
                    topicValue={topic}
                    getPhotosByTopic={getPhotosByTopic}
                  />
        }) 
      }
    </div>  
  );
};

export default TopicList;