import React from 'react';
import Keymaster from 'keymaster';
import $ from 'jquery';

class Board extends React.Component {

componentDidMount () {
  $(document.body).on('keydown', this.handleKeyDown);
}

handleKeyDown (e) {
  console.log("A key!", e)

}

  render() {
    return (
      <div>
      <table onKeyUp={this.handleKeyUp}>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan="8" className="barrier"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan="3" colSpan="3" className="building"></td>
          <td></td>
          <td rowSpan="2" colSpan="2" className="building" className="active"></td>
        </tr>
        <tr>
          <td rowSpan="4" colSpan="4" className="building"></td>
          <td></td>
          <td rowSpan="4" colSpan="3" className="building"></td>
          <td></td>
          <td></td>
          <td rowSpan="4" colSpan="6" className="building"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan="6" className="barrier" className="building"></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan="5" colSpan="3" className="building"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan="8" className="barrier"></td>
          <td></td>
          <td colSpan="6" className="barrier"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan="8" className="barrier"></td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan="6" colSpan="6" className="building"></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan="3" colSpan="6" className="building"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowSpan="3" colSpan="3" className="building"></td>
          <td></td>
          <td></td>
          <td></td>
          <td colSpan="6" className="barrier"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td colSpan="6" className="barrier"></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td colSpan="6" className="barrier"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan="6" className="barrier"></td>
          <td></td>
          <td rowSpan="3" colSpan="3" className="building"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td colSpan="6" className="barrier"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td colSpan="6" className="barrier"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td rowSpan="3" colSpan="3" className="building"></td>
          <td></td>
          <td rowSpan="3" className="barrier"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td colSpan="6" className="barrier"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan="3" colSpan="6" className="building"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td rowSpan="6" colSpan="4" className="building"></td>
          <td></td>
          <td></td>
          <td rowSpan="6" colSpan="6" className="building"></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan="5" className="barrier"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td rowSpan="3" colSpan="3" className="building"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td rowSpan="3" colSpan="6" className="building"></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      </table>
      </div>
    );
  }

}

export default Board;
