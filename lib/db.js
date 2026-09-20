import fs from "fs";
import path from "path";

const SEED_PATH = path.join(process.cwd(), "data", "db.json");
const WRITABLE_DIR = process.env.VERCEL ? "/tmp" : path.join(process.cwd(), "data");
const DB_PATH = path.join(WRITABLE_DIR, "db.json");

export function readDB() {
  const source = fs.existsSync(DB_PATH) ? DB_PATH : SEED_PATH;
  return JSON.parse(fs.readFileSync(source, "utf-8"));
}

export function writeDB(db) {
  if (!fs.existsSync(WRITABLE_DIR)) fs.mkdirSync(WRITABLE_DIR, { recursive: true });
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

export function findUserByEmail(db, email) {
  return db.users.find((u) => u.email.toLowerCase() === String(email).toLowerCase());
}

export function findUserById(db, id) {
  return db.users.find((u) => u.id === id);
}

export function publicUser(user) {
  const { password, ...rest } = user;
  return rest;
}
