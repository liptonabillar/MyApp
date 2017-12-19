import React from 'react';

const VideoDetails = ({video}) => {

  if(!video){
    return(<div/>);
  }

  const videoId = video.kind == "youtube#playlistItem"? video.snippet.resourceId.videoId : video.id.videoId;
  const channelId = video.snippet.channelId;
  const channelTitle = video.snippet.channelTitle;
  const description = video.snippet.description;
  const title = video.snippet.title;

  const video_url = `https://www.youtube.com/embed/${videoId}`;
  const channel_url = `https://www.youtube.com/channel/${channelId}`;

  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={video_url}></iframe>
      </div>

      <div className="panel panel-default">
        <div className="panel-body">
          <a href={channel_url}>{channelTitle}</a>
          <h4>{title}</h4>
        </div>
        <div className="panel-footer">
          <h5>{description}</h5>
        </div>
      </div>

    </div>
  );
}

export default VideoDetails;
