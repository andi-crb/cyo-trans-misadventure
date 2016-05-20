import React from 'react';
import {render} from 'react-dom';
import Board from './Board.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <Board />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
