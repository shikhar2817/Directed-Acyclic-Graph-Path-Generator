import { GraphData, GraphNodeType } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface Props {
    graphData: GraphData;
    node: GraphNodeType;
    setGraphData: Dispatch<SetStateAction<GraphData>>;
}

export default function removeNode({ graphData, node, setGraphData }: Props) {
    let newGraphData = graphData;
    let allNodes: GraphNodeType[] = Object.keys(newGraphData);

    for (let i = 0; i < allNodes.length; ++i) {
        const currNode = allNodes[i];
        if (currNode === node) continue;

        // if node value is not present the skip iteration
        let indexOfNode = newGraphData[currNode].indexOf(node);
        if (indexOfNode === -1) continue;

        // if node value is present in the currNode value array then remove node value
        newGraphData[currNode].splice(indexOfNode, 1);
    }
    delete newGraphData[node];
    setGraphData({ ...newGraphData });
    toast.info(`Node ${node} has been deleted`);
}
