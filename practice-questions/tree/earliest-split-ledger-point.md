# Earliest Split Ledger Review Point

## Problem Statement

In a financial compliance binary search tree, find the lowest common ancestor of two ledger review nodes, p and q. 
Return the first shared ledger review point. Because a node counts as its own descendant, p or q may itself be the answer. 
Use BST ordering to decide which branch can contain both nodes. 

In the examples, root.L means the left child of root and each additional .L or .R follows another left or right child. These labels identify the existing TreeNode references passed as p and q; they are not strings that your method receives. Return the actual shared TreeNode reference. The displayed output serializes the subtree rooted at that returned node in level order only to show the result.

Constraints

- Inputs satisfy the stated method contract.
- Use the supplied structure without changing its representation.
- p and q are existing node references within root; return a TreeNode reference, not a value or path string.
- Example outputs are level-order displays of the returned node's subtree; the method itself returns that node.

### Examples

- p = 'root.L', q = 'root.R', root = [6, 2, 8, 0, 4, 7, 9, None, None, 3, 5]
Expected result [6, 2, 8, 0, 4, 7, 9, None, None, 3, 5]

- p = 'root.R.L', q = 'root.R.R', root = [6, 2, 8, 0, 4, 7, 9, None, None, 3, 5]
Expected result [8, 7, 9]

#### Follow up

Can you locate the shared review point without searching every node?

### Approach Plan

Using BST ordering to decide which branch can contain both nodes is already locating shared review point without searching every node. and a valid BST ordering is every smaller values are in the left and all bigger values are in the right. So the approach will be if both p and q values are smaller than the root.val  the shared ancestor must be in the left, else it is in the right. if it doesn't fall under the condition we return the treeNode. as the LCA

#### Key Constraints

The constraint that matter most is "p and q are existing node references within root; return a TreeNode reference, not a value or path string." because it tells me how to define the condition in the tree. if both p and q values are smaller than the root.val  the shared ancestor must be in the left, else if they are both bigger than the root.val then it is in the right.

#### Pattern

- Binary Search Tree (BST)

#### Complexity

- Time O(H) - where H represent the height of the tree.

- Space O(1)

N.B - if the tree is balance H - (Log N)