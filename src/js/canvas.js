import utils from './utils';

import { canvas, c } from './html-canvas';

import Circle from './circle';
import FixedCircle from './fixed-circle';
import BangCircle from './bang-circle';

import { backgroundGradient, colors } from './design'


canvas.width = document.getElementById('app').offsetWidth;
canvas.height = document.getElementById('app').offsetHeight;


const ball = {
    radius: 12
};

/**
 * Auto control
 */
let ticker = 0;

/**
 *
 * Fixed Circles
 */
let fixedCircles = [];
const fixedBallsCoordinates = utils.fixedCirclesCoordinates(canvas.width, canvas.height, 8);
for ( let i = 0; i < fixedBallsCoordinates.length; i++ ) {
    let newFixedCircle = new FixedCircle(
      fixedBallsCoordinates[i].x,
      fixedBallsCoordinates[i].y,
      8,
      colors.white);

    fixedCircles.push(newFixedCircle)
}


let circles = [];
function init() {
    let newCircle = new Circle(utils.randomIntFromConcreteRange( canvas.width / 2, -canvas.width/13, canvas.width/13),
      25,
      ball.radius,
      colors.darkOrange);
    circles.push(newCircle)
}


addEventListener('resize', () => {
    canvas.width = document.getElementById('app').offsetWidth;
    canvas.height = document.getElementById('app').offsetHeight;
});

document.getElementById('auto-game').addEventListener("click", automaticallyGame);
document.getElementById('manual-game').addEventListener("click", manualGame);
document.getElementById('add-ball').addEventListener("click", addBall);

let automatically = false;

/**
 * System will create new ball every ~2 second:
 */
function automaticallyGame() {
    automatically = true;
}

/**
 * Manual Game:
 */
function manualGame() {
    automatically = false;
}

/**
 * Add ball
 * It create new ball which fall down from top of canvas tag:
 */
function addBall() {
    init();
}


let bangCircle = [];

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, canvas.width, canvas.height);

    fixedCircles.forEach( item => {
        item.update();
    });

    if ( circles.length ) {
        circles.forEach( (circle, index) => {
            circle.update(fixedCircles,bangCircle);

            if( circle.radius === 0 ) {
                circles.splice(index,1);
            }
        });
    }

    if ( bangCircle.length ) {
        bangCircle.forEach( (bang, index) => {
            bang.update();

            bang.color = `rgba(255,255,255, ${bang.opacity})`;

            bang.ttl--;
            bang.radius += 0.4;
            bang.opacity -= (1 /  bang.ttl);

            if( bang.ttl === 0 ) {
                bangCircle.splice(index,1);
            }
        });
    }


    if( automatically === true ){
        ticker++;

        if( ticker %75 === 0 ) {
            init();
        }
    }


}

animate();

