# Menu Score Within Budget Band

## Problem

A delivery platform stores each restaurant's menu in a ranked decision tree. Every dish score is larger than every score in its left branch and smaller than every score in its right branch, so the kitchen can quickly narrow where to look.

Given the top dish node for one restaurant and two integers representing a minimum and maximum acceptable score, compute the total of all dish scores that fall within that inclusive band. Your result should include every qualifying dish exactly once.

The menu can be large, so avoid checking branches that cannot possibly contain valid scores.

Constraints

- The number of nodes in restaurant_menu is in the range [1, 2 * 10^4]
- 1 <= TreeNode.val <= 10^5
- 1 <= min_score <= max_score <= 10^5
- All dish scores in restaurant_menu are unique

### Examples

- restaurant_menu = [9], min_score = 9, max_score = 9
Expected result - 9

- restaurant_menu = [10,5,15,3,7,null,18], min_score = 7, max_score = 15
Expected result - 32

### Approach Plan

This is a binary search tree. where every dish score is larger than every score in its left but smaller than that in the right. so we return sum total within a range "min_score" and "max_score".

So, I would traverse the tree, whenever the value falls within range increment sum. and move left or right in the tree.

#### Pattern

- BST (Binary search tree)
