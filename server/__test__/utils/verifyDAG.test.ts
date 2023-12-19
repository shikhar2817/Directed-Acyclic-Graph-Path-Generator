import verifyDAG from "../../src/utils/verifyDAG";

describe("Utils", () => {
    describe("verify DAG", () => {
        it("given correct DAG return value should be true", () => {
            const data = {
                1: [2, 3, 4, 5],
                2: [6],
                3: [6, 7],
                4: [7, 8],
                5: [8],
            };
            const verdict = verifyDAG(data, 1);
            expect(verdict).toBe(true);
        });

        it("given wrong DAG return value should be false", () => {
            const data = { test: "test" };
            const verdict = verifyDAG(data, 1);
            expect(verdict).toBe(false);
        });

        it("given empty DAG return value should be true", () => {
            const data = {};
            const verdict = verifyDAG(data, undefined);
            expect(verdict).toBe(true);
        });
    });
});
