import "./App.css";
import Form from "../src/Components/Form";
import React from "react";
import Counter from "../src/Components/counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span>W</span>
          <span>o</span>
          <span>r</span>
          <span>d</span>
          <span>l</span>
          <span>e</span>
          <span> </span>
          <span>S</span>
          <span>o</span>
          <span>l</span>
          <span>v</span>
          <span>e</span>
          <span>r</span>
        </h1>
        <a
          href="https://mrbaker1917.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Click to go to my website!"
        >
          Created by mrbaker1917
        </a>
      </header>
      <div className="App-body">
        <p>
          If you want some help to solve wordle, just follow the tips below.
        </p>
        <Form />
        <Counter />
      </div>
    </div>
  );
}

export default App;
