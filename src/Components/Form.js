import React from "react";
import getWords from "./words5";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place0: "",
      place1: "",
      place2: "",
      place3: "",
      place4: "",
      bannedLetters: "",
      rightLetters: "",
      select_words: [],
      clicked: false,
    };
  }

  render() {
    if (this.state.clicked === true) {
      return (
        <React.Fragment>
          <div className="filtered-words">
            <h2>Input one of these words, then complete the form again.</h2>
            <ul>
              {this.state.select_words.map((word) => {
                return <li key={word}>{word}</li>;
              })}
            </ul>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <form>
          <ul>
            <li>
              <span className="tip">TIP 1</span>: Enter the word "AROSE" as your
              first guess.
            </li>
            <li>
              <span className="tip">TIP 2</span>: If any letters were green
              after that first guess, enter them in the correct place below:
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
              <span className="tip">TIP 3</span>: Input in the space below any
              letters that are grey in your guess:
              <br />
              <input className="banned-letters" />
            </li>
            <li>
              <span className="tip">TIP 4</span>: Input in the field below any
              letters that were correct, but in the wrong place:
              <br />
              <input className="right-letters" />
            </li>
          </ul>
          <button className="submit-button">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
