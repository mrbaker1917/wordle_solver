import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WORDLE SOLVER</h1>
      </header>
      <body className="App-body">
        <p>
          If you want some help to solve wordle, just follow the tips below.
        </p>
        <form>
          <ul>
            <li><span className="tip">TIP 1</span>: Enter the word "AROSE" as your first guess.</li>
            <li>
            <span className="tip">TIP 2</span>: If any letters were green after that first guess, enter
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
            <li>
            <span className="tip">TIP 3</span>: Input in the space below any letters that are grey in your
              guess:
              <br />
              <input className="banned-letters" />
            </li>
            <li>
            <span className="tip">TIP 4</span>: Input in the field below any letters that were correct, but
              in the wrong place:
              <br />
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
