import React, { Component } from 'react';
import Header from './components/Header';
import MonthSelect from './containers/MonthSelect';
import ConstellationCard from './containers/ConstellationCard';
import Footer from './components/Footer';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <section id="content">
            <div class="container">
            <div class="row">
                <div class="col-sm">
                    <MonthSelect />
                </div>
                <div class="col-sm">
                    <ConstellationCard />
                </div>
            </div>
            </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
