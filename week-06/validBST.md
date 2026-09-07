# Dispatch Corridor Compliance Check

## Problem

Each dispatch corridor is modeled as a binary tree of checkpoint priorities. Inspect root and determine whether the corridor is a valid binary search tree. Every priority in a left branch must be smaller than its ancestor, every priority in a right branch must be larger, and both branches must satisfy the same rule.

Constraints

- Inputs satisfy the stated method contract.
- Use the supplied structure without changing its representation.

### Examples

- root = [1, None, 1] - Expected result False

- root = [3, 1, 5, 0, 2, 4, 6] - Expected result True

#### Follow up

Could the corridor be audited with one traversal while carrying the smallest and largest priorities allowed at each position?

### Approach Plan

A binary search tree is valid only if every node in the tree satisfies the strict global ordering constraint. not just the immediate children node but also down to all its ancestors.

#### Key Constraint

The constraint that matter most is "Every priority in a left branch must be smaller than its ancestor, every priority in a right branch must be larger, and both branches must satisfy the same rule" because it tells the algorithm to use. To ensure that every node in a left subtree must be smaller than all of its ancestor nodes higher up in the tree.

#### Pattern

- BST (Binary search tree)

#### Complexity

- Time O(H) where H is the height of the tree. In the worst case, H = N (skewed tree), and in the best case, H = log(N) (balanced tree).

- Space O(H) due to the recursive call stack, which can go as deep as the height of the tree.

#### Steps

- Define the recursive function that takes a node and the allowed min(lower bound) and max(higher bound) values for that node.

- If the node is None, return True (base case).

- Check if the node's value is within the allowed min and max bounds. If not, return False.
if(!(node.val > min and node.val < max)): return False

- Recursively check the left subtree with updated max bound (current node's value) and the right subtree with updated min bound (current node's value).

- return isValidBST(node.left, low, node.val) and isValidBST(node.right, node.val, high)