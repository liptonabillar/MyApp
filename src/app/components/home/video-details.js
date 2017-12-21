import React from 'react';

const VideoDetails = props => {
  if(!props.video){
    return(<div/>);
  }

  const months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];


  const videoId = props.video.kind == "youtube#playlistItem"? props.video.snippet.resourceId.videoId : props.video.id.videoId;
  const channelId = props.video.snippet.channelId;
  const channelTitle = props.video.snippet.channelTitle;
  const description = props.video.snippet.description;
  const title = props.video.snippet.title;
  const date = new Date(props.video.snippet.publishedAt);
  const dateParsed = months[date.getMonth()] + " " + date.getDate() + ", " +date.getFullYear();

  const video_url = `https://www.youtube.com/embed/${videoId}`;
  const channel_url = `https://www.youtube.com/channel/${channelId}`;

  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={video_url}></iframe>
      </div>

      <div className="panel panel-default">
        <div className="panel-heading">
          <a href={channel_url}>{channelTitle}</a>
          <h4>{title}</h4>
        </div>
        <div id="collapse" className="panel-collapse collapse">
          <div className="panel-body">
            <h5>Published on {dateParsed}</h5>
            <p>{description}</p>
          </div>
        </div>
        <div className ="panel-footer">
        <button type="button"
                className="btn btn-info btn-xs center-block"
                data-toggle="collapse"
                data-target="#collapse">Details</button>
        </div>
      </div>

    </div>
  );
}

export default VideoDetails;
