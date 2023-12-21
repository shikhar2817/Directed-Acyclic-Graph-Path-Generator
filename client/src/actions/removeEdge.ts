import { EdgeType, GraphData } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface Props {
    graphData: GraphData;
    edge: EdgeType;
    setGraphData: Dispatch<SetStateAction<GraphData>>;
}

export default function removeEdge({ graphData, edge, setGraphData }: Props) {
    let newGraphData = graphData;
    let indexOfDstNode = newGraphData[edge.src].indexOf(edge.dst);
    newGraphData[edge.src].splice(indexOfDstNode, 1);
    setGraphData({ ...newGraphData });
    toast.info(`Edge has been removed from ${edge.src} to ${edge.dst}`);
}
