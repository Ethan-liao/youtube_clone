import _ from 'lodash'
import React, { Component } from 'react';
import './style/App.css';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/vid-list'
import VideoDetail from './components/vid-details';
import keys from './config/keys.js';

const API_KEY = keys.API_KEY;


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVid:null
    }
    this.videoSearch('')
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVid:videos[0]
      })
    })
  }
  render() {
    const vidSearch = _.debounce((term)=>{this.videoSearch(term)},300)
    return (
      <div>
        <h2>Youtube clone</h2>
        <SearchBar onSearchChange={term=>{vidSearch(term)}}/>
        <VideoDetail
          video={this.state.selectedVid}
        />
        <VideoList
          onVidSelect={selectedVid=>this.setState({selectedVid})}
          videos={this.state.videos}
        />

      </div>
    );
  }
}

export default App;
