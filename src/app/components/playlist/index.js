import React from 'react';
import mapDispatchToProps from '../../actions/app-actions';
import {connect} from 'react-redux';

import PlaylistModal from './playlist-modal';
import PlaylistsList from '../list';

class Playlist extends React.Component{

  render(){
    return (
      <div className="container space-top">
        <PlaylistModal/>
        <PlaylistsList items = {this.props.AppReducer.playlists}
                       action = {this.props.onSelectPlaylist}
                       style = "list-group-horizontal-default"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        AppReducer: state.AppReducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
