# Midpoint Review Segment

## Problem

A product team stores customer feedback for a SKU as a single forward-only review chain, where each review points to the next newer one in the sequence. Analysts often need to jump directly into the most representative portion instead of rereading the entire chain from the start.

Given the first review in this chain, return the review where the back half begins. If the chain has an even number of reviews, there are two central candidates, and the later one should be chosen. The returned review should be the actual starting review node of that trailing segment, not a copied list or a position number.

Constraints

- The number of reviews in review is in the range [1, 100]
- 1 <= review.val <= 100
- review is the first node of a singly linked chain

### Examples

- review = [8] → [8]

- review = [6,3,7] → [3, 7]

- review = [2,4,6,8,10] → [6, 8, 10]

## Approach Plan

### Key Constraint

The constraint that matter most is "review is the first node of a singly linked chain" because it direct the fast and slow pointers pattern as a singly linked list only allow forward movement.

### Pattern

- Linked list, Two pointers(Fast & Slow)

### Complexity

- Time O(n)
- Space O(1)

### Steps

- initialize two pointers, slow and fast starting at the same point (head).
- iteration and move slow one at a time while fast move twice.
- at the point where slow will eventually meet up fast is the result.