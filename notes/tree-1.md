# Tree I

A tree is a data structure that organize data into hierarchy. An array or a linked list stores items in a straight line. A tree instead connects items through parent-child relationships. Each item stores a value and references to the items directly beneath it. 
The structure of the tree is defined entirely by those references.


## Terminology

Each item in a tree is called a node. 

- Node - store a data and a reference to the next nodes.

- Root - Is the topmost node. it has no parent

- Parent - A node with nodes beneath it

- Child - is a node directly beneath another

- Leaf - A node with no children

- Depth - A node's distance from the root, counted in edges.

- Edge - The connection between a parent and a child

- Subtree - A node together with all of its descendants.

- Internal node - is a node with at least one child 

### Condition to determine a structure is a tree.

- Is a tree if it has a single root

- A node may have zero or no children

- If it contains no cycles. Following references downward, it never returns to a node that has already been visited.

- Every node except the root has exactly one parent.

N.B - Most tree problems in technical interviews, and most tree implementations in libraries and databases, use binary trees. In which every node has at most two children named left, right. except for the leaf node.

### To Traverse a Tree

To Traverse a tree we have two strategies. The Depth-first traversal flow and the Breadth-first. The Depth-first follows one branch to its end before backtracking. While Breadth-first visits nodes one level at a time using a queue.

### Shape determine Performance

The shape of a tree is often important as the value stored in it. The shape of a tree determines the cost of operating on it. A balanced binary search tree finds a value in O(log n) time, so doubling the amount of data adds approximately one comparison. This property is not automatic. A badly unbalanced tree (Skewed Tree) behaves like a linked list, and a search then costs O(n). Because it has lost it's branching factor.

