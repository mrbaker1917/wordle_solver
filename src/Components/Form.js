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
      select_words: getWords(),
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
              first guess (works with other five-letter words as well).
            </li>
            <li>
              <span className="tip">TIP 2</span>: If any letters were green
              after that first guess, enter them in the correct places below:
            </li>
            <li>
              <ul className="place-list">
                <li className="placers place0">
                  <input maxLength={1} />
                </li>
                <li className="placers place1">
                  <input maxLength={1} />
                </li>
                <li className="placers place2">
                  <input maxLength={1} />
                </li>
                <li className="placers place3">
                  <input maxLength={1} />
                </li>
                <li className="placers place4">
                  <input maxLength={1} />
                </li>
              </ul>
            </li>
            <li>
              <span className="tip">TIP 3</span>: Input in the space below any
              letters that are grey in your guess (no spaces or commas, side by side):
              <br />
              <input className="banned-letters" />
            </li>
            <li>
              <span className="tip">TIP 4</span>: Input in the field below any
              letters that were correct, but in the wrong place (no spaces or commas):
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
