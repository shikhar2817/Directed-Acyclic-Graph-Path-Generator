import { GraphData, GraphNode } from "../types";

interface checkCycleInGraphValues {
    graphData: GraphData;
    node: GraphNode;
    visitedNodes: Map<any, boolean>;
}

/*
    using DFS
    return true if the graph has cycles , false otherwise
*/

export default function checkCycleInGraph({ graphData, node, visitedNodes }: checkCycleInGraphValues): boolean {
    if (!node) return false;

    // if root node is already visited return true (cycle present)
    if (visitedNodes.has(node)) return true;

    // mark node is visited
    visitedNodes.set(node, true);

    // if node is a leaf then return false
    if (!graphData[node] || !graphData[node].length) {
        visitedNodes.delete(node);
        return false;
    }

    let verdictForChildrenNodes = false;

    for (let i = 0; i < graphData[node].length; ++i) {
        let childNode = graphData[node][i];

        // check for self loop
        if (childNode === node) return true;

        verdictForChildrenNodes = checkCycleInGraph({ graphData, node: childNode, visitedNodes });
        if (verdictForChildrenNodes) return true;
    }
    visitedNodes.delete(node);
    return false;
}
