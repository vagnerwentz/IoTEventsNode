import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Access denied" });
    return;
  }

  try {
    const secret = process.env.JWT_SECRET || "default_secret";
    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
};
