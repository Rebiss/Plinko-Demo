import { c } from "./html-canvas";

function FixedCircle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x: 0,
    y: 0
  };
  this.mass = 1;
}

FixedCircle.prototype.draw = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  c.closePath();
};

FixedCircle.prototype.update = function() {
  this.draw();
};

module.exports = FixedCircle;



