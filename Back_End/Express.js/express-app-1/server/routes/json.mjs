import { Router } from "express";
import { read_data } from "../../db/users.mjs";

const router = Router();

router.get("/json", (req, res) => {
  if (req.cookies?.logedIn?.user.admin) {
    return res.status(200).json(read_data());
  }

  const msg = "You are not authorized to access this data";
  res.status(403).render("message", { msg });
});

export default router;
