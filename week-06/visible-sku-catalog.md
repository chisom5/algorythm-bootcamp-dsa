# Visible SKU per Catalog Tier

## Problem

Given the root of a binary catalog tree, return the outward-facing SKU visible at each tier from top to bottom. A shopper is viewing the catalog from its right side, so only the last reachable SKU at each depth belongs in the view. Preserve tier order, and return an empty list when the catalog has no nodes.

Constraints

- Inputs satisfy the stated method contract.

- Use the supplied structure without changing its representation.

### Examples

- root = [1, None, 3]  - Expected result [1, 3]

- root = [1, 2, 3, 4, None, None, None, 5]  -  Expected result [1, 3, 4, 5]

### Approach Plan

Returning the outward-facing SKU visible mean to return the right side view of the tree.

#### Key Constraint

The constraint that matter most is "A shopper is viewing the catalog from its right side, so only the last reachable SKU at each depth belongs in the view." because it tells me that at every level or depth, return the rightmost node.

#### Pattern 

- BFS

#### Complexity

- Time O(N)

- Space O(N)

#### Steps

- Handle edge case when root is empty.

- Initialize a queue and and empty result array to hold the rightmost node.
    - queue = [root]; result =[]

- Traverse levels with while loop. record the levelSize to lock in the total nodes at the current depth. 

- Process Nodes (for loop): Loop levelSize times:

    - Dequeue the front node (queue.shift()).

    - If I am on the right side of the tree, enqueue. i.e if. i = levelSize - 1

    - Enqueue left child if node.left exists.

    - Enqueue right child if node.right exists.

- return output