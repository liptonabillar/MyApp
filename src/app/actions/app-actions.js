export function videos(item){
  return {
    type: "VIDEOS",
    payload: item
  };
}

export function playlists(item){
  return {
    type: "PLAYLISTS",
    payload: item
  };
}

export function playlistsResults(item){
  return {
    type: "PLAYLISTS_RESULTS",
    payload: item
  };
}

export function onSelectVideo(item){
  return {
    type: "SELECTED_VIDEO",
    payload: item
  };
}

export function onSelectPlaylist(item){
  return {
    type: "SELECTED_PLAYLIST",
    payload: item
  };
}

export function onSelectPlaylistsResults(item){
  return {
    type: "SELECTED_PLAYLISTS_RESULTS",
    payload: item
  };
}

export function onRemoveSelectedPlaylistsResults(item){
  return {
    type: "REMOVE_SELECTED_PLAYLISTS_RESULTS",
    payload: item
  };
}

export function onClearPlaylistsResults(item){
  return {
    type: "CLEAR_PLAYLISTS_RESULTS",
    payload: item
  };
}

export function onClearSelectedPlaylistsResults(item){
  return {
    type: "CLEAR_SELECTED_PLAYLISTS_RESULTS",
    payload: item
  };
}

export function onBannerClicked(item){
  return {
    type: "CLEAR_SELECTED_VIDEO",
    payload: item
  };
}

export function onClearPlaylists(item){
  return {
    type: "CLEAR_PLAYLISTS",
    payload: item
  };
}
