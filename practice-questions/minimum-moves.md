# Minimum Knight Moves

## Problem

In a standard game of chess played on an 8 x 8 chessboard, a Knight moves in an 'L' shape: two squares in one direction and one square perpendicular, or one square in one direction and two squares perpendicular.

Formally, from any cell (row, col), a knight can move to any of the following 8 reachable target positions:

- (row + 2, col + 1)

- (row + 2, col - 1)

- (row - 2, col + 1)

- (row - 2, col - 1)

- (row + 1, col + 2)

- (row + 1, col - 2)

- (row - 1, col + 2)

- (row - 1, col - 2)

Given two integer arrays start = [startRow, startCol] and target = [targetRow, targetCol] representing 0-indexed position coordinates on an 8 x 8 chessboard, return the minimum number of moves required for the knight to reach the target position.

If the target position is unreachable, return -1.

Constraints

- start.length == 2, target.length == 2

- 0 <= startRow, startCol, targetRow, targetCol < 8

### Examples

- Input: start = [0, 0], target = [7, 7]  -> Output: 6
Explanation: One shortest path sequence of 6 moves is:
(0, 0) -> (2, 1) -> (4, 2) -> (6, 3) -> (7, 5) -> (5, 6) -> (7, 7)

- Input: start = [0, 0], target = [2, 1]  -> Output: 1
Explanation: The knight can move directly from (0, 0) to (2, 1) in 1 move.