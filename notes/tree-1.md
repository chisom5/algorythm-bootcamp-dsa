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

#### To Traverse a Tree

To Traverse a tree we have two strategies. The Depth-first traversal flow and the Breadth-first. The Depth-first follows one branch to its end before backtracking. While Breadth-first visits nodes one level at a time using a queue.

#### Shape determine Performance

The shape of a tree is often important as the value stored in it. The shape of a tree determines the cost of operating on it. A balanced binary search tree finds a value in O(log n) time, so doubling the amount of data adds approximately one comparison. This property is not automatic. A badly unbalanced tree (Skewed Tree) behaves like a linked list, and a search then costs O(n). Because it has lost it's branching factor.

#### The three part recursive template

Almost every function in tree structutre consist of this three part. Once the structure is known, solving a problem consists of determining two of the three parts.

```js
function solve(root) {
  // 1 · BASE CASE
  if (!root) {
    //      answer for an empty tree
    return baseValue;
  }
  // 2 · RECURSE
  const left = solve(root.left);
  //      trust these completely
  const right = solve(root.right);

  // 3 · COMBINE
  return combine(left, right, root.val);
}
```

- The Base case - ususally the empty tree, it gives the correct answer when the tree has no nodes. The depth of an empty tree is 0, likewise the sum of an empty is 0.

- The Recurse - The same question, one level down. Make two calls, one per child. The internal behavior of those calls is not relevant at this point.

- Combine - The problem specific step. If the combine step is correct, the recursion applies it correctly to a tree of any size.

#### USE DFS for traversal

- When the problem concerns a path, subtree, or a value computed from the children: depth, sum, balance.

- A short recursive function is sufficient

#### Difference Type of DFS Orders

Tree Traversal - Is a process of searching or processing a data within a binary tree in a certain order.

The three depth-first orders differ in exactly one respect: when the current node is processed relative to the two recursive calls. All other behavior is identical, including which nodes are visited and the total work performed.

- Post order: The order is in (left-right-root)

```js
function post(root) {
  if (!root) return;

  post(root.left);
  post(root.right);
  // ← HERE
  visit(root);
}
```

- Pre order: This traversal is in the order of (root-left-right).

```js
function pre(root) {
  if (!root) return;
  // ← HERE
  visit(root);
  pre(root.left);
  pre(root.right);
}
```

- In-order: This traversal is in the order of (left-root-right)

```js
function ino(root) {
  if (!root) return;

  ino(root.left);
  // ← HERE
  visit(root);
  ino(root.right);
}
```

The prefix in each name indicates the position of the root in the output. Preorder places it first, inorder places it in the middle, and postorder places it last.

All three orders are depth-first, all three runs O(n) in time and O(h) space, and all three call the function on every null reference. 

#### When to use any DFS order

- For "Preorder" - we use it when the parent must occur before the work at the children. Examples Copy or serialize a tree, print an outline, propagate a running sum or a depth

- For "Post order" - we use it when the current node require result from both children. Examples Height, node count, subtree sum, balance, evaluating an expression

- For "In order" - we use it when the left subtree must be completed before the current node. Examples On a binary search tree, inorder produces the values in sorted order. Used extensively in Trees II

#### To convert a problem into code.

Answer three questions in order for any tree problem.

1. What does this function return for one subtree?
State this in one sentence, including the return type. e.g "it returns the number of nodes on the longest path in this subtree, as an int." If this sentence cannot be stated, the body of the function cannot be written correctly.

2. What do I need from my children to answer it?
usually the same value from each child.

3. What does the current node contribute?
Its value, one level of depth, or one unit of a count. This becomes the combine step.

