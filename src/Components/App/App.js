import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const track1 = {
  id: 'track_1',
  name: 'song_name',
  artist: 'artist_name',
  album: 'album_name'
};
const track2 = {
  id: 'track_2',
  name: 'song_name',
  artist: 'artist_name',
  album: 'album_name'
};
const track3 = {
  id: 'track_3',
  name: 'song_name',
  artist: 'artist_name',
  album: 'album_name'
};
const track4 = {
  id: 'track_4',
  name: 'song_name',
  artist: 'artist_name',
  album: 'album_name'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [track1, track2, track3, track4],
      playlistName: 'my_playlist',
      playlistTracks: [track1, track2, track3]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    const newPlaylistTracks = this.state.playlistTracks;
    newPlaylistTracks.push(track);
    this.setState({playlistTracks: newPlaylistTracks});
  }

  removeTrack(track) {
    const newPlaylistTracks = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlistTracks: newPlaylistTracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks;
    return trackURIs;
  }

  search(term) {
    console.log(term)
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;