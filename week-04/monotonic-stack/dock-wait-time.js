function nextWarmerShift(readings) {
  let ans = new Array(readings).fill(0);

  let stack = [];

  for (let i = 0; i < readings; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] < readings[i]) {
      let j = stack.pop();

      ans[j] = i - j;
    }
    stack.push(i)
  }

  return ans;
}
