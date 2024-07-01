import { Router } from "express";

import { submitFeedback } from "../controller/feedback.controller.js";

const router = Router();

router.route("/feedback").post(submitFeedback)

export default router;