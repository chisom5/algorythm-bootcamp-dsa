# Dynamic Programming I

Dynamic Programming is an algorithmic technique used to solve complex problems by breaking them down into smaller, overlapping subproblems, solving each subproblem only once, and storing their solutions to avoid redundant work.

We will explore the learning from recursion, the call stack, and depth first search (DFS) to explore possible solutions to a problem. We will also learn how to optimize our recursive solutions using memoization and tabulation techniques.

N.B : Backtracking itself is not dynamic programming. Memoization helps when repeated calls ask the same well-defined subproblem; it does not remove the cost of writing every answer a problem requires.

- What we carries from DFS

A call enters one state, explores a child completely, and then returns to try another child. The call stack records the active chain of calls and where each caller will resume. A recursion tree is a drawing of these calls and their parent-child relationships. We do not need to implement a separate tree data structure.

- What to learn from dynamic programming

By the end of Lecture 1, you should be able to explain a backtracking solution before writing its code. Your explanation should specify what one call explores, how it stops, and why every required answer is produced exactly once.

1. model the choices:
   Identify the partial solution, the allowed next decisions, and the information each call needs. Explain the root, a branch, and a completed answer in a small decision tree.

2. Write and trace the search:
   Use base cases and choose, explore, undo. Predict which line runs after a recursive call returns and which changes belong to the current call rather than its children.

3. Control the search:
   Distinguish subsets, permutations, and combinations by whether order matters and whether an input item can be reused. Prevent duplicate answers and justify why an unsuccessful branch can be skipped.

4. Analyze and adapt
   Count the work done by calls, candidate checks, and answer copies. Separate working memory from stored output, then adapt an enumerating search to count solutions or find the best value.

## Practical use of Backtracking

Backtracking applies when a solution is built from choices that must satisfy constraints. A constraint is a rule that every valid answer must obey.

### Applying DFS Pattern to Backtracking

Backtracking is simply a DFS with a tracking condition. It is a systematic way to iterate through all the possible configurations of a search space. It is used to solve problems that can be represented as a tree of choices, where each node represents a partial solution and each edge represents a choice that leads to a new partial solution.

### Subset

- Choose, Explore and Undo

For each permitted choice, update the working state, recursively explore the resulting state, and restore the update.

```js
// Inside backtracking loop:
path.push(choice); // choose
backtrack(nextState); // explore
path.pop(); // undo
```

Each call restore it changes it's own.

e.g The shared path is [1, 2]. Arrange the next four actions to record [1,2] and then [1] in the take/skip search.

Ans: The steps:

1. Record a copy: [1,2] // result or snapshot
2. Remove 2; path becomes [1] // choice
3. Explore the branch that skips 2 // explore
4. Record a copy: [1]. // undo (pop)

nums = [1,2,3];

```js
function subsets(nums) {
  nums = [...nums];
  const results = [];
  const path = [];
  function backtrack(i) {
    if (i === nums.length) {
      results.push([...path]);
      return;
    }
    path.push(nums[i]);
    backtrack(i + 1);
    path.pop();
    backtrack(i + 1);
    return;
  }
  backtrack(0);
  return results;
}
```

- Start-Index formulation

To generate every subset of the distinct values in [1,2,3], using the start-index formulation, we enforce a forward-only search pattern.

Once an element at index i is chosen, all future choices must come from index i + 1 onward.

The start_index parameter prevents backward choices (e.g., picking 2 then 1), which would create duplicate combinations like [1, 2] and [2, 1].
for subset [1, 2] is same as [2, 1].

```js
function subsets(nums) {
  nums = [...nums];
  const results = [];
  const path = [];
  function backtrack(start) {
    results.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); //choice
      backtrack(i + 1); // recurse with i + 1
      path.pop(); // undo choice.
    }
    return;
  }
  backtrack(0);
  return results;
}
```

Both algorithms generate the same mathematical set of subsets. They organize the recursive calls differently and therefore record answers in different orders. but order doesn't matter as long as the answer is correct.

- Time & Space Complexity :

Time O(N \* 2^N) where Copying each path into the result list takes O(N) time. and 2^N total subsets for a set of size N.

Space - O(N * 2^N), O(N) is the recursion call stack reaches a maximuim depth N. and 2*N the two possible valid subsets

### Permutation

Permutation is an arrangement containing every input element exactly once. it preserve order, changing the order result to different answer: [1,2,3] and [2,1,3] are different permutations.

Permutation track used positions. it uses a "used" boolean array or a Set, to keep track of element currently in the path.

```js
function permutations(nums) {
  nums = [...nums];
  const results = [];
  const path = [];
  const used = Array(nums.length).fill(false);

  function backtrack() {
    if (path.length === nums.length) {
      results.push([...path]);
      return;
    }
    // loop through all indices
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }

      //   make choice
      used[i] = true;
      path.push(nums[i]);

      // recurse
      backtrack();

      //   undo
      path.pop();
      used[i] = false;
    }
    return;
  }
  backtrack();
  return results;
}
```

- Time and Space Complexity:

Time O(N \* N!) where O(N) is for copying each path into the result and N! is for the total permutation.

Space O(N \* N!) - O(N) is the recursion call stack reach a maximium depth and O(N!) the total permutation

### Combination

Combination is a subset with a fixed length. just like Subset order doesn't matter,so we use start_index to move strictly forward and prevent duplicate groups. with Combination we only collect solutions only when a specific constraint is met (such as a fixed length k or a target sum), rather than recording every intermediate state.

