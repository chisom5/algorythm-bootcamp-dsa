/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

function carFleet(target, position, speed) {
  let cars = [];

  for (let i of position) {
    cars.push({ position: position[i], speed: speed[i] });
  }

  cars.sort((a, b) => b.position - a.position);

  let stack = [];

  for (let i = 0; i <= cars.length; i++) {
    let timeToArrive = (target - cars[i].position) / cars[i].speed;

    if (stack.length === 0 || timeToArrive > stack[stack.length - 1]) {
      stack.push(timeToArrive);
    }
    // else the car catches up and turn to a fleet.
  }

  return stack.length;
}
