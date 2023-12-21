import { EdgeType, GraphData } from "@/types";

export default function getAllEdges(graphData: GraphData): EdgeType[] {
    let edges: EdgeType[] = [];
    let allNodes = Object.keys(graphData);
    for (let i = 0; allNodes.length > i; i++) {
        let src = allNodes[i];
        for (let j = 0; j < graphData[src].length; ++j) {
            let dst = graphData[src][j];
            edges.push({ src, dst });
        }
    }
    return edges;
}
