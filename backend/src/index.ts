import express from "express";
import cors from "cors";
import { SKILLS } from "./skills";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/v1/get-skills", async (req: any, res: any) => {
    try {
        return res.status(200).json({
            ok: true,
            skills: SKILLS.sort()
        });
    } catch(err) {
        return res.status(404).json({
            ok: false
        });
    }
});

app.listen(3000, () => console.log("server is running on port 3000"));