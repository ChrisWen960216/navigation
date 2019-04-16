import React, { Component } from 'react';
import Header from './components/header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(values) {
    console.log(values);
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={this.onSearch} />
      </div>
    );
  }
}

export default App;
