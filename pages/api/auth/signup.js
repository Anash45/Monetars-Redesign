import { readDB, writeDB, findUserByEmail, publicUser } from "../../../lib/db";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, username, password, confirmPassword } = req.body || {};

  if (!email || !username || !password) {
    return res.status(400).json({ message: "Email, username and password are required." });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters." });
  }
  if (confirmPassword !== undefined && password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  const db = readDB();

  if (findUserByEmail(db, email)) {
    return res.status(409).json({ message: "An account with this email already exists." });
  }

  const user = {
    id: `u_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    email,
    username,
    password,
    createdAt: new Date().toISOString(),
  };
  db.users.push(user);
  db.profiles[user.id] = {
    displayName: username,
    email,
    visibility: "Private",
    language: "English",
    balance: 150,
    referralLink: `https://dolares.app/refer/${user.id}`,
    claimedRewardDays: [],
    twoFactorEnabled: false,
  };
  writeDB(db);

  return res.status(201).json({ user: publicUser(user), profile: db.profiles[user.id] });
}
