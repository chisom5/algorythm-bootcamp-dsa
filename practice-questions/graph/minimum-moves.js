/**
 * @param {number[]} start
 * @param {number[]} target
 * @returns {number}
 */
function minKnightMoves(start, target) {
  const [startRow, startCol] = start;
  const [targetRow, targetCol] = target;

  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const queue = [[startRow, startCol, d]];
  let front = 0;

  const visited = new Array(8).fill(false);

  visited[startRow][startCol] = true;

  while (front < queue.length) {
    let [r, c, d] = queue[front++];

    if (r === targetRow && c === targetCol) return d;

    for (let [dr, dc] of directions) {
      const newR = r + dr;
      const newC = c + dc;

      if (newR >= 0 && newR < 8 && newC >= 0 && newC < 8) {
        if (!visited[newR][newC]) {
          visited[newR][newC] = true;
          queue.push([newR, newC, d + 1]);
        }
      }
    }
  }
  return -1; // or false;
}
