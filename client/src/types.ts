export type GraphNodeType = string;

export interface GraphData {
    [key: GraphNodeType]: GraphNodeType[];
}

export interface nodeLevelsObjType {
    [key: number]: GraphNodeType[];
}

export interface nodeLevelsType {
    [key: GraphNodeType]: number;
}

export interface FormInputType {
    node: GraphNodeType;
    srcNode: GraphNodeType;
    dstNode: GraphNodeType;
    rootNode: GraphNodeType;
}

export interface EdgeType {
    src: GraphNodeType;
    dst: GraphNodeType;
}
