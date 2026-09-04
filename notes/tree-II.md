# Tree II

This topic cover the other part that complete the topic on tree data structure. which is "Breadth-first search" and "Binary search tree".

- Breadth-first search (BFS): walk a tree one level at a time and it uses queue. questions here involves rows of a tree rather than paths through it: print each level, find the shallowest leaf, read the tree from the side.

- Binary search trees: Add a single rule where values are allowed to live. Here inorder traversal produces sorted output, which reduce about a dozen problems to one traversal.

"BFS is the same loop as iterative DFS with a queue in place of the stack."

## Learning objectives

- Write a BFS traversal with a queue from memory

- Group a traversal into levels using the level-size snapshot, and explain why the snapshot is taken before the inner loop

- Solve side-view, minimum-depth and zigzag problems as edits to one template

- State the binary search tree property in terms of subtrees rather than children

- Search, insert into and validate a BST, and find the kth smallest node and the lowest common ancestor

- Explain why tree height decides BST performance, and why O(h) is not automatically O(log n)

### Recongize Question format

- Breadth-first search

BFS is the right tool whenever "distance from the starting point is part of the question, or whenever a whole level has to be finished before the next one can be processed."

- Binary search trees

A BST is the right tool whenever you need data kept in sorted order while it is still being modified. A sorted array gives fast lookup but slow insertion; a linked list gives the reverse. But a BST gives both fast lookup and fast insertion. and it also answers questions a hash map cannot answer at all, such as "what is the next value above this one".

#### Traverse level by level with a Queue

The body of a tree or graph search is the same four steps regardless of which order it produces:

- take a node out from the structure

- process it,

- put it children into the structure

- repeat until the structure is empty.

The steps above is the same for both DFS and BFS.

Breadth-first traversal one line at a time.

Ques 1: Given a tree, produce one flat list of values in level order.
(iterative DFS with a queue)

```js
function BFS(root) {
  if (!root) {
    return [];
  }
  const result = [];

  const queue = [root];
  while (queue.length) {
    //take the oldest from the queue.
    const node = queue.shift();

    //process it
    result.push(node);

    //discover the left child
    if (node.left) {
      queue.push(node.left);
    }

    //discover the right child
    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
}
```

Ques 2: Given the root of a binary tree, return the values of its nodes level by level, from left to right.

```js
function levelOrder(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length) {
    let levelSize = queue.length;
    let level = [];

    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      level.push(node);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
}
```

#### Time and Space cost of BFS

- Time is O(N): because every node is visited once to process it. enqueue is done once and dequeue is also done once.

- Space is O(w): where w is the size of the tree. The maximum number of nodes on any single level

The worst case for a BFS is the best case for DFS and the reverse.

The worst case for a DFS - for the skewed tree the space complexity is O(N) - N represent call stack for all N frames. while this is the best case for BFS as the Queue never hold more than one time at a time. BFS - O(1) space.

#### Practical example

Let say we have an organization where 1 CEO directly manages 10,000 employees.

- Balance tree
  - BFS(Worst case): BFS will traversal level-by-level using queue. to process the CEO, it must push all 10,000 direct reports into the queue at once. And this will take up alot of space O(N).

  - DFS(Best case): DFS traverse path-by-path using stack. It visits employee #1, finishes, pops them off the call stack, and moves to employee #2. The stack depth never exceed 2 frames. O(H) space. H - height of the tree.

Imagine we have a chain of command where Person A manages B, B manages C, C manages D... all the way down 10,000 levels.

- Skewed Tree
  - DFS(Worst case): Here the DFS move to the very bottom before coming back up. hence the recursion stack must hold the 10,000 function frame. O(N) space. which can trigger stack overflow.

  - BFS(Best case): Here at every single step we only have to push 1 item to the queue and process it. O(1) space.

#### Adpating the BFS template to other problems.

Almost every level problem comes in this template with a different line in one of three position

```js
while (queue.length) {
  const levelSize = queue.length;
  // A: set up a per-level accumulator
  for (let i = 0; i < levelSize; i++) {
    const node = queue.shift();
    // B: per-node work · both i and levelSize are available here
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  // C: commit the level result
}
```
| Problem | What changes |
| level order | A: level = [] · B: level.append(val) · C: result.append(level) |
| Right side view | B: if i === level_size - 1: result.append(val) |
| Left side view | B: if i === 0: result.append(val) |
| Largest value per leve |  A: best = -inf · B: best = max(best, val) · C: append best |
| Average of levels | A: total = 0 · B: total += val · C: append total / level_size  |
| Level sum |  A: total = 0 · B: total += val · C: append total. |
| Minimum depth |  B: if leaf: return depth |
|  Maximum depth | Count the outer iterations. Nothing else. |
| Zigzag | C: reverse level on odd levels  |
| Bottom-up level  |  C: append as usual, then return result reverse array. |
| Count node per level |  C: result.append(level_size). |