import { GraphNodeType, nodeLevelsObjType, nodeLevelsType } from "@/types";

interface Props {
    paths: GraphNodeType[][];
}

export default function getNodeLevels({ paths }: Props): nodeLevelsObjType {
    let nodeLevelsObj: nodeLevelsObjType = {};
    let nodeLevels: nodeLevelsType = {};

    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        for (let j = 0; j < path.length; ++j) {
            const node = path[j];
            // if node level is not defined yet then add array with node
            if (!nodeLevels[node]) {
                nodeLevels[node] = j;
            } else {
                nodeLevels[node] = Math.min(j, nodeLevels[node]);
            }
        }
    }
    for (const node in nodeLevels) {
        if (!nodeLevelsObj[nodeLevels[node]]) {
            nodeLevelsObj[nodeLevels[node]] = [node];
        } else {
            nodeLevelsObj[nodeLevels[node]].push(node);
        }
    }
    return nodeLevelsObj;
}

// if node level already does not have new node then push node to array
// if (!nodeLevels[j].includes(node)) {
//     if (usedNode.has(node)) continue;
//     nodeLevels[j].push(node);
//     usedNode.set(node, true);
// }
