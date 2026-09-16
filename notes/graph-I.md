# Graph I

A graph is a mathematical structure for describing relationships. It consists of a set of objects, called vertices, and a set of connections between pairs of those objects, called edges. A graph with vertex set V and edge set E is written G = (V, E).

A graph has no root, so a traversal must be told where to begin, and it discovers only what is reachable from there.

A graph may contain cycles, so a traversal that does not record where it has been will revisit the same vertices without end.

## Tree is a graph with rules

Every tree is a graph. Not every graph is a tree. The differences are exactly the things that make graph code different from tree code.


- In a graph there is no root, can start anywhere.

- Can have a cycle and can be disconnected.

- A tree has parent and child, while a graph just has neighbours.

N.B Two things to note for the a graph code. First, there is no root, so a traversal has to be told where to start, and it only finds what is reachable from there. Second, there can be a cycle, so a traversal can come back to a vertex it has already processed. 

### Terminology

1. Vertex(plural vertices): a thing. can also be called a node.
2. Edge: is a relationship between two vertices.
3. Neighbours, or adjacent vertices: two vertices are adjacent if an edge connects them.
4. The degree of a vertex is the number of edges that touch it. e.g  In Graph G, deg(D) = 3 and deg(E) = 1.

graph G = A - B, A - C, C - D, B - D, D - E.

5. A path is a sequence of vertices in which each consecutive pair is joined by an edge. Its length is the number of edges, not the number of vertices. A simple Path does not repeat a vertex. 
6. Distance is the length of the shortest path between them. If no path exists the distance is infinity
7. Reachability - Y is reachable from X if some path runs from X to Y. but it is not reachable if there is no connection.

8. Cycle - is a path that starts and ends at the same vertex. cycles are why graph traversal needs memory. A traversal that follow edges without checking where it has been can go forever.

#### Connected Component

A connected component is a group of vertices in which every vertex can reach every other vertex. e,g

component 1 · {A, B, C, D, E}, component 2 · {F, G}

#### First step of almost every graph problem

edge list.(the input given)      -    adjacency list(convert to the working from).  - run DFS or BFS algorithm.
