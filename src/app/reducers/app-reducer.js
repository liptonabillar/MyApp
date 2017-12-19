import youtubePlaylist from 'youtube-api-playlist';

const initialState = {
  api: 'AIzaSyDIxVn3PH5_suHFDVQDfQRKwoPt7cigoMY',
  videos: [], ////VIDEOS FROM HOME PAGE
  selectedVideo: null, ////SELECTED VIDEO FROM THE HOME PAGE
  playlists: [], ////PLAYLISTS FROM PLAYLISTS PAGE
  selectedPlaylist: null, ////SELECTED PLAYLIST FROM PLAYLISTS PAGE

  playlistsResults: [], ////PLAYLISTS SEARCH RESULTS
  selectedPlaylistsResults: [] ////SELECTED PLAYLISTS FROM PLAYLISTS SEARCH RESULTS
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIDEOS":
      state = {
        ...state,
        videos: action.payload
      };

      break;

    case "SELECTED_VIDEO":
      state = {
        ...state,
        selectedVideo: action.payload
      };

      break;

    case "PLAYLISTS":
      state.playlists.push(action.payload);

      state = {
        ...state,
      };

      break;

    case "SELECTED_PLAYLIST":
      youtubePlaylist({
        key: state.api,
        playlistId: action.payload.id.playlistId,
        maxResults: 50,
      }, vids => {
        state.videos = vids;
      });

      state = {
        ...state,
        selectedPlaylist: action.payload
      };

      break;

    case "CLEAR_PLAYLISTS":
      state = {
        ...state,
        playlists: [],
        selectedPlaylist: [],
      };

      break;

    case "PLAYLISTS_RESULTS":
      state = {
        ...state,
        playlistsResults: action.payload
      };

      break;

    case "SELECTED_PLAYLISTS_RESULTS":
      state.selectedPlaylistsResults.push(action.payload);
      var remove = state.playlistsResults.indexOf(action.payload);
      state.playlistsResults.splice(remove, 1);

      state = {
        ...state,
      };

      break;

    case "REMOVE_SELECTED_PLAYLISTS_RESULTS":
      state.playlistsResults.push(action.payload);
      var remove = state.selectedPlaylistsResults.indexOf(action.payload);
      state.selectedPlaylistsResults.splice(remove, 1);

      state = {
        ...state,
      };

      break;

    case "CLEAR_PLAYLISTS_RESULTS":
      state = {
        ...state,
        playlistsResults: [],
        selectedPlaylistsResults: []
      };

      break;

    case "CLEAR_SELECTED_PLAYLISTS_RESULTS":
      state = {
        ...state,
        selectedPlaylistsResults: []
      };

      break;

    case "CLEAR_SELECTED_VIDEO":
      state = {
        ...state,
        selectedVideo: null
      };
      break;

  }

  return state;
};

export default AppReducer;
