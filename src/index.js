import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAtDeS_VuXWdlzgQaO-LEFeuL_NCdTskfo'

YTSearch({key: API_KEY, term: 'snack cakes'}, function(data) {
  console.log(data)
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'yeezus'}, (videos) => {
      this.setState({ videos });
    });
  }


  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));