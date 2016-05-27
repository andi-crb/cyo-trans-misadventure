import React from 'react';

export default React.createClass({

render(){
var arr = ['money', 'money', 'home', 'confidence', 'home', 'confidence']

  var resources = arr.map(function (icon, i){
  icon = "./images/" + icon + ".png"
  return (
    <img src={icon} />
  )
  })
    return (
    <div>
      {resources}
    </div>
  )
  }

})
