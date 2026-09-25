# Size of the Largest Server Cluster

## Problem

You are managing a data center represented as a network of N servers, labeled from 0 to N - 1.

You are given an integer n and a 2D array connections, where connections[i] = [u_i, v_i] indicates an active bidirectional network cable between server u_i and server v_i.

A server cluster is defined as a group of servers where every server in the group can reach any other server in the same group through a sequence of active network cables (i.e., a connected component).

Return the number of servers in the largest server cluster. If there are no servers in the network, return 0.

Constraints

- 0 <= n <= 10^5

- 0 <= connections.length <= 2 * 10^5

- connections[i].length == 2

- 0 <= u_i, v_i < n

- u_i != v_i (No self-loops)

- There are no duplicate connections.

### Examples

- Input: n = 6, connections = [[0, 1], [1, 2], [3, 4]]  -> Output: 3
    Explanation: 
    There are two clusters in the network:
    - Cluster 1: [0, 1, 2] with size 3
    - Cluster 2: [3, 4] with size 2
    Server 5 is isolated (Cluster 3: [5] with size 1).
    The largest cluster has a size of 3.

- Input: n = 4, connections = [] -> Output: 1
    Explanation: 
    There are no connections, so each server forms its own cluster of size 1.
    The largest cluster size is 1.

#### Approach Plan

From the question, the graph is an undirected graph, and there are no duplicate connections means that the graph is a sparse graph and no self loop means that a node doesn't start and end on itself. hence we can use BFS or DFS for this implementation.

#### Key Constraint

The constraint that matter most is "0 <= n <= 10^5" because it tells me or give me an idea of the algorithm that i can use. in this case I can't use recursive DFS has at some point I will eventually get stack overflow as the input can be as large as 10,000. hence I can default to using iterative DFS or BFS

#### Pattern 

- BFS or DFS

#### Complexity 

- Time O(V + E);

- Space O(V + E);

#### Steps

1. Base case: If there are no servers in the network, return 0. 

2. Build adjacency list

3. Maintain a visited boolean array of size n. and initialize max_cluster as 0

4. Iterate through every server, If not visited, set the current_cluster as 0, launch iterative BFS or DFS while incrementing the current_cluster. 

5. Inside the iteration or outer iteration set max_cluster - Math.max(max_cluster, current_cluster);

6. Return maximum component size found.