/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  let result = new Array(temperatures).fill(0);

  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const j = stack.pop();
      result[j] = i - j;
    }
    stack.push(i);
  }
  return result;
}

/**
 * Example
 * 
 * [73,74,75,71,69,72,76,73] - [0, 0, 0, 0, 0, 0, 0, 0]
 * 
 * 
 * first iteration i = 0,   stack = [0]
 * second iteration 1 = 1,   stack is not empty, stack[0] = 0, temperature[0] = 73 < 74
 * move inside the while loop. pop the stack, j = 0
 * 
 * result[0] = 1 - 0.   [1, 0, 0, 0, 0, 0, 0, 0]
 * 
 **/ 
