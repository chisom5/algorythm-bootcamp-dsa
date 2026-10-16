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

- Time & Space Complexity : Time O(N \* 2^N) where Copying each path into the result list takes O(N) time. and 2^N total subsets for a set of size N.

Space - O(N) for the recursion call stack reaches a maximuim depth N.

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

- Time and Space Complexity: Time O(N \* N !) where O(N) is for copying each path into the result and N! is for the total permutation.

Space O(N) - the recursion call stack reach a maximium depth

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

### Pruning

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
