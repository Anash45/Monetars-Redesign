import { readDB, findUserByEmail, publicUser } from "../../../lib/db";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const db = readDB();
  const user = findUserByEmail(db, email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Incorrect email or password." });
  }

  const profile = db.profiles[user.id] || null;
  return res.status(200).json({ user: publicUser(user), profile });
}
