import { EdgeType, GraphData } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface Props {
    graphData: GraphData;
    edge: EdgeType;
    setGraphData: Dispatch<SetStateAction<GraphData>>;
}

export default function addEdge({ graphData, edge, setGraphData }: Props) {
    // if src or dst nodes not present
    if (!graphData[edge.src] || !graphData[edge.dst]) {
        toast.warn("Source or Destination not found");
        return;
    }
    // if edge is already present
    if (graphData[edge.src].includes(edge.dst)) {
        toast.warn("Edge is already present");
        return;
    }
    let newGraphData = graphData;
    newGraphData[edge.src].push(edge.dst);
    setGraphData({ ...newGraphData });
    toast.info(`Edge has been added from ${edge.src} to ${edge.dst}`);
}
