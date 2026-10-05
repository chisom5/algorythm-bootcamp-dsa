/**
 * @param {number} shipmentCount
 * @param {number[][]} loadingRules
 * @returns {boolean}
 */
function canClearFulfillmentPlan(shipmentCount, loadingRules) {
  const graph = Array.from({ length: shipmentCount }, () => []);
  const indegree = new Array(shipmentCount).fill(0);

  for (let [u, v] of loadingRules) {
    graph[v].push(u);
    indegree[u]++;
  }

  const queue = [];
  let front = 0;
  let count = 0;

  for (let i = 0; i < shipmentCount; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (front < queue.length) {
    let node = queue[front++];
    count++;

    for (let nbr of graph[node]) {
      indegree[nbr]--;
      if (indegree[nbr] === 0) queue.push(nbr);
    }
  }

  return count === shipmentCount ? true : false;
}
