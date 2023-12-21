import { EdgeType, GraphNodeType } from "@/types";

interface Props {
    paths: GraphNodeType[][];
}

export default function getAllEdgesFromPath({ paths }: Props): EdgeType[] {
    let edges: EdgeType[] = [];
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        if (path.length <= 1) continue;

        for (let j = 1; j < path.length; ++j) {
            let edge: EdgeType = { src: path[j - 1], dst: path[j] };
            edges.push(edge);
        }
    }
    return edges;
}
