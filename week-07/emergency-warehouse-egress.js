/**
 * @param {number[][]} grid
 * @returns {number}
 */
function shortestPathBinaryMatrix(grid) {
  const row = grid.length;
  const cols = grid[0].length;

  if (grid[0][0] === 1 || grid[row - 1][cols - 1] === 1) return -1;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const queue = [[0, 0, 1]];
  let front = 0;

  grid[0][0] = 1; // visited mark

  // bfs
  while (front < queue.length) {
    const [r, c, d] = queue[front++];

    if (r === row - 1 && c === cols - 1) return d;

    for (let [dr, dc] of directions) {
      const newR = r + dr;
      const newC = c + dc;

      if (newR >= 0 && newR < row && newC >= 0 && newC < cols) {
        if (grid[newR][newC] === 0) {
          grid[newR][newC] = 1;
          queue.push([newR, newC, d + 1]);
        }
      }
    }
  }

  return -1;
}
