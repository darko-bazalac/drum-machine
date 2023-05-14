import "./styles.css";
import { useState } from "react";

export default function App(props) {
  const [text, setText] = useState("");

  const handleClick = (e) => {
    setText(e.target.id);
    e.target.firstElementChild.play();
  };
  const handleKeyPress = (e) => {
    setText(e.target.id);
    console.log(e.key);
    e.target.firstElementChild.play();
  };

  return (
    <div id="drum-machine">
      <div id="display">{text}</div>
      {props.data.map((key) => {
        return (
          <button
            className="drum-pad"
            key={key.clipId}
            id={key.clipId}
            onClick={handleClick}
            onKeyDown={handleKeyPress}
          >
            {key.keyPressed}
            <audio
              src={key.clipLink}
              className="clip"
              id={key.keyPressed}
            ></audio>
          </button>
        );
      })}
    </div>
  );
}
