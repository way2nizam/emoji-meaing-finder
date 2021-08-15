import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😛": "Face with Tongue or Cheeky",
  "🥶": "Cold Face or Freezing Face",
  "🤬": "Face with Symbols on Mouth or Cursing",
  "🥳": "Partying Face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setEmojiMeaning] = useState("insert emoji to check meaning");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setEmojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={emojiInputHandler} />
      <div style={{ padding: "0.5rem" }}>{meaning}</div>

      <h3>click on the emoji to check the meaning </h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
