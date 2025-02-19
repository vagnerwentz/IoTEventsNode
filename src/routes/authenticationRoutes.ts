import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/login", (req: any, res: any) => {
    const { id, name } = req.body;
  
    if (!id || !name) {
      return res.status(400).json({ message: "Missing id or name" });
    }
  
    const payload = { id, name };
    const secret = process.env.JWT_SECRET || "default_secret";
    console.log("secret " + secret);
    const token = jwt.sign(payload, secret, { expiresIn: "1h" });
  
    res.json({ token });
});

export default router;