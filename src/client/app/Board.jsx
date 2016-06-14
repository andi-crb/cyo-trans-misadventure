import React from 'react';
import Keymaster from 'keymaster';
import $ from 'jquery';

export default React.createClass({

getInitialState(){
  return {
    arr: [
      [0,0,0,0,0,0,0,0,0,"b",0,0,0,0,0,0,0,0,"v","v","v",0,"x","a"],
      ["z","z","z","z",0,"y","y","y",0,"b",0,"w","w","w","w","w","w",0,"v","v","v",0,"x","x"],
      ["z","z","z","z",0,"y","y","y",0,"b",0,"w","w","w","w","w","w",0,"v","v","v",0,0,0],
      ["z","z","z","z",0,"y","y","y",0,"b",0,"w","w","w","w","w","w",0,0,0,0,0,"b",0],
      ["z","z","z","z",0,"y","y","y",0,"b",0,"w","w","w","w","w","w",0,"t,"t","t",0,"b",0],
      [0,0,0,0,0,0,0,0,0,"b",0,0,0,0,0,0,0,0,"t","t","t",0,"b",0],
      [0,"b","b","b","b","b","b","b","b","b",0,"b","b","b","b","b","b",0,"t","t","t",0,"b",0],
      [0,0,0,0,0,0,0,0,0,"b",0,0,0,0,0,0,0,0,"t","t","t",0,"b",0],
      ["b","b","b","b","b","b","b","b",0,0,0,"u","u","u","u","u","u",0,"u","u","u",0,"b",0],
      [0,0,0,0,"s","s","s","s","s","s",0,"u","u","u","u","u","u",0,0,0,0,0,0,0],
      ["r","r","r",0,"s","s","s","s","s","s",0,"u","u","u","u","u","u",0,"b","b","b","b","b","b"],
      ["r","r","r",0,"s","s","s","s","s","s",0,"u","u","u","u","u","u",0,0,0,0,0,0,0],
      ["r","r","r",0,0,0,0,0,0,0,0,"u","u","u","u","u","u","b","b","b","b","b","b",0],
      [0,0,0,0,"b","b","b","b","b","b",0,"u","u","u","u","u","u",0,0,0,0,0,0,0],
      ["b","b","b","b","b","b",0,"q","q","q",0,0,0,0,0,0,0,0,"b","b","b","b","b","b"],
      [0,0,0,0,0,0,0,"q","q","q",0,"b","b","b","b","b","b",0,0,0,0,0,0,0],
      [0,"p","p","p",0,"b",0,"q","q","q",0,0,0,0,0,0,0,0,"b","b","b","b","b","b"],
      [0,"p","p","p",0,"b",0,0,0,0,0,"o","o","o","o","o","o",0,0,0,0,0,0,0],
      [0,"p","p","p",0,"b","m","m","m","m",0,"n","n","n","n","n","n",0,"o","o","o","o","o","o"],
      [0,"b","b","b","b","b","m","m","m","m",0,"n","n","n","n","n","n",0,"o","o","o","o","o","o"],
      [0,"l","l","l","b",0,"m","m","m","m",0,0,0,0,0,0,0,0,"o","o","o","o","o","o"],
      [0,"l","l","l","b",0,"m","m","m","m",0,"k","k","k","k","k","k",0,"o","o","o","o","o","o"],
      [0,"l","l","l","b",0,"m","m","m","m",0,"k","k","k","k","k","k",0,"o","o","o","o","o","o"],
      [0,0,0,0,0,0,"m","m","m","m",0,"k","k","k","k","k","k",0,"o","o","o","o","o","o"]
    ],
    row: 0,
    col: 23,
    previousState: "u"

  }
},

componentDidMount () {
  $(document.body).on('keyup', this.handleKeyUp);
},

handleKeyUp (e) {
  var row = this.state.row
  var col = this.state.col
  var arr = this.state.arr
  var prev = this.state.previousState
  if (e.keyCode == 38 && row > 0) {
    if (arr[row-1][col] != "b"){
      arr[row][col] = prev
      row = row-1
      var newPrevious = arr[row][col]
      this.setState({previousState: newPrevious})
      arr[row][col] = "a"
      this.setState({row: row, arr: arr, col:col})
    }
  } else if (e.keyCode == 40 && row < 23){
    if (arr[row+1][col] != "b"){
      arr[row][col] = prev
      row = row+1
      var newPrevious = arr[row][col]
      this.setState({previousState: newPrevious})
      arr[row][col] = "a"
      this.setState({row: row, arr: arr})
    }
  } else if (e.keyCode == 37 && col > 0){
    if (arr[row][col-1] != "b"){
      arr[row][col] = prev
      col = col-1
      var newPrevious = arr[row][col]
      this.setState({previousState: newPrevious})
      arr[row][col] = "a"
      this.setState({col: col, arr: arr})
    }
  } else if (e.keyCode == 39 && col < 23) {
    if (arr[row][col+1] != "b"){
      arr[row][col] = prev
      col = col+1
      var newPrevious = arr[row][col]
      this.setState({previousState: newPrevious})
      arr[row][col] = "a"
      this.setState({col: col, arr: arr})
    }
  }
},

render(){
  var arr=this.state.arr
  var rows = arr.map(function (item, i){
    var entry = item.map(function (element, j) {
      return (
        <td className={element}></td>
      )
    })
    return (
      <tr key={i}> {entry} </tr>
    );
  });
  return (<table><tbody>{rows}</tbody></table>)
  }
})
