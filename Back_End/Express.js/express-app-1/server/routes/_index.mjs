import Router from "express";
import usersRouter from "./users.mjs";
import jsonRouter from "./json.mjs";

const router = Router();

router.use(usersRouter);
router.use(jsonRouter);

export default router;
