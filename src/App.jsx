import React, { Component } from 'react';
import { Button } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary">Hello world</Button>
        </header>
      </div>
    );
  }
}

export default App;
