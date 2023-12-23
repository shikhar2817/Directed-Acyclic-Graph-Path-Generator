"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Graph, Input, Select, Tag } from "@/components";
import { EdgeType, FormInputType, GraphData, GraphNodeType } from "@/types";
import { getAllEdges } from "@/utils";
import { useState } from "react";
import { addEdge, addNode, generateAllPaths, removeEdge, removeNode } from "@/actions";
import Loader from "@/components/Loader";

export default function Home() {
    const [paths, setPaths] = useState<GraphNodeType[][]>([]);
    const [graphData, setGraphData] = useState<GraphData>({});
    const [showGraph, setShowGraph] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState<FormInputType>({
        node: "",
        srcNode: "",
        dstNode: "",
        rootNode: "Select Root",
    });

    const handleAddEdge = () => {
        addEdge({ graphData, edge: { src: formData.srcNode, dst: formData.dstNode }, setGraphData });
        setFormData({ ...formData, srcNode: "", dstNode: "", rootNode: "Select Root" });
        setShowGraph(false);
    };

    const handleRemoveEdge = (edge: EdgeType) => {
        removeEdge({ graphData, edge, setGraphData });
        setShowGraph(false);
        setFormData({ ...formData, rootNode: "Select Root" });
    };

    const handleRemoveNode = (node: GraphNodeType) => {
        removeNode({ graphData, node, setGraphData });
        setShowGraph(false);
        setFormData({ ...formData, rootNode: "Select Root" });
    };

    const handleAddNode = () => {
        addNode({ graphData, node: formData.node, setGraphData });
        setFormData({ ...formData, node: "", rootNode: "Select Root" });
        setShowGraph(false);
    };

    const handleChange = (e: { target: { name: any; value: any } }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGenerateAllPaths = async () => {
        setLoading(true);
        await generateAllPaths({ graphData, root: formData.rootNode, setPaths, setShowGraph });
        setLoading(false);
    };

    return (
        <>
            <div className="m-5">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="flex sm:border-r-2 sm:border-b-0 border-gray-300 md:mr-1 mb-1">
                        <Input
                            placeholder="Node"
                            value={formData.node}
                            name="node"
                            className="w-28"
                            onChange={handleChange}
                        />
                        <Button variant="secondary" onClick={handleAddNode}>
                            Add Node
                        </Button>
                    </div>
                    <div className="flex sm:border-r-2 sm:border-b-0 border-gray-300 md:mr-1 mb-1">
                        <Input
                            placeholder="Source"
                            value={formData.srcNode}
                            name="srcNode"
                            onChange={handleChange}
                            className="w-28"
                        />
                        <Input
                            placeholder="Destination"
                            value={formData.dstNode}
                            name="dstNode"
                            className="w-28"
                            onChange={handleChange}
                        />
                        <Button variant="secondary" onClick={handleAddEdge}>
                            Add Edge
                        </Button>
                    </div>

                    <Select
                        options={Object.keys(graphData)}
                        value={formData.rootNode}
                        onChange={handleChange}
                        name="rootNode"
                    />
                    <Button className="m-1" onClick={handleGenerateAllPaths}>
                        Generate All Paths
                    </Button>
                </div>
                <div className="flex justify-evenly p-5">
                    <div>
                        {/* Nodes */}
                        {Object.keys(graphData).map((node: GraphNodeType, index) => {
                            return (
                                <Tag key={`tab-node-${index}`} tagTitle={node} onClick={() => handleRemoveNode(node)} />
                            );
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
                                    key={`tab-edge-${index}`}
                                />
                            );
                        })}
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0" />
                {showGraph && <Graph paths={paths} />}
                {loading && <Loader />}
                <ToastContainer position="bottom-left" />
            </div>
        </>
    );
}
