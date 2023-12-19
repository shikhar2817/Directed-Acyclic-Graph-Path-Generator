import checkCycleInGraph from "./checkCycleInGraph";

// returns true if the graph is DAG, false otherwise
export default function verifyDAG(graphData: any, root: any): boolean {
    // graphData not present or root is not present in the graphData then return false
    if (!graphData) return false;
    if (Object.keys(graphData).length > 0 && !root) return false;

    // return false if any of the node values is other then array
    for (const node in graphData) {
        const checkNodeVerdict = Array.isArray(graphData[node]);
        if (!checkNodeVerdict) return false;
    }

    const visitedNodes = new Map<any, boolean>();
    if (checkCycleInGraph(graphData, root, visitedNodes)) return false;
    return true;
}
