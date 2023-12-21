import React from "react";
import Xarrow from "react-xarrows";

interface Props {
    startId: string;
    endId: string;
}

export default function Edge({ startId, endId }: Props) {
    return <Xarrow start={startId} end={endId} path="straight" color="red" />;
}
