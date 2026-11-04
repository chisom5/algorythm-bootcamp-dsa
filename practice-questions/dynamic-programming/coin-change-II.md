# Coin Change II

## Problem Statement

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The final answer is guaranteed to fit into a signed 32-bit integer.

Constraints

- 1 <= coins.length <= 300
- 1 <= coins[i] <= 5000
- All the values of coins are unique.
- 0 <= amount <= 5000

### Examples

- Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

- Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

## Approach Plan

From the constraints, we can see that the maximum amount is 5000 and the maximum number of coins is 300. This means that we can use backtracking to find all the combinations of coins that sum up to the target amount. However, this approach will be inefficient for larger inputs.

#### Key Constraints:

The constraint that matter most is "You may assume that you have an infinite number of each kind of coin." This means that we can use the same coin multiple times in our combinations.

#### Pattern 

- Dynamic Programming, Backtracking.

#### Complexity

- Time O(n * m) where n is the amount and m is the number of coins.

- Space O(n) where n is the amount.
