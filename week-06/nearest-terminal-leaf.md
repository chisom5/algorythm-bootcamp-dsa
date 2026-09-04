# Nearest Terminal Leaf

## Problem

Given a warehouse binary tree rooted at root, return its minimum depth to the nearest terminal checkpoint. Count the nodes on the shortest route from the root checkpoint to a leaf checkpoint with no children. An empty warehouse tree has depth 0, and a route may continue through only one child at each level.

Constraints

- Inputs satisfy the stated method contract.

- Use the supplied structure without changing its representation.

### Examples

- root = [] - Expected result 0

- root = [1, 2, 3] - Expected result 2

#### Follow up

Can you stop searching as soon as breadth-first search reaches the first terminal checkpoint?

## Approach Plan

The problem ask to "return its minimum depth to the nearest terminal checkpoint" counting the nodes on the shortest route from the root checkpoint. this is requesting to solve the problem using Breadth-first search technique.

#### Key Constraint

The constraint that matter most is "An empty warehouse tree has depth 0, and a route may continue through only one child at each level." because it ensure we handle the edge case for when the node is empty to return depth 0. else the code will fail the very first edge case. and "the route to continue through only one child at each level" ensure we handle case of Skewed tree. A node with only one child is not a terminal leaf we treat it as a leaf and stop. The route must keep going down the available path.

#### Pattern

- BFS traversal

#### Steps

- Handle edge case when root is empty.

- initialize a queue and depth tracking.
    - queue = [root]; depth = 1;

- Level-by-Level BFS Traversal:
    - While the queue is not empty:

    - store levelSize and loop through it processing current depth level.

    - Dequeue the front node: const node = queue.shift().

    - Check Leaf Condition: If !node.left && !node.right, return depth immediately (BFS guarantees this is the shortest path).
    
    - Otherwise, push non-null children (node.left, node.right) to the queue.

- increment depth after finsihing all node in the current level.