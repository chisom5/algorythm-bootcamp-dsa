/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @returns {number[][]}
 */
function floodFill(image, sr, sc, color) {
  const rows = image.length;
  const cols = image[0].length;
  const stack = [[sr, sc]];

  const originalColor = image[sr][sc]; // save starting cell original label
  image[sr][sc]; //visited mark

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // up, down, left, right;

  if (originalColor === color) {
    return image;
  }

  while (stack.length) {
    const [r, c] = stack.pop();

    for (let [dr, dc] of directions) {
      const newR = r + dr;
      const newC = c + dc;

      // boundary check
      if (newR >= 0 && newR < rows && newC >= 0 && newC < cols) {
        if (image[newR][newC] === originalColor) {
          image[newR][newC] = color;  // visited mark
          stack.push([newR, newC]);
        }
      }
    }
  }

  return image;
}
