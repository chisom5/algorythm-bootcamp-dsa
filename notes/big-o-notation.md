# Big O notation

Is a term use in computer science to decribe the worst-case scenarioof an algorithm complexity in terms of the input size. it provide a way to describe how an algorithm's performance scales as the input size grows.

## Why Big O

- It helps compare algorithms to know which one handle large inputs better.
- It helps predict performance. to know which one will scale as data grows.
- It helps be smart about meemory or CPU storage.
- It helps to pick the right tools and data structure.

### Time complexity & Space complexity.

Time complexity tells you how the number of steps in your algorithm grows with input size. it shows how the work grows as the input grows. e.g doubling the input might double the work O(n) or the work remain constant. as O(1) etc.

Space complexity - is how much memory your alogrithm needs to run.
space complexity = input space + extra spaces. (any extra space variable, data structure or recursive call).

## Different Time complexity.

- Constant time O(1) - Fixed time, mean it performs a fixed number of operations. here the time doesn't depend on the input size even when double.
  e.g Touching a fixed number of elements.

input = [7, 12, 3, 4, 5, 8, 11, 9, 2, 1, 10, 6 ] but we are to read the first 3 values.
which is 7,12,3. the operation will be O(1). input[0], input[1], input[2]

- Linear time O(n) - Is achieve when the running time grows with the length of the input. If the input doubles the number of operations also doubles.

the pattern here is when an algorithm has to look at each element at least once whelther it's an array, linked list, a tree etc. then most of the time it consider as a linear time.
it is our single for loop. even if you loop through half of the list it is still a linear time because Big O ignore constant factor. n/2 - is simplify as n. likewise 2n or 3n is n.

- Logarithmic Time O(logn) - as input grows the number of operations half. binary search is an example of this. it takes a sorted list and halve the operation on every iteration.

same thing for a balanced binary search tree O(logn). every node's left subtree holds smaller values and its right subtree holds larger values. That ordering means every comparison lets you discard an entire subtree. Each comparison moves you down exactly one level, so the total comparisons can never exceed the tree's height.

N.B - Skeweed tree - lost it's branching factor hence it will be degenerate into a singlt linked list and the time complexity is O(n). but the best case here is if we are searching for an item in the root. then it will be O(1)

- Quadratic time O(n^2) - The operation grows to the square of the input size. it is seen in nested for loop. meaning for each element you iterate over all the other elements.

they are fine in performance for small input size but becomes slow as the input size grows.

N.B - if we have nested for loop but with different array input then it is O(m * n) not
O(n^2) also two nested for loop doesn't automatically mean time complexity is O(n^2). what matter is how many times the innermost loop runs. if the inner loop runs in constant time then our algorithm time complexity for such nested for loop is O(n).

- other time complexity such as factorial time O(n!), exponential time O(2^n) etc.

## Different Space complexity

- Constant space O(1) - Means a fixed amount of memory regardless of the input size. - here no additional amount of memory is allocated that grows with the input.
  e.g given an input = [7, 12, 8, 7, 4] n = 5 then we iterate to log out the element.
  here our time complexity - O(n) and space is O(1).

- Linear Space O(n) - here if the input doubles the space use also double. e.g let say we iterate over an array list and we want to reverse it. input = [7, 12, 8, 10, 4] -> [4, 10, 8, 12, 7 ]
meaning we created an extra array to store the reverse items. making our space complexity as O(n).

- Quadratic Space O(n^2) - here memeory grows as the square of the input. so if the input doubles the space quadruple.

- we also have other space complexity such as exponential O(2^n) etc.


## Common data structures

| Structure | Access | Search | Insert | Delete | Space |
| ---       | ---    | ---    | ---    | ---    | ---   |
| Array     | O(1) | O(n) | O(n) | O(n) | O(n) |
| Linked list | O(n) | O(n) | O(1) | O(1) | O(n) |
| Stack | O(n) | O(n) | O(1) | O(1) | O(n) |
| Queue | O(n) | O(n) | O(1) | O(1) | O(n) |
| Hash table | O(1) | O(1) | O(1) | O(1) | O(n) |
| Tree — BST (average case) | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| Tree — BST (worst case, unbalanced) | O(n) | O(n) | O(n) | O(n) | O(n) |
| Graph (adjacency list) | Add vertex: O(1); add edge: O(1) | DFS/BFS: O(V + E) | O(V + E) | O(V + E) | O(V + E) |
