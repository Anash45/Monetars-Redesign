import { readDB } from "../../../lib/db";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed" });
  }
  const db = readDB();
  return res.status(200).json({ leaderboard: db.leaderboard });
}
