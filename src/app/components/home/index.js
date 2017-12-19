import React from 'react';
import mapDispatchToProps from '../../actions/app-actions';
import {connect} from 'react-redux';

import VideoDetails from './video-details';
import VideosList from '../list';

class Home extends React.Component {

  render(){
    return (
        <div className="container space-top">
          <VideoDetails video = {this.props.AppReducer.selectedVideo} />
          <VideosList items={this.props.AppReducer.videos}
                      action={this.props.onSelectVideo}
                      style={this.props.AppReducer.selectedVideo == null ? "list-group-horizontal-default" : "list-group-horizontal"}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        AppReducer: state.AppReducer
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
