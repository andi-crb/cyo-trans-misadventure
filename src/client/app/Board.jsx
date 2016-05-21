import React from 'react';
import Keymaster from 'keymaster';
import $ from 'jquery';

export default React.createClass({



getInitialState(){
  return {
    arr: [
      [0,0,0,0,0,0,0,0,0,"b",0,0,0,0,0,0,0,0,"u","u","u",0,"u","a"],
      ["u","u","u","u",0,"u","u","u",0,"b",0,"u","u","u","u","u","u",0,"u","u","u",0,"u","u"],
      ["u","u","u","u",0,"u","u","u",0,"b",0,"u","u","u","u","u","u",0,"u","u","u",0,0,0],
      ["u","u","u","u",0,"u","u","u",0,"b",0,"u","u","u","u","u","u",0,0,0,0,0,"b",0],
      ["u","u","u","u",0,"u","u","u",0,"b",0,"u","u","u","u","u","u",0,"u","u","u",0,"b",0],
      [0,0,0,0,0,0,0,0,0,"b",0,0,0,0,0,0,0,0,"u","u","u",0,"b",0],
      [0,"b","b","b","b","b","b","b","b","b",0,"b","b","b","b","b","b",0,"u","u","u",0,"b",0],
      [0,0,0,0,0,0,0,0,0,"b",0,0,0,0,0,0,0,0,"u","u","u",0,"b",0],
      ["b","b","b","b","b","b","b","b",0,0,0,"u","u","u","u","u","u",0,"u","u","u",0,"b",0],
      [0,0,0,0,"u","u","u","u","u","u",0,"u","u","u","u","u","u",0,0,0,0,0,0,0],
      ["u","u","u",0,"u","u","u","u","u","u",0,"u","u","u","u","u","u",0,"b","b","b","b","b","b"],
      ["u","u","u",0,"u","u","u","u","u","u",0,"u","u","u","u","u","u",0,0,0,0,0,0,0],
      ["u","u","u",0,0,0,0,0,0,0,0,"u","u","u","u","u","u","b","b","b","b","b","b",0],
      [0,0,0,0,"b","b","b","b","b","b",0,"u","u","u","u","u","u",0,0,0,0,0,0,0],
      ["b","b","b","b","b","b",0,"u","u","u",0,0,0,0,0,0,0,0,"b","b","b","b","b","b"],
      [0,0,0,0,0,0,0,"u","u","u",0,"b","b","b","b","b","b",0,0,0,0,0,0,0],
      [0,"u","u","u",0,"b",0,"u","u","u",0,0,0,0,0,0,0,0,"b","b","b","b","b","b"],
      [0,"u","u","u",0,"b",0,0,0,0,0,"u","u","u","u","u","u",0,0,0,0,0,0,0],
      [0,"u","u","u",0,"b","u","u","u","u",0,"u","u","u","u","u","u",0,"u","u","u","u","u","u"],
      [0,"b","b","b","b","b","u","u","u","u",0,"u","u","u","u","u","u",0,"u","u","u","u","u","u"],
      [0,"u","u","u","b",0,"u","u","u","u",0,0,0,0,0,0,0,0,"u","u","u","u","u","u"],
      [0,"u","u","u","b",0,"u","u","u","u",0,"u","u","u","u","u","u",0,"u","u","u","u","u","u"],
      [0,"u","u","u","b",0,"u","u","u","u",0,"u","u","u","u","u","u",0,"u","u","u","u","u","u"],
      [0,0,0,0,0,0,"u","u","u","u",0,"u","u","u","u","u","u",0,"u","u","u","u","u","u"]
    ],
    row: 1,
    col: 23,
    previousState: "u"

  }
},

componentDidMount () {
  $(document.body).on('keydown', this.handleKeyDown);
},


handleKeyDown (e) {
  var row = this.state.row
  var col = this.state.col
  var arr = this.state.arr
  var prev = this.state.previousState
  if (e.keyCode == 38 && row > -1) {
    arr[row][col] = prev
    row = row-1
    var newPrevious = arr[row][col]
    this.setState({previousState: newPrevious})
    arr[row][col] = "a"
    this.setState({row: row})
    this.setState({arr: arr})
  } else if (e.keyCode == 40 && row < 24){
    arr[row][col] = prev
    row = row+1
    var newPrevious = arr[row][col]
    this.setState({previousState: newPrevious})
    arr[row][col] = "a"
    this.setState({row: row})
    this.setState({arr: arr})
  } else if (e.keyCode == 37){
    arr[row][col] = prev
    col = col-1
    var newPrevious = arr[row][col]
    this.setState({previousState: newPrevious})
    arr[row][col] = "a"
    this.setState({col: col})
    this.setState({arr: arr})
  } else if (e.keyCode == 39) {
    arr[row][col] = prev
    col = col-1
    var newPrevious = arr[row][col]
    this.setState({previousState: newPrevious})
    arr[row][col] = "a"
    this.setState({col: col})
    this.setState({arr: arr})
  }
},

render(){

var arr=this.state.arr
var rows = arr.map(function (item, i){
    var entry = item.map(function (element, j) {
        return (
            <td className={element}></td>
            );
    });
    return (
        <tr key={i}> {entry} </tr>
     );
});


      return (<table><tbody>{rows}</tbody></table>)
  }

})
