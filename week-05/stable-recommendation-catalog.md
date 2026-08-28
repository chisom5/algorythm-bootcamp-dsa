# Stable Recommendation Catalog

## Problem

An e-commerce platform organizes product recommendations as a branching catalog, where each item can lead to a left and right follow-up suggestion. Shoppers get a smoother experience when no branch of the catalog becomes dramatically deeper than its sibling branch.

Given the top product of this recommendation catalog, determine whether the overall structure is stable. A catalog is considered stable when, for every product in the structure, the depth of its left suggestion chain and right suggestion chain differ by no more than one.

An empty catalog should still be treated as stable.

Constraints

- The number of products in catalog_root is in the range [0, 5000]
- Each product value is in the range [-10^4, 10^4]

### Examples

- catalog_root = [1, 2, 2, 3, 4, 4, 3] - Expected result True

- catalog_root = [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, None, None, 5, 5]  - Expected result True

#### Follow up 

Can you determine stability while measuring each product's branch depth only once?

## Approach Plan

### Key constraint

The constraint that matter most is "The number of products in catalog_root is in the range [0, 5000]" because the total number of nodes determines the maximum possible height of the tree and it dictate that we can get the solution on a single pass. O(N)

### Pattern

- Time O(N)

- Space O(H)

### Step

To verify that the binary tree is height balanced across all node.

We use a Bottom-Up Post-Order DFS approach with a -1 sentinel flag:

- Base Case: An empty node (null) has a depth of 0.

- Recursive Case: Compute the height of the left and right subtrees.

- Early Exit (-1): If the left or right subtree returns -1 (unbalanced), or if Math.abs(leftDepth - rightDepth) > 1, return -1 to pass the imbalance signal up immediately.

- Valid Height: Otherwise, return 1 + Math.max(leftDepth, rightDepth).