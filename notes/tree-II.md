# Tree II

This topic cover the other part that complete the topic on tree data structure. which is "Breadth-first search" and "Binary search tree".

- Breadth-first search (BFS): walk a tree one level at a time and it uses queue. questions here involves rows of a tree rather than paths through it: print each level, find the shallowest leaf, read the tree from the side.

- Binary search trees: Add a single rule where values are allowed to live. Here inorder traversal produces sorted output, which reduce about a dozen problems to one traversal.

BFS is the same loop as iterative DFS with a queue in place of the stack.

## Learning objectives

- Write a BFS traversal with a queue from memory
- Group a traversal into levels using the level-size snapshot, and explain why the snapshot is taken before the inner loop
- Solve side-view, minimum-depth and zigzag problems as edits to one template
- State the binary search tree property in terms of subtrees rather than children
- Search, insert into and validate a BST, and find the kth smallest node and the lowest common ancestor
- Explain why tree height decides BST performance, and why O(h) is not automatically O(log n)
