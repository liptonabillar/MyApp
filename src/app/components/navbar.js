import React from "react";
import searchYouTube from 'youtube-api-search-v2';

import {connect} from 'react-redux';
import mapDispatchToProps from '../actions/app-actions';

class NavigationBar extends React.Component
{
  constructor(){
    super();
    this.state = {
      home : "active",
      playlist : "",
      term: ''
    };
  }

  bannerClicked(){
    this.setState(
      {
        home : "active",
        playlist : ""
      }
    );
    this.props.onBannerClicked();
    this.props.selectedHeader(0);
  }

  homeClicked(){
    this.setState(
      {
        home : "active",
        playlist : ""
      }
    );

    this.props.selectedHeader(0); ///send header selected to index.js
  }

  playlistClicked(){
    this.setState(
      {
        home : "",
        playlist : "active"
      }
    );

    this.props.selectedHeader(1); ///send header selected to index.js
  }

  onSearchVideo(event){
    if(event.which == 13){
      searchYouTube(
        {
          key: this.props.AppReducer.api,
          term: this.state.term,
          maxResults: 50,
          type: 'video'
        }, videos => {
          this.props.videos(videos);///WILL TRIGGER AN ACTION THAT WILL SAVE THE VIDEOS INTO THE STORE
      });

    }
  }

  ///this event will save any changes with the input into the state
  onInputChange(newterm){
    this.setState({
        term: newterm
    });
  }

  render(){
    if(this.props.AppReducer.videos.length < 1)
    {
      searchYouTube(
        {
          key: this.props.AppReducer.api,
          term: this.state.term,
          maxResults: 50,
          type: 'video'
        }, videos => {
          this.props.videos(videos);///WILL TRIGGER AN ACTION THAT WILL SAVE THE VIDEOS INTO THE STORE
      });
    }

    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href={"#"} onClick= {() => this.bannerClicked()}>my.app</a>
          </div>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">

              <li className={this.state.home} onClick= {() => this.homeClicked()}>
                  <a href="#"><span className="glyphicon glyphicon-home"/> Home</a>
              </li>
              <li className={this.state.playlist} onClick= {() => this.playlistClicked()}>
                  <a href="#"><span className="glyphicon glyphicon-list"/> Playlist</a>
              </li>

              <form className="navbar-form navbar-left">
                <div className="form-group has-feedback">
                  <input onKeyPress={event => this.onSearchVideo(event)} //this is to know if user press enter
                         onChange = {event => this.onInputChange(event.target.value)} //every changes with the input will automatic save it to state
                         type="text"
                         className="form-control"
                         placeholder="Search some videos"/>
                  <i className="glyphicon glyphicon-search form-control-feedback"></i>
                </div>
              </form>

            </ul>
          </div>

        </div>
      </nav>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        AppReducer: state.AppReducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);