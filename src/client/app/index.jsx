import React from 'react';
import {render} from 'react-dom';
import Board from './Board.jsx';
import Menu from './Menu.jsx';
import Title from './Title.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="twelve columns">
            <Menu />
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <Title />
          </div>
        </div>
        <div className="row">
          <div className="two columns">
            <p>Placeholder</p>
          </div>
          <div className="six columns">
            <Board />
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
