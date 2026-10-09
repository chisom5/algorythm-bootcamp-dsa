function oranges_rotting(grid) {
  const row = grid.length;
  const cols = grid[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // 4 directions (up, down, left, right)

  const queue = [];
  let freshCount = 0;

  // multi-source initializing queue
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      } else if (grid[i][j] === 1) {
        freshCount++;
      }
    }
  }

  // if there are no fresh orange to begin
  if (freshCount === 0) return 0;

  //   perform bfs for shortest path
  let minuteElapsed = 0;
  let head = 0;

  while (head < queue.length) {
    const [r, c, d] = queue[head++];

    minuteElapsed = d;

    for (let [dr, dc] of directions) {
      let newR = dr + r;
      let newC = dc + c;

      // boundary check
      if (newR >= 0 && newR < row && newC >= 0 && newC < cols) {
        if (grid[newR][newC] === 1) {
          freshCount--;
          grid[newR][newC] = 2;
          queue.push([newR, newC, d + 1]);
        }
      }
    }
  }
  return freshCount === 0 ? minuteElapsed : -1;
}
