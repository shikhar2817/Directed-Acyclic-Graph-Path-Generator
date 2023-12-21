import { GraphData, GraphNodeType } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface Props {
    graphData: GraphData;
    root: GraphNodeType;
    setPaths: Dispatch<SetStateAction<string[][]>>;
    setShowGraph: Dispatch<SetStateAction<boolean>>;
}

export default async function generateAllPaths({ graphData, root, setPaths, setShowGraph }: Props) {
    // if root is not selected
    if (root === "Select Root") {
        toast.warn("Select the root node");
        return;
    }
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: graphData, root }),
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/generate-all-paths`, requestOptions);
    const data = await res.json();
    const paths = data.paths;
    if (res.status === 500) {
        toast.error(data.message);
        setShowGraph(false);
        return [];
    }
    setPaths(paths);
    setShowGraph(true);
}
