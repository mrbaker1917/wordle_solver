import "./App.css";
import Form from "../src/Components/Form"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><span>W</span><span>O</span><span>R</span><span>D</span><span>L</span><span>E</span><span>  </span> <span>S</span><span>O</span><span>L</span><span>V</span><span>E</span><span>R</span></h1>
        <a href="https://mrbaker1917.com" target="_blank" rel="noreferrer" title="Click to go to my website!">Created by mrbaker1917</a>
      </header>
      <div className="App-body">
        <p>
          If you want some help to solve wordle, just follow the tips below.
        </p>
        <Form />
        </div>
    </div>
  );
}

export default App;
