import { EdgeType, GraphData, GraphNodeType } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface Props {
    graphData: GraphData;
    node: GraphNodeType;
    setGraphData: Dispatch<SetStateAction<GraphData>>;
}

export default function addNode({ graphData, node, setGraphData }: Props) {
    if (!node) {
        toast.warn("Node value is empty");
        return;
    }
    setGraphData({ ...graphData, [node]: [] });
    toast.info(`Node ${node} has been deleted`);
}
