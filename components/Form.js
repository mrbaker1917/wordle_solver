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
      wplace0: "",
      wplace1: "",
      wplace2: "",
      wplace3: "",
      wplace4: "",
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

  // Calculate letter frequencies from all words
  calculateLetterFrequencies() {
    const letterCounts = {};
    const allWords = this.state.select_words;
    
    // Count occurrences of each letter across all words
    allWords.forEach(word => {
      for (let char of word) {
        letterCounts[char] = (letterCounts[char] || 0) + 1;
      }
    });
    
    return letterCounts;
  }

  // Calculate word score based on letter frequencies
  calculateWordScore(word, letterFrequencies) {
    let score = 0;
    const uniqueLetters = new Set(word); // Only count each unique letter once per word
    
    uniqueLetters.forEach(letter => {
      score += letterFrequencies[letter] || 0;
    });
    
    return score;
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
      for (const g in good_letters) {
        if (word.includes(good_letters[g]) === false) {
          return false;
        }
        if (good_letters[g] === word[g]) {
          return false;
        }
      }
      return true;
    });

    // Calculate letter frequencies and sort by commonness
    const letterFrequencies = this.calculateLetterFrequencies();
    
    return filtered_words.sort((a, b) => {
      const a_score = this.calculateWordScore(a, letterFrequencies);
      const b_score = this.calculateWordScore(b, letterFrequencies);
      return b_score - a_score; // Sort descending (most common letters first)
    });
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
      wplace0,
      wplace1,
      wplace2,
      wplace3,
      wplace4,
    } = this.state;

    let places = { 0: place0, 1: place1, 2: place2, 3: place3, 4: place4 };
    let wplaces = {
      0: wplace0,
      1: wplace1,
      2: wplace2,
      3: wplace3,
      4: wplace4,
    };
    this.setState({
      clicked: true,
      select_words: this.wordFilter(places, bannedLetters, wplaces),
    });
  }

  render() {
    if (this.state.clicked === true) {
      return (
        <React.Fragment>
          <div className="filtered-words">
            <button className="reset-btn" onClick={this.refreshPage}>
              🔄 Reset
            </button>
            <h2>💡 Suggested Words</h2>
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                  type="text"
                />
              </li>
              <li>
                <span className="tip">TIP 4</span>: Input in the positions below
                any letters that were correct, but in the wrong place (in wrong
                place):
                <br />
                <ul className="wplace-list">
                  <li className="placers">
                    <input
                      maxLength={1}
                      className="wplace0"
                      value={this.state.wplace0}
                      onChange={this.handleInputChange}
                      name="wplace0"
                      autoComplete="off"
                      type="text"
                    />
                  </li>
                  <li className="placers">
                    <input
                      maxLength={1}
                      className="wplace1"
                      value={this.state.wplace1}
                      onChange={this.handleInputChange}
                      name="wplace1"
                      autoComplete="off"
                      type="text"
                    />
                  </li>
                  <li className="placers">
                    <input
                      maxLength={1}
                      className="wplace2"
                      value={this.state.wplace2}
                      onChange={this.handleInputChange}
                      name="wplace2"
                      autoComplete="off"
                      type="text"
                    />
                  </li>
                  <li className="placers">
                    <input
                      maxLength={1}
                      className="wplace3"
                      value={this.state.wplace3}
                      onChange={this.handleInputChange}
                      name="wplace3"
                      autoComplete="off"
                      type="text"
                    />
                  </li>
                  <li className="placers">
                    <input
                      maxLength={1}
                      className="wplace4"
                      value={this.state.wplace4}
                      onChange={this.handleInputChange}
                      name="wplace4"
                      autoComplete="off"
                      type="text"
                    />
                  </li>
                </ul>
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
        <form onSubmit={this.handleSubmit}>
          <div className="form-section">
            <h3>🟩 Letters in Correct Position</h3>
            <p className="tip">Enter green letters from Wordle in their correct spots</p>
            <ul className="place-list">
              <li>
                <input
                  maxLength={1}
                  value={this.state.place0}
                  onChange={this.handleInputChange}
                  name="place0"
                  autoComplete="off"
                  type="text"
                  placeholder="1"
                />
              </li>
              <li>
                <input
                  maxLength={1}
                  value={this.state.place1}
                  onChange={this.handleInputChange}
                  name="place1"
                  autoComplete="off"
                  type="text"
                  placeholder="2"
                />
              </li>
              <li>
                <input
                  maxLength={1}
                  value={this.state.place2}
                  onChange={this.handleInputChange}
                  name="place2"
                  autoComplete="off"
                  type="text"
                  placeholder="3"
                />
              </li>
              <li>
                <input
                  maxLength={1}
                  value={this.state.place3}
                  onChange={this.handleInputChange}
                  name="place3"
                  autoComplete="off"
                  type="text"
                  placeholder="4"
                />
              </li>
              <li>
                <input
                  maxLength={1}
                  value={this.state.place4}
                  onChange={this.handleInputChange}
                  name="place4"
                  autoComplete="off"
                  type="text"
                  placeholder="5"
                />
              </li>
            </ul>
          </div>
          
          <div className="form-section">
            <h3>🟨 Letters in Wrong Position</h3>
            <p className="tip">Enter yellow letters that are in the word but wrong spots</p>
            <ul className="wplace-list">
              <li>
                <input
                  maxLength={1}
                  value={this.state.wplace0}
                  onChange={this.handleInputChange}
                  name="wplace0"
                  autoComplete="off"
                  type="text"
                  placeholder="1"
                />
              </li>
              <li>
                <input
                  maxLength={1}
                  value={this.state.wplace1}
                  onChange={this.handleInputChange}
                  name="wplace1"
                  autoComplete="off"
                  type="text"
                  placeholder="2"
                />
              </li>
              <li>
                <input
                  maxLength={1}
                  value={this.state.wplace2}
                  onChange={this.handleInputChange}
                  name="wplace2"
                  autoComplete="off"
                  type="text"
                  placeholder="3"
                />
              </li>
              <li>
                <input
                  maxLength={1}
                  value={this.state.wplace3}
                  onChange={this.handleInputChange}
                  name="wplace3"
                  autoComplete="off"
                  type="text"
                  placeholder="4"
                />
              </li>
              <li>
                <input
                  maxLength={1}
                  value={this.state.wplace4}
                  onChange={this.handleInputChange}
                  name="wplace4"
                  autoComplete="off"
                  type="text"
                  placeholder="5"
                />
              </li>
            </ul>
          </div>
          
          <div className="form-section">
            <h3>⚫ Excluded Letters</h3>
            <p className="tip">Enter gray letters that are not in the word</p>
            <input
              className="bannedLetters"
              value={this.state.bannedLetters}
              onChange={this.handleInputChange}
              name="bannedLetters"
              autoComplete="off"
              placeholder="Enter excluded letters..."
              type="text"
            />
          </div>
          
          <button className="submitButton" type="submit">
            🔍 Find Words
          </button>
        </form>
      </React.Fragment>
    );
  }
}
