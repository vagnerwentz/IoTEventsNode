import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_SECRET || "default_secret";

// Payload do token
const payload = {
  id: 1,
  name: "Admin",
  role: "admin"
};

// Gera o token com tempo de expiração de 1 hora
const token = jwt.sign(payload, secret, { expiresIn: "1h" });

console.log("Generated Token:", token);
