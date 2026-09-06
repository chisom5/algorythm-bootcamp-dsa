# Catalog Sync Wave

## Problem

Given the root of a binary catalog tree, return its item values grouped by synchronization wave. Read each tier from left to right, completing one tree level before moving to the next. An empty catalog has no waves, while each item may connect to a left and right child.

Constraints

- Inputs satisfy the stated method contract.

- Use the supplied structure without changing its representation.

### Examples

- root = [3, 9, 20, None, None, 15, 7] - Expected result [[3], [9, 20], [15, 7]]

- root = [] - Expected result []

### Approach 

The question require to read each tier from left to right. this is BFS traversal pattern.

#### Key Constraint

The constraint that matter most is "Read each tier from left to right, completing one tree level before moving to the next" because it tells me that this is a level-by-level order.

#### Pattern

- BFS

#### Complexity

- Time O(N)

- Space O(W)

#### Steps

- handle edge case for when catalog is empty

- Initialize data structure. - Create an empty result array to hold all level values. and create a queue array initialized with [root].

- Traverse levels with while loop. record the levelSize to lock in the total nodes at the current depth. and initialize a local level array to collect values for this specific iteration.

- Process Nodes (for loop): Loop levelSize times:

    - Dequeue the front node (queue.shift()).

    - Extract its value and append it to level (level.push(node.val)).

    - Enqueue left child if node.left exists.

    - Enqueue right child if node.right exists.

- Append the populated level array to result. 

- return output