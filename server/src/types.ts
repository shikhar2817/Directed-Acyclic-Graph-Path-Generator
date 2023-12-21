export type GraphNode = string;

export interface GraphData {
    [key: GraphNode]: GraphNode[];
}
