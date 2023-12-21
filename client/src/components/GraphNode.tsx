import { useXarrow } from "react-xarrows";
import Draggable from "react-draggable";

interface Props {
    id: string;
}

export default function GraphNode({ id }: Props) {
    const updateXarrow = useXarrow();
    return (
        <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
            <div
                id={id}
                className="flex items-center cursor-move justify-center bg-yellow-600 w-16 h-16 text-white text-lg rounded-full"
            >
                {id}
            </div>
        </Draggable>
    );
}
