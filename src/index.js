import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAtDeS_VuXWdlzgQaO-LEFeuL_NCdTskfo'
// create a new component. This compnent should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    );
}

// Tak this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));