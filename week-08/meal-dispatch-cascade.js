/**
 * @param {number[][]} grid
 * @returns {number}
 *
 * 0 - empty cell
 * 1 - fresh meal
 * 2 - order already assign
 */
function orangesRotting(grid) {
  const rows = grid.length,
    cols = grid[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const queue = [];
  let freshMeal = 0;

  //   multi-source initialization
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c, 0]);
      } else if (grid[r][c] === 1) {
        freshMeal++;
      }
    }
  }

  let minutes = 0;
  let head = 0;

  //   perform bfs
  while (head < queue.length) {
    const [r, c, d] = queue[head++];
    minutes = d;

    // traverse through it's neighbours
    for (let [dr, dc] of directions) {
      const newR = dr + r,
        newC = dc + c;

      // boundary check
      if (newR >= 0 && newR < rows && newC >= 0 && newC < cols) {
        if (grid[newR][newC] === 1) {
          grid[newR][newC] = 2;
          freshMeal--;
          queue.push([newR, newC, d + 1]);
        }
      }
    }
  }

  //  check if there's remaining meal order;
  return freshMeal === 0 ? minutes : -1;
}
