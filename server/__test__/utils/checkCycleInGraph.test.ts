import { checkCycleInGraph } from "../../src/utils";

describe("Utils", () => {
    describe("check cycles in graph", () => {
        it("given correct DAG return value should be false", () => {
            const data = {
                1: [2, 3, 4, 5],
                2: [6],
                3: [6, 7],
                4: [7, 8],
                5: [8],
            };
            const emptyMap = new Map<any, boolean>();
            const verdict = checkCycleInGraph({ graphData: data, node: 1, visitedNodes: emptyMap });
            expect(verdict).toBe(false);
        });

        it("given cyclic graph return value should be true", () => {
            const data = {
                1: [2, 3, 4, 5],
                2: [1, 6],
                3: [6, 7],
                4: [7, 8],
                5: [8],
                7: [4],
            };
            const emptyMap = new Map<any, boolean>();
            const verdict = checkCycleInGraph({ graphData: data, node: 1, visitedNodes: emptyMap });
            expect(verdict).toBe(true);
        });

        it("given empty graph return value should be false", () => {
            const data = {};
            const emptyMap = new Map<any, boolean>();
            const verdict = checkCycleInGraph({ graphData: data, node: "", visitedNodes: emptyMap });
            expect(verdict).toBe(false);
        });
    });
});
