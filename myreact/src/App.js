import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from  './Components/Greet'
// import {Greet} from  './Components/Greet'  // using export in the same line 
import Welcome from './Components/Welcome'
// import Hello from  './components/Hello'
import Message from  './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import Vishnu from './Components/Vishnu'
import ParentComponent from './Components/ParentComponent'


class App extends Component {
  render () {
  return (
    <div className="App">
      {/* <Vishnu />
      <ParentComponent />
      <EventBind />
      <FunctionClick />
      <ClassClick /> */}
       <Greet name="vishnu" heroname="batman">
        <p> This is a children props</p> 
      </Greet> 
      <Greet  name="kaku" heroname="superman">
      <button>Action</button>
      </Greet>
      <Greet  name="nani" heroname="heman"/>
{/* 
      <Welcome  name="rakesh" heroname="batman"/> */}

      {/* <Hello />
      <Message />
      <Counter /> */}
   
    </div>
  );
}
}

export default App;
