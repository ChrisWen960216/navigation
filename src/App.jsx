import React, { Component } from 'react';
import Header from './components/header';
import NavCard from './components/navCard';
import navList from './config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onIconClick = this.onIconClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.renderNavCards = this.renderNavCards.bind(this);
  }

  onSearch() {}

  onIconClick(title) {
  }

  renderNavCards(_navList) {
    const navCards = _navList.map(item => (
      <NavCard
        key={item.title}
        list={item.payload}
        title={item.title}
        onIconClick={this.onIconClick}
      />
    ));
    return navCards;
  }

  componentDidMount() {}

  render() {
    const navCards = this.renderNavCards(navList);
    return (
      <div className="App">
        <Header onSearch={this.onSearch} />
        <div className="content">
          {navCards}
        </div>
      </div>
    );
  }
}

export default App;
