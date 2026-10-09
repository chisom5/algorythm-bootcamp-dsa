class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._up(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._down(0);
    return top;
  }

  _Empty() {
    return this.heap.length === 0;
  }
  // bubble up
  _up(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent][1] <= this.heap[index][1]) break;
      [this.heap[parent], this.heap[index]] = [
        this.heap[index],
        this.heap[parent],
      ];

      index = parent;
    }
  }

  //   bubble down
  _down(index) {
    while (2 * index + 1 < this.heap.length) {
      let left = 2 * index + 1,
        right = 2 * index + 2,
        min = left;

      if (right < this.heap.length && this.heap[right][1] < this.heap[left][1])
        min = right;

      if (this.heap[index][1] <= this.heap[min][1]) break;

      [this.heap[index], this.heap[min]] = [this.heap[min], this.heap[index]];

      index = min;
    }
  }
}
/**
 * @param {number[][]} moderationRoutes
 * @param {number} profileCount
 * @param {number} startingProfile
 * @returns {number}
 */

function networkDelayTime(moderationRoutes, profileCount, startingProfile) {
  /**
   * moderationRoutes - edges
   * profileCount - N
   * startingProfile - source
   *
   * 1-indexed array
   **/

  // build adjacency list
  const graph = Array.from({ length: profileCount + 1 }, () => []);
  for (let [u, v, w] of moderationRoutes) {
    graph[u].push([v, w]);
  }

  // distance array
  const dist = new Array(profileCount + 1).fill(Infinity);
  dist[startingProfile] = 0;

  // initialize priority queue
  const pq = new MinPriorityQueue();
  pq.push([startingProfile, 0]);

  while (!pq._Empty()) {
    const [node, d] = pq.pop();

    if (d > dist[node]) continue;

    for (let [v, w] of graph[node]) {
      if (dist[node] + w > dist[v]) {
        dist[v] = dist[node] + w;
        pq.push([v, dist[v]]);
      }
    }
  }

  let maxTime = 0;
  for (let i = 1; i < profileCount; i++) {
    if (dist[i] === Infinity) return -1;
    maxTime = Math.max(maxTime, dist[i]);
  }

  return maxTime;
}
