import React from 'react';

export default React.createClass({

getInitialState(){
  return {
    resources: []
  }
},

componentDidMount () {
  var obj = {citizenship: 1, confidence: 2, "endocrinology-referral": 0, home: 1, information: 3, money: 2, "psych-assessment-referral": 1, "public-surgery-referral": 0};
  var results = [];
  for (var key in obj) {
    var count = obj[key];
    for (var i = 0; i < count; i++){
      results.push(key);
  }
  this.setState({resources: results})
}
},

render(){
var arr = this.state.resources

  var resources = arr.map(function (icon, i){
  icon = "./images/" + icon + ".png"
  return (
    <img src={icon} alt={icon} />
  )
  })
    return (
    <div>
      {resources}
    </div>
  )
  }

})
