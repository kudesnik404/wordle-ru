import React from "react";
import "./App.css";
// import wordList from "./russian_nouns_5.json"
//что-то происходит с кодировкой файла. символы становятся <?>, а кириллица юникодом (\uXXXX)

class App extends React.Component {
  state = {
    word: "well",
  };

  
  getWord = () => {
    const wordId = Math.floor(Math.random() * (3492 - 1)) + 1
    console.log(wordId)

    // console.log(data)
    // let data = require('./russian_nouns_5.json');
    // console.log(wordList);

    fetch('./russian_nouns_5.json'
    // , {
    //   method: 'GET',
    //   headers: {'Content-Type': 'application/json; charset=utf-8'}
    // }
    )
    .then((res) =>  {
    return res.json()
    })
    .then ((data) => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
      // читает файл index.html вместо russian_nouns_5.json
    });

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
