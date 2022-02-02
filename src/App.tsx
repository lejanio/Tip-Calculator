import React from 'react';
import './App.scss';
import logo from './assets/images/logo.svg';
import Main from './components/Main/Main';

const App = () => (
  <div className="app-container">
    <div className="app">
      <header className="header">
        <img src={logo} alt="Splitter Logo" />
      </header>

      <section>
        <Main />
      </section>
    </div>
  </div>
);

export default App;
