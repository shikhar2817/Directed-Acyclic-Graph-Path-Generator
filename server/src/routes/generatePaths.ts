import express, { Request, Response } from "express";
import { generateAllPaths, verifyDAG } from "../utils";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const { data, root } = req.body;
        // if data or root is not provided
        if (!data) throw new Error("Data is not provided");
        if (!root) throw new Error("Root is not provided");

        // check if data is DAG or not
        if (!verifyDAG({ graphData: data, root })) throw new Error("Graph is not a DAG");

        // generating all paths from root
        const paths = generateAllPaths({ graphData: data, root });

        res.status(200).json({ paths });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
