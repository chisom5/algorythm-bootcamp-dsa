/**
 * 1. The constraint the inputs: numCourses and prerequisites are not too large. Hence I can make use of recursive dfs.
 *  2. prerequisites[i] = [a_i, b_i] indicates that you must take course b_i first if you want to take course a_i. (directed graph & topological sort.)
 *
 * using DFS for topological sort. (DFS + 3 state), when it process every outgoing neighbour, append to the order list.
 **/

// recursive way
function courseScheduleII(numCourses, prerequisites) {
  // build graph
  const graph = Array.from({ length: numCourses }, () => []);

  for (let [u, v] of prerequisites) {
    graph[v].push(u);
  }

  const state = new Array(numCourses).fill(0);
  let order = [];

  function dfs(course) {
    state[course] = 1;

    for (let nbr of graph[course]) {
      if (state[nbr] === 1) return false;

      if (state[nbr] === 0 && !dfs(nbr)) return false;
    }
    state[course] = 2;
    order.push(course);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (state[i] === 0 && !dfs(i)) return [];
  }

  return order.reverse();
}

// iterative way
function courseScheduleII(numCourses, prerequisites) {
  // build graph
  const graph = Array.from({ length: numCourses }, () => []);
  for (let [u, v] of prerequisites) {
    graph[v].push(u);
  }

  const state = new Array(numCourses).fill(0);
  let order = [];

  for (let i = 0; i < numCourses; i++) {
    if (state[i] !== 0) continue;

    let stack = [i];

    while (stack.length) {
      let node = stack[stack.length - 1];

      if (state[node] === 0) {
        stack[node] = 1;

        for (let nbr of graph[node]) {
          if (state[nbr] === 1) return null; // cycle.

          if (state[nbr] === 0) {
            stack.push(nbr);
          }
        }
      } else if (state[node] === 1) {
        state[node] = 2;
        stack.pop();
        order.push(node);
      } else {
        stack.pop();
      }
    }
  }

  return order.reverse();
}

// topological sort
function courseScheduleII(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const indegree = new Array(numCourses).fill(0);

  // build graph and indegree
  for (let [u, v] of prerequisites) {
    graph[v].push(u);
    indegree[u]++;
  }

  const queue = [];
  let front = 0;
  let order = [];

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (front < queue.length) {
    let node = queue[front++];
    order.push(node);

    for (let nbr of graph[node]) {
      indegree[nbr]--;
      if (indegree[nbr] === 0) queue.push(nbr);
    }
  }

  return order.length !== numCourses ? [] : order;
}
