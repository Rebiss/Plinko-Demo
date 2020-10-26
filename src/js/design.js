import { c, canvas } from "./html-canvas";

const backgroundGradient = c.createLinearGradient(0,0,0,canvas.height);
backgroundGradient.addColorStop(0,'#171e26');
backgroundGradient.addColorStop(1,'#1a3541');

const colors = {
  darkOrange: '#FF8C00',
  coral: '#FF7F50',
  white: '#ffffff'
};

module.exports = {
  backgroundGradient,
  colors
};
