# Course Schedule II

## Problem

Given a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a_i, b_i] indicates that you must take course b_i first if you want to take course a_i.

- For example, the pair [0, 1] indicates that to take course 0 you have to first take course 1.

Return the ordering of courses you should take to finish all courses. If there are multiple valid answers, return any of them.

If it is impossible to finish all courses, return an empty array.

Constraint

- 1 <= numCourses <= 2000

- 0 <= prerequisites.length <= 5000

- prerequisites[i].length == 2

- 0 <= a_i, b_i < numCourses

- All the pairs prerequisites[i] are unique.

### Examples

- Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]

- Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]

