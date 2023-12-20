import { generateAllPaths } from "../../src/utils";

describe("Utils", () => {
    describe("check paths generated", () => {
        it("given DAG should return list of all paths from root", () => {
            const data = {
                1: [2, 3, 4, 5],
                2: [6],
                3: [6, 7],
                4: [7, 8],
                5: [8],
            };
            const allPaths = generateAllPaths({ graphData: data, root: 1 });
            expect(allPaths).toStrictEqual([
                [1, 2, 6],
                [1, 3, 6],
                [1, 3, 7],
                [1, 4, 7],
                [1, 4, 8],
                [1, 5, 8],
            ]);
        });
        it("given empty DAG should return list with root node only", () => {
            const data = {};
            const allPaths = generateAllPaths({ graphData: data, root: 1 });
            expect(allPaths).toStrictEqual([[1]]);
        });
        it("given null DAG should return list with root node only", () => {
            const data = {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
            };
            const allPaths = generateAllPaths({ graphData: data, root: 1 });
            expect(allPaths).toStrictEqual([[1]]);
        });
        it("given disjoint DAG should return list of all paths from root with visiting disjoint nodes", () => {
            const data = {
                1: [2, 3, 4],
                2: [3],
                3: [],
                4: [],
                5: [],
            };
            const allPaths = generateAllPaths({ graphData: data, root: 1 });
            expect(allPaths).toStrictEqual([
                [1, 2, 3],
                [1, 3],
                [1, 4],
            ]);
        });
    });
});
