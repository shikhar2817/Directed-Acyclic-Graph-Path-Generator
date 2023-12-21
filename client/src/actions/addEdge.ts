import { EdgeType, GraphData } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface Props {
    graphData: GraphData;
    edge: EdgeType;
    setGraphData: Dispatch<SetStateAction<GraphData>>;
}

export default function addEdge({ graphData, edge, setGraphData }: Props) {
    if (!graphData[edge.src] || !graphData[edge.dst]) {
        toast.warn("Source or Destination not found");
        return;
    }
    let newGraphData = graphData;
    newGraphData[edge.src].push(edge.dst);
    setGraphData({ ...newGraphData });
    toast.info(`Edge has been from ${edge.src} to ${edge.dst}`);
}
