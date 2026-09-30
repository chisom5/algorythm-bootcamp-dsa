/**
 * 1. The constraint the inputs: numCourses and prerequisites are not too large. Hence I can make use of recursive dfs.
 *  2. prerequisites[i] = [a_i, b_i] indicates that you must take course b_i first if you want to take course a_i. (directed graph & topological sort.)
 *
 * using DFS for topological sort. (DFS + 3 state), when it process every outgoing neighbour, append to the order list.
 **/

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

  for(let i = 0; i < numCourses; i++){
    if(state[i] === 0 && !dfs(i)) return [];
  }

  return order.reverse();
}
