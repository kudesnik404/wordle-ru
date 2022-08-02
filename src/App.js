import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    word: "well",
  };

  
  getWord = () => {
    
    fetch('/russian_nouns_5.txt')
    .then((r) => r.text())
    .then(text  => {
      console.log(text);
    })
  
    // fetch("wordle-ru/src/russian_nouns_5.txt") 
    //   .then((res) => res.txt())
    //   .then ((data) => {
    //     console.log(data)
    //   })
    // this.setState({ word: 'ok' });
  };
  render() {
    const { word } = this.state;
    return (
      <div className="App">
        <button onClick={this.getWord}></button>
        <p>{word}</p>
      </div>
    );
  }
}

export default App;
