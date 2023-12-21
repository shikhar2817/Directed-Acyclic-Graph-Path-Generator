import { Xwrapper } from "react-xarrows";
import { Edge, GraphNode } from ".";
import { GraphData, GraphNodeType } from "@/types";
import { getAllEdges, getNodeLevels } from "@/utils";

interface Props {
    graphData: GraphData;
    paths: GraphNodeType[][];
}

export default function Graph({ paths, graphData }: Props) {
    return (
        <Xwrapper>
            {/* nodes */}
            <div className="h-[60vh] grid place-content-around">
                {Object.values(getNodeLevels({ paths })).map((level: GraphNodeType[], index: number) => (
                    <div key={`level-${index}`} className="w-screen flex flex-row justify-evenly">
                        {level.map((level: GraphNodeType, levelIndex) => {
                            return <GraphNode key={`level-node-${levelIndex}`} id={level} />;
                        })}
                    </div>
                ))}
            </div>

            {/* edges */}
            {getAllEdges(graphData).map((edge, index) => {
                return <Edge key={`edge-${index}`} startId={edge.src} endId={edge.dst} />;
            })}
        </Xwrapper>
    );
}
