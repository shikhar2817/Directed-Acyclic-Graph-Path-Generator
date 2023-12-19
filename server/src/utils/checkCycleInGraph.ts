// using dfs
// return true if the graph has cycles , false otherwise
export default function checkCycleInGraph(graphData: any, node: any, visitedNodes: Map<any, boolean>): boolean {
    if (!node) return false;

    // if root node is already visited return true (cycle present)
    if (visitedNodes.has(node)) return true;

    // mark node is visited
    visitedNodes.set(node, true);

    // if node is a leaf then return false
    if (!graphData[node]) {
        visitedNodes.delete(node);
        return false;
    }

    let verdictForChildrenNodes = false;

    for (let i = 0; i < graphData[node].length; ++i) {
        let chileNode = graphData[node][i];
        verdictForChildrenNodes = checkCycleInGraph(graphData, chileNode, visitedNodes);
        if (verdictForChildrenNodes) return true;
    }
    return false;
}
