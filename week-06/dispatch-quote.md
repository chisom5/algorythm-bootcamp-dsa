# Locate a Dispatch Quote

## Problem

Use the ordered price index rooted at root to locate the dispatch quote whose price equals val, returning that quote's entire subtree. If no indexed quote has that price, return null. The index is a binary search tree: lower prices lie to the left and higher prices lie to the right. Preserve the existing TreeNode structure.

Constraints

- Inputs satisfy the stated method contract.
- Use the supplied structure without changing its representation.

### Examples

- root = [4, 2, 7, 1, 3], val = 2  - Expected result [2, 1, 3]

- root = [4, 2, 7, 1, 3], val = 5  -  Expected result None

#### Follow up 

Can you perform the ordered lookup without scanning every dispatch quote?

### Approach plan

From the question the index is a bineary search tree: lower prices lie to the left and higher prices lie to the right.  So this is 
BST.

#### Key Constraint

The constraint that matter most is "The index is a binary search tree: lower prices lie to the left and higher prices lie to the right" It tells me the algorithm to use. 

#### Pattern

- BST (Binary search tree)

#### Complexity

- Time O(H) where H is the height of the tree.

- Space O(1)

#### Steps

- Handle edge case when the root is empty, return null.

- Traverse and compare the dipatch quote value.

    - where it matches the node.val return node.
    - else compare if dispatch quote value is lower than the current node value move left
    i.e node = node.left;
    - else move right i.e node = node.right;

- return null when it fall off.