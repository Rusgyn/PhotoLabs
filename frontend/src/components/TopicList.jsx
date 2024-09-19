import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const topicList = props.topicData.map((topic) => {
    return <TopicListItem key={topic.id} topicValue={topic} />
  })

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>  
  );

};

export default TopicList;
