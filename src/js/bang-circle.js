import { c } from "./html-canvas";

function BangCircle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.opacity = 1;
  this.ttl = 80;
}

BangCircle.prototype.draw = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  c.closePath();
};

BangCircle.prototype.update = function() {
  this.draw();
};

module.exports = BangCircle;



