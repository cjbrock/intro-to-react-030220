





// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Hey y'all</h2>
        
    //   </header>
    // </div>
//   );
// }



// const App = () =>  (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>This arrow function has an implicit return</h2>
        
//       </header>
//     </div>
//     );

import React, { Component } from 'react';
import AnotherComponent from './AnotherComponent'
import logo from './logo.svg';
import './App.css';

const names = ['Jessica', 'Bryant', 'Marsha', 'Gavin', 'Lialah', 'Terrence']

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hey y'all</h2>
        {/* <AnotherComponent name="Woody"/>
        <AnotherComponent name="Buzz"/>
        <AnotherComponent name="Bambi"/>
        <AnotherComponent name="Fleur"/> */}
        {names.map(name =>{
          return <AnotherComponent name={name} age={30} eye_color={"red"} />
        })}
      </header>
    </div>
    );
  }
}


export default App;


