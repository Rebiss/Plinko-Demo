import { canvas, c} from './html-canvas';
import { distance, resolveCollision } from './utils';
import BangCircle from './bang-circle';

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = {
    x: 0,
    y: 5
  };
  this.mass = 1;
  this.gravity = 1;
  this.friction = 0.8;
}

Circle.prototype.draw = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  c.closePath();
};

Circle.prototype.update = function(fixedCircles,bangCircle) {
  this.draw();

  if(this.y + this.radius + this.velocity.y > canvas.height) {
    this.radius = 0;
    this.y = 20;

    /**
     * where the ball leaves
     */
    console.log('x - > ', this.x);
  }


  for (let i = 0; i < fixedCircles.length; i++ ) {
    let change = distance(
      this.x + this.velocity.x,
      this.y + this.velocity.y,
      fixedCircles[i].x,
      fixedCircles[i].y
    );

    if( change - this.radius - fixedCircles[i].radius < 0 ) {
      bangCircle.push(new BangCircle(fixedCircles[i].x,fixedCircles[i].y,0,'white'));

      resolveCollision(this, fixedCircles[i]);
    }
  }

  if( this.velocity.y < 0) {
    this.velocity.y = -this.velocity.y
  } else {
    this.velocity.y += 0.2
  }

  this.y += this.velocity.y;
  this.x += this.velocity.x;

};


module.exports = Circle;
