import { readDB, writeDB } from "../../lib/db";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userId, method, amount, destination } = req.body || {};

  if (!userId || !method) {
    return res.status(400).json({ message: "userId and method are required." });
  }

  const numericAmount = Number(amount);
  if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
    return res.status(400).json({ message: "Enter a valid withdrawal amount." });
  }
  if (numericAmount < 5) {
    return res.status(400).json({ message: "Minimum withdrawal amount is $5." });
  }

  const db = readDB();
  const profile = db.profiles[userId];
  if (!profile) return res.status(404).json({ message: "Account not found." });

  const balanceInDollars = profile.balance;
  if (numericAmount > balanceInDollars) {
    return res.status(400).json({ message: "Insufficient balance for this withdrawal." });
  }

  profile.balance = Math.round((profile.balance - numericAmount) * 100) / 100;
  db.withdrawals.push({
    id: `w_${Date.now().toString(36)}`,
    userId,
    method,
    destination: destination || null,
    amount: numericAmount,
    status: "pending",
    createdAt: new Date().toISOString(),
  });
  writeDB(db);

  return res.status(200).json({ profile, message: "Withdrawal request submitted." });
}
