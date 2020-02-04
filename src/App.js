import React from 'react';
// import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './store/store'
import Game from './components/Game/index'

import './App.css';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Game />
      </div>
    </Provider>
  );
}

export default App;
