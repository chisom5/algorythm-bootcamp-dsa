/**
 * @param {string[][]} grid
 * @returns {number}
 */
function numIslands(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let count = 0;

  //   scan every cell
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        //unvisited "1"
      if (grid[r][c] === "1") {
        count++;
        
        //   bfs
        grid[r][c] = "0"; //  mark starting cell

        let front = 0;
        let queue = [[r, c]];

        while (front < queue.length) {
          let [currentR, currentC] = queue[front++];

          for (let [dr, dc] of directions) {
            const newR = currentR + dr;
            const newC = currentC + dc;

            if (newR >= 0 && newR < rows && newC >= 0 && newC < cols) {
              if (grid[newR][newC] === "1") {
                grid[newR][newC] = "0"; // mark visited
                queue.push([newR, newC]);
              }
            }
          }
        }
      }
    }
  }

  return count;
}
