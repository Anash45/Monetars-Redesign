import { readDB, writeDB } from "../../../lib/db";

const STREAK_PAYOUTS = {
  "Day 1": 0.3,
  "Day 2": 0.5,
  "Day 3": 0.75,
  "Day 4": 1.0,
  "Day 5": 1.5,
  "Day 6": 2.0,
  "Day 7": 5.0,
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userId, day } = req.body || {};
  if (!userId || !day) {
    return res.status(400).json({ message: "userId and day are required." });
  }

  const db = readDB();
  const profile = db.profiles[userId];
  if (!profile) return res.status(404).json({ message: "Account not found." });

  profile.claimedRewardDays = profile.claimedRewardDays || [];
  if (profile.claimedRewardDays.includes(day)) {
    return res.status(409).json({ message: `${day} has already been claimed.` });
  }

  const payout = STREAK_PAYOUTS[day];
  if (payout === undefined) {
    return res.status(400).json({ message: "Unknown reward day." });
  }

  profile.claimedRewardDays.push(day);
  profile.balance = Math.round((profile.balance + payout) * 100) / 100;
  writeDB(db);

  return res.status(200).json({ profile, claimed: day, payout });
}
