# Budget-Matching Execution Path

## Problem

A software deployment system models its execution flow as a branching decision tree. Each node in the tree represents a processing step with an associated cost (which can be negative if a step reclaims resources). Execution always begins at the root node and terminates only when a leaf node is reached, meaning a node with no further branches.

Your task is to determine whether any complete execution path from the root down to a leaf has a total accumulated cost that exactly matches a given budget target. Partial paths ending at intermediate nodes do not count, only paths that run all the way through to a terminal step.

Return true if such a path exists, and false otherwise. If the deployment tree is empty, no paths exist.

Constraints

- The number of nodes in the execution tree is in the range [0, 5000]
- -1000 <= node cost <= 1000
- -1000 <= budget_target <= 1000

### Examples

- exec_root = [1,2,3], budget_target = 5 - Expected result False

- exec_root = [10, -5, 3], budget_target = 5 - Expected result True

## Approach Plan

From the problem detail. "determine whether any complete execution path from the root down to a leaf has a total accumulated cost that exactly matches a given budget target." - signify that we are expected to check if there is a path in the tree when sum will result to the budget target.

### Pattern

- DFS, (Post-order flow)

### Complexity

- Time O(N)
- Space O(H)

### Steps

- Handle Empty Tree (Base Case 1):
  - If exec_root is null, return false immediately (an empty tree has no paths).

- Subtract Current Node Cost

- Check Leaf Condition (Base Case 2):
  - Check if the current node is a leaf (i.e., !exec_root.left && !exec_root.right).

  - If it is a leaf, check if the remaining budget_target === 0. If true, return true; otherwise, return false.

- Recursively Explore Sub Branches (DFS):
  - If the current node is not a leaf, recursively call hasMatchingPathCost on the left child (exec_root.left) and right child (exec_root.right) using the updated budget_target.

- Combine Results:
  - Return true if either the left subtree path OR the right subtree path returns true (using logical ||).
