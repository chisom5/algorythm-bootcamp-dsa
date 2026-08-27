# Balanced Reflection Check

## Problem

A software deployment system organizes configuration modules in a hierarchical tree structure. Each module node holds a version identifier and can branch into sub-modules on the left and right sides. A well-balanced deployment is considered stable when the entire tree reads the same from the left side as it does from the right, as if holding a mirror down the center of the root.

Given the root of a configuration tree, determine whether the hierarchy is perfectly mirrored around its central node. Two subtrees are considered mirror images when their root version identifiers match and each one's left branch mirrors the other's right branch.

Return true if the configuration tree is symmetric, and false otherwise.

Constraints

- The total number of nodes in the configuration tree is in the range [1, 1000].
- -100 <= config_root.val <= 100

### Examples

- config_root = [1,2,2,3,4,4,3] - Expected result True

- config_root = [10,5,6] - Expected result False

- config_root = [10,5,5] - Expected result True

#### Follow up

Can you implement the symmetry check both as a recursive traversal and as an iterative traversal using an explicit queue?

## Approach Plan

Two subtrees are considered mirror images when their root version identifiers match and each one's left branch mirrors the other's right branch.

comparing left and right of a subtree. 
they are consider mirror

- If both subtree are null - true
- If only one subtree is null - false
- If the value are diff - false

### Key Constraint

The constraint that matter most is "The total number of stops across both loot_route_a and loot_route_b is in the range [0, 100]." because it tell me that recursive solution is reasonable as maximum of 100 total nodes guarantees that the tree depth cannot exceed 100. with stack limit around 10,000 frames. (10^4), 100 recursive call will never trigger a maximium call stack exceed.

### Pattern

- Tree Traversal

### Complexity

- Time O(N)
- Space O(h) where h - depth of the tree.