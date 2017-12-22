import React from "react";
import searchYouTube from 'youtube-api-search-v2';

import {connect} from 'react-redux';

import {playlistsResults,playlists,onClearSelectedPlaylistsResults,onClearPlaylistsResults} from '../../actions/app-actions';
import {onClearPlaylists,onSelectPlaylistsResults,onRemoveSelectedPlaylistsResults} from '../../actions/app-actions';

import PlaylistsResults from '../list';
import SelectedPlaylistsResults from '../list';

class PlaylistModal extends React.Component{
  constructor(){
      super();
  }

  onSearchVideo(event){
    if(event.which == 13){
      searchYouTube(
        {
          key: this.props.AppReducer.api,
          term: event.target.value,
          maxResults: 25,
          type: 'playlist'
        }, playlists => {
          this.props.playlistsResults(playlists)///RESULTS WILL BE SAVE TO THE STORE
      });
    }
  }

  onImport(){
    this.props.AppReducer.selectedPlaylistsResults.map(playlist => {
      this.props.playlists(playlist);
    });

    this.props.onClearSelectedPlaylistsResults();
  }

  render(){
    return(
      <div>
        <div className="form-group">
            <button type="button"
                    className="btn btn-primary btn-md"
                    data-toggle="modal"
                    data-target="#myModal">Import Playlists</button>
            <button type="button"
                    className="btn btn-danger btn-md space-left"
                    onClick={() => this.props.onClearPlaylists()}>Clear Playlists</button>
        </div>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Import New Playlists</h4>
              </div>

              <div className="modal-body">
                <input type="text"
                       className="form-control"
                       placeholder="Search Playlist"
                       onKeyPress={event => this.onSearchVideo(event)} />

                <p/>

                <div className="panel panel-info">
                  <div className="panel-heading">
                    Playlists
                    <span className="badge badge-info pull-right">{this.props.AppReducer.playlistsResults.length}</span>
                  </div>
                  <div className="panel-body">
                    <PlaylistsResults items = {this.props.AppReducer.playlistsResults}
                                   action = {this.props.onSelectPlaylistsResults}
                                   style = "list-group-horizontal"/>
                  </div>
                </div>

                <div className="panel panel-success">
                  <div className="panel-heading">
                    Selected
                    <span className="badge badge-info pull-right">{this.props.AppReducer.selectedPlaylistsResults.length}</span>
                  </div>
                  <div className="panel-body">
                    <SelectedPlaylistsResults items = {this.props.AppReducer.selectedPlaylistsResults}
                                   action = {this.props.onRemoveSelectedPlaylistsResults}
                                   style = "list-group-horizontal"/>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-info btn-md" onClick={() => this.onImport()}>Import</button>
                <button type="button" className="btn btn-info btn-md" onClick={() => this.props.onClearPlaylistsResults()}>Clear</button>
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        AppReducer: state.AppReducer
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playlistsResults: (item) =>{
      dispatch(playlistsResults(item));
    },

    playlists: (item) =>{
      dispatch(playlists(item));
    },

    onClearSelectedPlaylistsResults: (item) =>{
      dispatch(onClearSelectedPlaylistsResults(item));
    },

    onClearPlaylists: (item) =>{
      dispatch(onClearPlaylists(item));
    },

    onSelectPlaylistsResults: (item) =>{
      dispatch(onSelectPlaylistsResults(item));
    },

    onRemoveSelectedPlaylistsResults: (item) =>{
      dispatch(onRemoveSelectedPlaylistsResults(item));
    },

    onClearPlaylistsResults: (item) =>{
      dispatch(onClearPlaylistsResults(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistModal);
