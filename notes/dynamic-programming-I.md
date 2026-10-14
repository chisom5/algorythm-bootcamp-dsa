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

- Choose, Explore and Undo

For each permitted choice, update the working state, recursively explore the resulting state, and restore the update. 

```js
// Inside backtracking loop:
path.push(choice);           // choose
backtrack(nextState);        // explore
path.pop();                  // undo

```
Each call restore it changes it's own.

e.g The shared path is [1, 2]. Arrange the next four actions to record [1,2] and then [1] in the take/skip search.

Ans: The steps: 
1. Record a copy: [1,2]  // result or snapshot
2. Remove 2; path becomes [1]  // choice
3. Explore the branch that skips 2  // explore
4. Record a copy: [1].    // undo (pop)