// recursively
function fib(n) {
  // base cases: 0 and 1
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// iteratively
function fib(n) {
  let current, a = 1, b = 0;

  let i = 2;
  //base case
  if (n < 2) {
    return n;
  }

  while (i <= n) {
    current = a + b;

    b = a;
    a = current;

    i++;
  }

  return current;
}
