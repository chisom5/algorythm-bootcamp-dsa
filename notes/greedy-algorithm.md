# Greedy Algorithm

A Greedy Algorithm we make a decision without comparing all of its alternatives. It uses a rule to make progress from the current situation.

In Greedy Alogrithm :

- State: means the information describing the current situation.

- Local Choice: means the decision made at the current step.

- Global objective: means What the entire solution must accomplish.

- Optimal solution: means A valid solution with the best possible result.

A greedy selection rule usually commits to a choice and continues with the remaining problem. It does not undo that choice to explore other branches, as backtracking would.

## From backtracking and DP to greedy

Example 1: were the goal was to make 63 cents using as few coins as possible, with coins worth 25, 10, 5, and 1 cent. More than one first coin is allowed. How should a program decide which one to use?

Backtracking, dp and greedy handles the question differently, start with the choice

- If the 25 cents is picked first, we would have 38 cents remaining with as few coins as possible.
- If 10 cents is picked first, it make the remaining 53 cents with as few coins as possible.
- If 5 cents or 1 cent is picked first, it Make the remaining 58 cents or 62 cents.

1. Backtracking: backtracking try different choices, - Choose a coin and keep choosing until you make exact change. Record the coin count, then undo choices to try other combinations. keep the smallest count found

2. DP: compare choices and remember smaller answers, - Taking 25 then 10 leaves 28 cents. Taking 10 then 25 also leaves 28 cents. Either way, the remaining task is identical. DP finds the fewest coins needed for 28 cents once and saves that answer for reuse. It still compares the totals produced by different choices.

3. Greedy: Commit to the choice selected by a rule, - With "the largest-coin rule", take 25 immediately. Continue with 38 cents remainig, using the same rule. The algorithm does not also solve the alternatives that start with 10, 5, or 1 to see which is better.

- The key difference: DP saves work by reusing answers. Greedy saves work by skipping alternatives. Before trusting a greedy rule, we must explain why the skipped alternatives cannot produce a better result.

Example 2: Suppose we are to make exactly 6 cents using as few coin as possible with coins denomination 4, 3, and 1 cents.

- Greedy rule skip that comparison:

The Largest coin first approach, which is selecting 4 cents, makes the largest immediate reduction, but the remaining 2 cents require two more coins(4 + 1 + 1 = 6). Choosing 3 first leaves a remainder that one coin can pay (3 + 3 = 6). Our goal is the fewest coins, not the largest total value—we must make exactly 6 cents.

It never compares that result with the option starting with 3. The problem is that leaving less money to pay does not always mean needing fewer coins to pay it.

- Dp compares the total cost of each first choice-Imagine we have already worked out the fewest coins needed for every smaller amount. Now we can look up those answers. For each possible first coin, count that one coin plus the coins needed for the amount left over.

### How the decisions become a loop

From the example of largest-coin rule.

- Choose an order : inspect denominations from largest to smallest
- Track the current state: Keep the amount still owed and the selected coins.
- Check and update: If a coin fits, subtract its value and record it.
- Continue.

The written steps would be

1. Sort the denominations from largest to smallest.
2. For each denomination, repeatedly take it while it is no larger than the remaining amount.
3. After each choice, subtract its value and increase the coin count.
4. Return the count if no amount remains; otherwise report that this procedure did not form exact change

```js
function greedyCoins(coins, amount) {
  coins.sort((a, b) => b - a);

  let count = 0;
  let used = [];

  for (const coin of coins) {
    while (amount >= coin) {
      count++;
      amount -= coin;
      used.push(coin);
    }
  }

  return amount === 0 ? count : -1;
}
```

result - used =[ 4, 1, 1 ] and. count = 3. which is not the optimal solution.

N.B Other greedy algorithms use different orders and state. Some need no sorting at all. there is no universal template for it

- Jump Game

Ques: Start at index 0 of a nonempty array nums. Each value gives the maximum number of positions you may move forward from that index. Decide whether you can reach the last index. e.g nums = [2, 3, 1, 1, 4].

Ans: If you can reach the destination when starting there. The boolean entry stores that answer, it doesn't mean that i is reachable from index 0.

| Index       | 0   | 1   | 2   | 3   | 4   |
| ----------- | --- | --- | --- | --- | --- |
| nums[i]     | 2   | 3   | 1   | 1   | 4   |
| i + nums[i] | 2   | 4   | 3   | 4   | 8   |
| maxReach    | 2   | 4   | 4   | 4   | 8   |

Mathematical relationship --> maxReach = max(maxReach, i + nums[i]);

Compute from the start index 0, we iterate and determine if we can reach the current index, i.e if current index is greater than maxReach, then we have gotten to a position we can't get pass.

base case is the answer that needs no smaller subproblem: nums[i] = 0

1. Dynamic Programming

```js
function canJump(nums) {
  let n = nums.length;
  let dp = Array(n).fill(false);

  // base case
  dp[0] = true;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // can we reach index j and j jump to i
      if (dp[j] && j + nums[j] >= i) {
        dp[j] = true;
        break;
      }
    }
  }

  return dp[n - 1];
}
```
The DP runs in O(n^2) time and space O(n)

2. Greedy pattern

Forward Greddy
```js
function canJump(nums) {
  let max_Reach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > max_Reach) {
      return false;
    }
    max_Reach = Math.max(max_Reach, i + nums[i]);
  }

  return true;
}
```
Runs in O(n) time and space O(1)

Backward Greedy

```js
function cnaJump(nums){
  let goal = nums.length - 1; // index position of the last item

  for(let i = nums.length - 2; i >= 0; i-- ){
    if(i + nums[i] >= goal){
      goal = i;
    }
  }

  return goal === 0;
}
```