import { GraphData, GraphNode } from "../types";

interface generateAllPathsValues {
    graphData: GraphData;
    root: GraphNode;
}

/*
    using DFS
    return 2d array of all the paths from root to leaves
*/

export default function generateAllPaths({ graphData, root }: generateAllPathsValues): GraphNode[][] {
    let path: GraphNode[][] = [];

    // if leave root is a leaf
    if (!graphData[root] || !graphData[root].length) {
        path.push([root]);
        return path;
    }

    // get all child paths
    for (let i = 0; i < graphData[root].length; ++i) {
        let childNode = graphData[root][i];
        let allChildPaths = generateAllPaths({ graphData, root: childNode });

        // merge child paths with the root
        for (let j = 0; j < allChildPaths.length; ++j) {
            path.push([root, ...allChildPaths[j]]);
        }
    }

    return path;
}
