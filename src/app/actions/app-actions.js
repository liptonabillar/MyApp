const mapDispatchToProps = (dispatch) => {
  return {
    videos: (results) => {
      dispatch({
        type: "VIDEOS",
        payload: results
      });
    },

    playlists: (results) => {
      dispatch({
        type: "PLAYLISTS",
        payload: results
      });
    },

    playlistsResults: (results) => {
      dispatch({
        type: "PLAYLISTS_RESULTS",
        payload: results
      });
    },

    onSelectVideo: (results) => {
      dispatch({
        type: "SELECTED_VIDEO",
        payload: results
      });
    },

    onSelectPlaylist: (results) => {
      dispatch({
        type: "SELECTED_PLAYLIST",
        payload: results
      });
    },

    onSelectPlaylistsResults: (results) => {
      dispatch({
        type: "SELECTED_PLAYLISTS_RESULTS",
        payload: results
      });
    },


    onRemoveSelectedPlaylistsResults: (results) => {
      dispatch({
        type: "REMOVE_SELECTED_PLAYLISTS_RESULTS",
        payload: results
      });
    },

    onClearPlaylists: (results) => {
      dispatch({
        type: "CLEAR_PLAYLISTS",
      });
    },

    onClearPlaylistsResults: (results) => {
      dispatch({
        type: "CLEAR_PLAYLISTS_RESULTS",
      });
    },

    onClearSelectedPlaylistsResults: (results) => {
      dispatch({
        type: "CLEAR_SELECTED_PLAYLISTS_RESULTS",
      });
    },

    onBannerClicked: (results) => {
      dispatch({
        type: "CLEAR_SELECTED_VIDEO",
      });
    }

  };
};

export default mapDispatchToProps;
