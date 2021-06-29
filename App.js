import React from 'react';
import ReactDOM from "react-dom"
import './App.css';
import Form from './Form';
import Login from './Login';
import Header from './MemeGen/Header';
import MemeGenerator from './MemeGen/MemeGenerator';
import './MemeGen/Meme.css';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
        {/* <Login /> */}
 
        <Header />
        <MemeGenerator />



    </div>
  );
}

export default App;
