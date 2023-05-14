import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
const data = [
  {
    clipLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    clipId: "Heater-1",
    keyPressed: "Q"
  },
  {
    clipLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    clipId: "Heater-2",
    keyPressed: "W"
  },
  {
    clipLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    clipId: "Heater-3",
    keyPressed: "E"
  },
  {
    clipLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    clipId: "Heater-4",
    keyPressed: "A"
  },
  {
    clipLink: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    clipId: "Heater-6",
    keyPressed: "S"
  },
  {
    clipLink: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    clipId: "Dsc_Oh",
    keyPressed: "D"
  },
  {
    clipLink: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    clipId: "Kick_n_Hat",
    keyPressed: "Z"
  },
  {
    clipLink: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    clipId: "RP4_KICK_1",
    keyPressed: "X"
  },
  {
    clipLink: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    clipId: "Cev_H2",
    keyPressed: "C"
  }
];
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App data={data} />
  </StrictMode>
);
