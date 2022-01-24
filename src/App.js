import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WORDLE SOLVER</h1>
      </header>
      <body className="App-body">
        <p>
          If you want some help to solve wordle, just follow the instructions
          below.
        </p>
        <form>
          <ul>
            <li>Tip 1: Enter the word "AROSE" as your first guess.</li>
            <li>
              Tip 2: If any letters were green after that first guess, enter
              them in the correct place below:
            </li>
            <li>
              <ul className="place-list">
                <li className="placers">
                  <input />
                </li>
                <li className="placers">
                  <input />
                </li>
                <li className="placers">
                  <input />
                </li>
                <li className="placers">
                  <input />
                </li>
                <li className="placers">
                  <input />
                </li>
              </ul>
            </li>
            <li>Tip 3: Input in the space below any letters that are grey in your guess:
              <br/>
              <input className="banned-letters" />
            </li>
            <li>Tip 4: Input in the field below any letters that were correct, but in the wrong place:
              <br/>
              <input className="right-letters" />
            </li>
          </ul>
          <button className="submit-button">Submit</button>
        </form>
      </body>
    </div>
  );
}

export default App;
