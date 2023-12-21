import { Xwrapper } from "react-xarrows";
import { Edge, GraphNode } from ".";
import { GraphNodeType } from "@/types";
import { getAllEdgesFromPath, getNodeLevels } from "@/utils";

interface Props {
    paths: GraphNodeType[][];
}

export default function Graph({ paths }: Props) {
    return (
        <Xwrapper>
            {/* nodes */}
            <div className="h-[60vh] grid place-content-around">
                {Object.values(getNodeLevels({ paths })).map((level: GraphNodeType[], index: number) => (
                    <div key={`graph-level-${index}`} className="w-screen flex flex-row justify-evenly">
                        {level.map((level: GraphNodeType, levelIndex: number) => {
                            return <GraphNode key={`node-level-${levelIndex}`} id={level} />;
                        })}
                    </div>
                ))}
            </div>

            {/* edges */}
            {getAllEdgesFromPath({ paths }).map((edge, index) => {
                return <Edge key={`edge-${edge.src}-${edge.dst}-${index}`} startId={edge.src} endId={edge.dst} />;
            })}
        </Xwrapper>
    );
}
