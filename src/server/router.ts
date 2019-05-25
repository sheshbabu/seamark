import express from "express";
import runAudit from "./routes/audit/runAudit";

const router = express.Router();

router.post("/", runAudit);

export default router;
