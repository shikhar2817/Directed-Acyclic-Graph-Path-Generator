import { verifyDAG } from "../../src/utils";

describe("Utils", () => {
    describe("verify DAG", () => {
        it("given correct DAG return value should be true", () => {
            const data = {
                1: ["2", "3", "4", "5"],
                2: ["6"],
                3: ["6", "7"],
                4: ["7", "8"],
                5: ["8"],
            };
            const verdict = verifyDAG({ graphData: data, root: "1" });
            expect(verdict).toBe(true);
        });

        it("given wrong DAG with self loop return value should be false", () => {
            const data = { 1: ["1"] };
            const verdict = verifyDAG({ graphData: data, root: "1" });
            expect(verdict).toBe(false);
        });

        it("given empty DAG return value should be true", () => {
            const data = {};
            const verdict = verifyDAG({ graphData: data, root: "" });
            expect(verdict).toBe(true);
        });
    });
});