```js
function combination(n, k) {
  const result = [];

  function backtrack(start, path) {
      if(path.length === k){
            result.push([...path])
            return;
        }

        // loop starting from start
        for(let i = start, i <= n; i ++){

            // make choice
            path.push(i);
            // recurse
            backtrack(i + 1, path);
            // undo
            path.pop();
        }
  }
  backtrack(0, []);
  return result;
}
```

#### Pruning

Pruning is knowing when to stop. A prune is a logical condition, not a prediction that a branch will probably fail.

It changes how much of the search is explored while preserving the result.

using pruning on Combination.

```js
function combine(n, k) {
  const results = [];
  const path = [];

  function backtrack(start) {
    if (path.length === k) {
      results.push([...path]);
      return;
    }
    const need = k - path.length;
    for (let i = start; i <= n - need + 1; i++) {
      path.push(i);
      backtrack(i + 1);
      path.pop();
    }
    return;
  }

  backtrack(1);
  return results;
}
```

#### Combination Sum

An array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times.

- Decreasing State tracking

```js
function combination_sum(candidates, target) {
  candidates = [...candidates];
  candidates.sort((a, b) => a - b);
  const results = [];
  const path = [];

  function backtrack(start, remaining) {
    if (remaining === 0) {
      results.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remaining) {
        break;
      }
      path.push(candidates[i]);
      backtrack(i, remaining - candidates[i]);
      path.pop();
    }
    return;
  }
  backtrack(0, target);
  return results;
}
```

- Increasing State tracking

```js
function combination_sum(candidates, target) {
  candidates = [...candidates];
  candidates.sort((a, b) => a - b);
  const results = [];

  function dfs(path, start, count) {
    if (count > target) return;

    if (count === target) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      dfs(path, i, count + candidates[i]);
      path.pop();
    }
  }
  dfs([], 0, 0);
  return result;
}
```

Here candidate values can be reuse, and it doesn't contain duplicate. e.g candidates =[2,3,6,7] target = 7

#### Change What Search return

A recursive search can list solutions, count them, find a best value, or decide whether any exist. The choices may be the same, but the information produced by a completed branch and the way child results are combined must match the question.

- Generate, Count, Minimize

Suppose a search has two successful completions using three items and one item. A generator returns both paths. A counter adds their contributions, 1 + 1 = 2. A minimum-item solver returns min(3,1) = 1. An existence solver may return true as soon as either completion is found.

- Count : The path which is the subset will be unneccessary because the return value summarizes the completions.

```js
function count(start, remaining) {
  if (remaining === 0) return 1;
  let total = 0;
  for (let i = start; i < candidates.length; i++) {
    if (candidates[i] > remaining) break;
    total += count(i, remaining - candidates[i]);
  }
  return total;
}
```

- Minimize:

```js
function minimize(start, remaining) {
  // Base case: successfully reached the target with 0 extra steps
  if (remaining === 0) return 0;

  let minCount = Infinity; // Initialize to infinity so any valid count is smaller

  for (let i = start; i < candidates.length; i++) {
    if (candidates[i] > remaining) break;

    // Recurse to find the min count for the sub-problem
    let res = minimize(i, remaining - candidates[i]);

    // If the recursive branch found a valid solution (not Infinity)
    if (res !== Infinity) {
      // Take the minimum between current min and (sub-result + 1 for current choice)
      minCount = Math.min(minCount, res + 1);
    }
  }

  return minCount;
}
```

#### Recursive Search is a useful starting point

Backtracking is a useful starting point when a solution is built through a sequence of choices and the problem asks for many distinct results or imposes constraints on partial choices.

The backtracking method is natural when the required output itself is large.

Signal | What to investigate

- “Return every subset / arrangement / partition” : What one choice is and how to avoid duplicate answers.

- "Count or optimize over many repeated choices". : Whether identical subproblems occur and can be memoized.

- "A small number of independent decisions". : The size of the resulting search tree and output.

- “Such that no two…” or another validity rule". : Whether invalid partial solutions can be rejected early.

#### Memoization and top-down dynamic programming

In Backtracking we describe a problem as a sequence of choices, wrote recursive calls for the remaining work, and restored shared state when a branch finished. That gives us a correct search. It does not always give us an efficient one.

Different branches may ask for the answer to the same remaining problem. But with Memoization we stores that answer so a later call can reuse it. Top-down dynamic programming uses this approach with a recurrence: a rule that combines answers to smaller states.

- Overlapping subproblems: Occurs when a recursive computation requests the same subproblem more than once.

When we trace fibonacci without a cache: we would notice that there are alot of repeated work. 

```js
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let left = fibonacci(n - 1);
  let right = fibonacci(n - 2);
  return left + right;
}
```
fibonacci(5) - calls fibonacci(4) and fibonacci(3)
fibonacci(4) - calls fibonacci(3) and fibonacci(2)

We can see that fibonacci(3) is computed twice.  when we spot overlapping subproblems, you can eliminate redundant calculations using one of two strategies:

1. Top-Down with Memoization: here we keep a cache to store the result of a subproblem the first time we compute it. If we encounter the same subproblem again, we instantly return the cached answer instead of recalculating.

2. Bottom-Up with Tabulation: it means we iteratively build up the solution from the smallest subproblems(the base case) to the target, storing result in an array or table so larger problems can look them up instantly.
