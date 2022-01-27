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
    this.wordFilter = this.wordFilter.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value.toLowerCase(),
    })
  }

  wordFilter(places, bad_letters, good_letters) {
    let words = this.state.select_words;
    let filtered_words = words.filter(word  => {
      for (const k in places) {
        if (word[k] !== places[k]) {
          return false
        }
      }
      for (const b of bad_letters) {
        if (word.includes(b) === true) {
          return false
        }
      }
      for (const g of good_letters) {
        if (word.includes(g) === false) {
          return false
        }
      }
      return true
    })
    return filtered_words
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
                <li className="placers">
                  <input maxLength={1} className="place0" />
                </li>
                <li className="placers">
                  <input maxLength={1} className="=place1" />
                </li>
                <li className="placers">
                  <input maxLength={1} className="place2" />
                </li>
                <li className="placers">
                  <input maxLength={1} className="place3" />
                </li>
                <li className="placers">
                  <input maxLength={1} className="place4" />
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
