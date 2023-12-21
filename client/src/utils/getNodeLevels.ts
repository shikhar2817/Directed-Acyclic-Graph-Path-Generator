import { GraphNodeType, nodeLevelsType } from "@/types";

interface Props {
    paths: GraphNodeType[][];
}

export default function getNodeLevels({ paths }: Props): nodeLevelsType {
    let nodeLevels: nodeLevelsType = {};
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        for (let j = 0; j < path.length; ++j) {
            const node = path[j];
            // if node level is not defined yet then add array with node
            if (!nodeLevels[j]) {
                nodeLevels[j] = [node];
                continue;
            }
            // if node level already does not have new node then push node to array
            if (!nodeLevels[j].includes(node)) nodeLevels[j].push(node);
        }
    }
    return nodeLevels;
}
