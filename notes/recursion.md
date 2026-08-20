# Recursion

Recursion - is solving a problem by breaking it into smaller instances of the same problem. 
Every recursion has a base case (i.e a stopping condition) and a recursive call (i.e the function that call itself). 
leading to time complexity for best case scenario is O(2^n)

## when to use Recursion

- use recursion when the problem can be split into smaller versions of the same problem.
- The answer is built from results returned by smaller branches
- when a natural stopping condition exist for the smallest input.
- You need to process a hierarchical structure level by level through its children

### Common mistakes

- missing the base case
- Forgetting to return or combine the result from the recursive call.
- letting recursion continue past the stopping condition.

### signal word.
- divide & conquer
- backtracking
- depth.

### General process in recursion.

1. Base case - what's the smallest or simplest input where i already know the answer with no computation at all.
2. Recursive case - How can I express the answer in terms of the answer to a strictly smaller version of the same problem?
3. Shrinking check - Does every recursive call move toward the base case?
4. Combine step - What do i do with the answer from the recursive call?

### When Recursion is a better choice.

If recursion only did what a loop already does, there would be little reason to use it. because the loop is simpler and with 
O(1) space which beats O(n) space. 
Recursion is worth its cost when the data itself is nested or self-similar, so that "the rest of the problem" looks like a smaller copy of the whole problem.

- Divide and conquer 
(binary search, merge sort) Each step shrinks the problem by a factor rather than by one element, which is where O(log n) comes from.

- Try everything, then back out.
Permutations, combinations, maze solving and Sudoku: explore a branch, undo it, try the next.

- Already-recursive definitions
When the definition of the problem hands you the structure.


## Memoization: storing answers as you get them.

To avoid repeating some operation we write every answer as we get them and before doing any work
we check if we have this before.

Recursion plus stored answers is what we call dynamic programming. it amount to recursion that 
doesn't solve the same sub problem twice.

### When to use it.

- Any time a recursive function makes more than one recursive call, 
ask whether two different paths can land on an identical input.

* If two different paths can ask the same question. then we consider memoization.