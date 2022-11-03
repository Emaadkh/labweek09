import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import College from './College';
import Student from './Student';

let stu = {
  fname: "Emad",
  lname: "Khodabakhshi",
  id: 101215212
}

function App() {
  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Fullstack Development - I</h2>
        <h3>React JS Programming Week09 Lab exercise</h3>
        <Student student = {stu}/>
        <College city="Toronto"/>
      </header>
    </div>
    </Fragment>
  );
}

export default App;
