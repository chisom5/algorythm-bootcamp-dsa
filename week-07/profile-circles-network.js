/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {number}
 */
function countComponents(n, edges) {

  const graph = Array.from({length: n}, ()=> []);
  for(let [u, v] of edges){
    graph[u].push(v);
    graph[v].push(u);
  }

  let visited = new Array(n).fill(false);
  let count = 0;

  for(let i=0; i < n; i++){
    if(!visited[i]){
      count++;

      let stack = [i];
      visited[i] = true;

      while(stack.length > 0){
        let node = stack.pop();
        
        for(let nbr of graph[node]){
          if(!visited[nbr]){
            visited[nbr] = true;
            stack.push(nbr);
          }
        }
      }
    }
  }

return count;
}
