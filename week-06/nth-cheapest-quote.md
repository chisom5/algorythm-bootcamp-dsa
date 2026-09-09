# Nth Cheapest Pickup Quote

## Problem Statement

In a rideshare pricing tree, each node stores a pickup quote, and the binary search tree ordering keeps cheaper quotes to the left. Given root and a 1-indexed k, return the kth smallest quote in the tree. An in-order scan visits quotes from cheapest to priciest, so stop when the kth quote is reached.

Constraints

- Inputs satisfy the stated method contract.
- Use the supplied structure without changing its representation.

### Examples

- k = 3, root = [5, 3, 6, 2, 4, None, None, 1]  - Expected result 3

- k = 4, root = [5, 1, 7, None, 2, None, 8, None, 3]  - Expected result 5

### Approach Plan

Perform an in-order traversal of the binary search tree, keeping track of the number of nodes visited. When the count reaches k, return the current node's quote.

#### Key Constraint

The constraint that matters most is "An in-order scan visits quotes from cheapest to priciest, so stop when the kth quote is reached" because it tells the algorithm to use an in-order traversal to find the kth smallest quote.

#### Pattern

- BST (Binary search tree)

#### Steps

1. Perform an in-order traversal of the binary search tree.
2. Keep a count of visited nodes.
3. When the count equals k, return the current node's quote.
4. If k is larger than the number of nodes, return None.