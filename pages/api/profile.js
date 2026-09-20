import { readDB, writeDB, findUserById } from "../../lib/db";

const VALID_BONUS_CODES = { MONETARS10: 1.0, WELCOME5: 0.5 };

export default function handler(req, res) {
  if (req.method === "GET") {
    const { userId } = req.query;
    const db = readDB();
    const profile = db.profiles[userId];
    if (!profile) return res.status(404).json({ message: "Profile not found." });
    return res.status(200).json({ profile });
  }

  if (req.method === "PUT") {
    const { userId, field, value } = req.body || {};
    if (!userId || !field) {
      return res.status(400).json({ message: "userId and field are required." });
    }

    const db = readDB();
    const user = findUserById(db, userId);
    if (!user || !db.profiles[userId]) {
      return res.status(404).json({ message: "Account not found." });
    }

    if (field === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        return res.status(400).json({ message: "Please enter a valid email address." });
      }
      const clash = db.users.find((u) => u.id !== userId && u.email.toLowerCase() === String(value).toLowerCase());
      if (clash) return res.status(409).json({ message: "That email is already in use." });
      user.email = value;
    }

    if (field === "displayName") {
      if (!String(value || "").trim()) {
        return res.status(400).json({ message: "Display name cannot be empty." });
      }
      user.username = value;
    }

    if (field === "__bonusCode") {
      const profile = db.profiles[userId];
      const payout = VALID_BONUS_CODES[value];
      if (payout === undefined) {
        return res.status(400).json({ message: "That bonus code is invalid or has expired." });
      }
      profile.redeemedBonusCodes = profile.redeemedBonusCodes || [];
      if (profile.redeemedBonusCodes.includes(value)) {
        return res.status(409).json({ message: "You've already redeemed this code." });
      }
      profile.redeemedBonusCodes.push(value);
      profile.balance = Math.round((profile.balance + payout) * 100) / 100;
      writeDB(db);
      return res.status(200).json({ profile, message: `Bonus code redeemed: +$${payout.toFixed(2)}` });
    }

    db.profiles[userId][field] = value;
    writeDB(db);

    return res.status(200).json({ profile: db.profiles[userId], user: { id: user.id, email: user.email, username: user.username } });
  }

  if (req.method === "DELETE") {
    const { userId } = req.body || {};
    if (!userId) return res.status(400).json({ message: "userId is required." });

    const db = readDB();
    db.users = db.users.filter((u) => u.id !== userId);
    delete db.profiles[userId];
    writeDB(db);

    return res.status(200).json({ message: "Account deleted." });
  }

  res.setHeader("Allow", "GET, PUT, DELETE");
  return res.status(405).json({ message: "Method not allowed" });
}
