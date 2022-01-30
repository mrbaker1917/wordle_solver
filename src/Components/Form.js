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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value.toLowerCase(),
    });
  }

  refreshPage() {
    return window.location.reload();
  }

  wordFilter(places, bad_letters, good_letters) {
    let words = this.state.select_words;
    let filtered_words = words.filter((word) => {
      for (const k in places) {
        if (places[k] !== "" && word[k] !== places[k]) {
          return false;
        }
      }
      for (const b of bad_letters) {
        if (word.includes(b) === true && !Object.values(places).includes(b)) {
          return false;
        }
      }
      for (const g of good_letters) {
        if (word.includes(g) === false) {
          return false;
        }
      }
      return true;
    });

    return filtered_words.sort();
  }

  handleSubmit(event) {
    event.preventDefault();
    let {
      place0,
      place1,
      place2,
      place3,
      place4,
      bannedLetters,
      rightLetters,
    } = this.state;

    let places = { 0: place0, 1: place1, 2: place2, 3: place3, 4: place4 };
    this.setState({
      clicked: true,
      select_words: this.wordFilter(places, bannedLetters, rightLetters),
    });
  }

  render() {
    if (this.state.clicked === true) {
      return (
        <React.Fragment>
          <div className="filtered-words">
          <button className="reset-btn" onClick={this.refreshPage}>
            Reset
          </button>
            <h2>Now input one of these words:</h2>
            <ul>
              {this.state.select_words.map((word) => {
                return <li key={word}>{word}</li>;
              })}
            </ul>
            <h3>
              If not yet solved, add the new info to the form below and submit.
            </h3>
          </div>
          <form className="form" onSubmit={this.handleSubmit}>
            <ul>
              <li>
                <span className="tip">TIP 2</span>: If any letters were green
                after that first guess, enter them in the correct places below:
              </li>
              <li>
                <ul className="place-list">
                  <li className="placers">
                    <input
                      maxLength={1}
                      className="place0"
                      value={this.state.place0}
                      onChange={this.handleInputChange}
                      name="place0"
                      autoComplete="off"
                    />
                  </li>
                  <li className="placers">
                    <input
                      maxLength={1}
                      className="place1"
                      value={this.state.place1}
                      onChange={this.handleInputChange}
                      name="place1"
                      autoComplete="off"
                    />
                  </li>
                  <li className="placers">
                    <input
                      maxLength={1}
                      className="place2"
                      value={this.state.place2}
                      onChange={this.handleInputChange}
                      name="place2"
                      autoComplete="off"
                    />
                  </li>
                  <li className="placers">
                    <input
                      maxLength={1}
                      className="place3"
                      value={this.state.place3}
                      onChange={this.handleInputChange}
                      name="place3"
                      autoComplete="off"
                    />
                  </li>
                  <li className="placers">
                    <input
                      maxLength={1}
                      className="place4"
                      value={this.state.place4}
                      onChange={this.handleInputChange}
                      name="place4"
                      autoComplete="off"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <span className="tip">TIP 3</span>: Input in the space below any
                letters that are grey in your guess (no spaces or commas, side
                by side):
                <br />
                <input
                  className="bannedLetters"
                  value={this.state.bannedLetters}
                  onChange={this.handleInputChange}
                  name="bannedLetters"
                  autoComplete="off"
                />
              </li>
              <li>
                <span className="tip">TIP 4</span>: Input in the field below any
                letters that were correct, but in the wrong place (no spaces or
                commas):
                <br />
                <input
                  className="rightLetters"
                  value={this.state.rightLetters}
                  onChange={this.handleInputChange}
                  name="rightLetters"
                  autoComplete="off"
                />
              </li>
            </ul>
            <button className="submitButton" type="submit" value="Submit">
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <form className="form" onSubmit={this.handleSubmit}>
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
                  <input
                    maxLength={1}
                    className="place0"
                    value={this.state.place0}
                    onChange={this.handleInputChange}
                    name="place0"
                    autoComplete="off"
                  />
                </li>
                <li className="placers">
                  <input
                    maxLength={1}
                    className="place1"
                    value={this.state.place1}
                    onChange={this.handleInputChange}
                    name="place1"
                    autoComplete="off"
                  />
                </li>
                <li className="placers">
                  <input
                    maxLength={1}
                    className="place2"
                    value={this.state.place2}
                    onChange={this.handleInputChange}
                    name="place2"
                    autoComplete="off"
                  />
                </li>
                <li className="placers">
                  <input
                    maxLength={1}
                    className="place3"
                    value={this.state.place3}
                    onChange={this.handleInputChange}
                    name="place3"
                    autoComplete="off"
                  />
                </li>
                <li className="placers">
                  <input
                    maxLength={1}
                    className="place4"
                    value={this.state.place4}
                    onChange={this.handleInputChange}
                    name="place4"
                    autoComplete="off"
                  />
                </li>
              </ul>
            </li>
            <li>
              <span className="tip">TIP 3</span>: Input in the space below any
              letters that are grey in your guess (no spaces or commas, side by
              side):
              <br />
              <input
                className="bannedLetters"
                value={this.state.bannedLetters}
                onChange={this.handleInputChange}
                name="bannedLetters"
                autoComplete="off"
                placeholder="bad letters"
              />
            </li>
            <li>
              <span className="tip">TIP 4</span>: Input in the field below any
              letters that were correct, but in the wrong place (no spaces or
              commas):
              <br />
              <input
                className="rightLetters"
                value={this.state.rightLetters}
                onChange={this.handleInputChange}
                name="rightLetters"
                autoComplete="off"
                placeholder="misplaced letters"
              />
            </li>
          </ul>
          <button className="submitButton" type="submit" value="Submit">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
