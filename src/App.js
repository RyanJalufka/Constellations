import React, { Component } from 'react';
import Header from './components/Header';
import MonthSelect from './containers/MonthSelect';
import ConstellationCard from './containers/ConstellationCard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <MonthSelect />
      <ConstellationCard />
      {/*
      <ConstellationSelect /> */}
      </div>
    );
  }
}

export default App;
