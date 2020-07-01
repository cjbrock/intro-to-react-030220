import React, { Component } from 'react';

// class AnotherComponent extends Component {
//   render() {
//     console.log(this.props)
//     return (
//       <div className="App">
//         <li>{this.props.name}</li>
//     </div>
//     );
//   }
// }

// function AnotherComponent(props){
//   return <li>{props.name}</li>
// }

function AnotherComponent({ name, age, eye_color}){
  return <li>{name} is {age} years old with {eye_color} eyes</li>
}

export default AnotherComponent;