import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PORT } from "./env";
import { generatePaths } from "./routes";

const app: Express = express();
app.use(
    cors({
        credentials: true,
    })
);
app.use(bodyParser.json());

app.listen(PORT, () => console.log("Server Running on Port " + PORT));

app.get("/api/health", (_req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "System is healthy 🟢" });
    } catch (error: unknown) {
        console.log("Server Failed: ", error);
        res.status(500).json({ message: "System is Sick 🔴" });
    }
});

app.use("/api/generate-all-paths", generatePaths);
