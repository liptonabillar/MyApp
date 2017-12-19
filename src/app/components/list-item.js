import React from 'react';

const ListItem = ({item, onItemSelect}) => {

  if(!item.snippet.thumbnails){
    return(null);
  }

  const imageUrl = item.snippet.thumbnails.high.url;

  return (
    <li key = {item.id.videoId}
        onClick={() => onItemSelect(item)} className="list-group-item">
        <img src={imageUrl} className="image"/>
        <div className="overlay">
            <p className="text">{item.snippet.title}</p>
        </div>
    </li>
  );
};

export default ListItem;
