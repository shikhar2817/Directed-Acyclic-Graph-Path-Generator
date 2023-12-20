export type GraphNode = string | number;

export interface GraphData {
    [key: GraphNode]: GraphNode[];
}
