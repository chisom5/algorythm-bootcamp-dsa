function isLogConsistent(activityLog) {
  const pairs = { ")": "(", "]": "[", "}": "{" };
  let stack = [];

  for (let ch of activityLog) {
    if (!(ch in pairs)) {
      stack.push(ch);
    } else {
      // if stack is empty
      if (stack.length === 0) {
        return false;
      }
      // if what's in stack doesn't match pairs
      if (stack[stack.length - 1] !== pairs[ch]) {
        return false;
      }

      stack.pop();
    }
  }
  return stack.length === 0;
}
