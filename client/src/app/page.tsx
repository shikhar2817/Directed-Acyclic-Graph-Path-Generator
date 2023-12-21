"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Graph, Input, Select, Tag } from "@/components";
import { EdgeType, FormInputType, GraphData, GraphNodeType } from "@/types";
import { getAllEdges } from "@/utils";
import { useState } from "react";
import { addEdge, addNode, removeEdge, removeNode } from "@/actions";

export default function Home() {
    const [paths, setPaths] = useState<GraphNodeType[][]>([]);
    const [graphData, setGraphData] = useState<GraphData>({});
    const [showGraph, setShowGraph] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormInputType>({
        node: "",
        srcNode: "",
        dstNode: "",
        rootNode: "",
    });

    const handleAddEdge = () => {
        addEdge({ graphData, edge: { src: formData.srcNode, dst: formData.dstNode }, setGraphData });
        setFormData({ ...formData, srcNode: "", dstNode: "" });
        setShowGraph(false);
    };

    const handleRemoveEdge = (edge: EdgeType) => {
        removeEdge({ graphData, edge, setGraphData });
        setShowGraph(false);
    };

    const handleRemoveNode = (node: GraphNodeType) => {
        removeNode({ graphData, node, setGraphData });
        setShowGraph(false);
    };

    const handleAddNode = () => {
        addNode({ graphData, node: formData.node, setGraphData });
        setFormData({ ...formData, node: "" });
        setShowGraph(false);
    };

    const handleChange = (e: { target: { name: any; value: any } }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGenerateAllPaths = () => {
        console.log("Generate paths");
    };

    return (
        <div className="m-5">
            <div className="flex justify-center items-center">
                <div className="flex border-r-2 border-gray-300 mr-1">
                    <Input
                        placeholder="Node"
                        value={formData.node}
                        name="node"
                        className="w-36"
                        onChange={handleChange}
                    />
                    <Button variant="secondary" onClick={handleAddNode}>
                        Add Node
                    </Button>
                </div>
                <div className="flex border-r-2 border-gray-300 mr-1">
                    <Input
                        placeholder="Source"
                        value={formData.srcNode}
                        name="srcNode"
                        onChange={handleChange}
                        className="w-36"
                    />
                    <Input
                        placeholder="Destination"
                        value={formData.dstNode}
                        name="dstNode"
                        className="w-36"
                        onChange={handleChange}
                    />
                    <Button variant="secondary" onClick={handleAddEdge}>
                        Add Edge
                    </Button>
                </div>

                <Select
                    value={formData.rootNode}
                    options={Object.keys(graphData)}
                    onChange={handleChange}
                    name="rootNode"
                />
                <Button onClick={handleGenerateAllPaths}>Generate All Paths</Button>
            </div>
            <div className="flex justify-evenly p-5">
                <div>
                    {/* Nodes */}
                    {Object.keys(graphData).map((node: GraphNodeType, index) => {
                        return <Tag key={index} tagTitle={node} onClick={() => handleRemoveNode(node)} />;
                    })}
                </div>
                <div>
                    {/* Edges */}
                    {getAllEdges(graphData).map((edge, index) => {
                        return (
                            <Tag
                                tagTitle={`${edge.src}-${edge.dst}`}
                                onClick={() => handleRemoveEdge(edge)}
                                color="pink"
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0" />
            {showGraph && <Graph graphData={graphData} paths={paths} />}
            <ToastContainer />
        </div>
    );
}
