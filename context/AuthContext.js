import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext(null);
const STORAGE_KEY = "monetars_auth";

function loadStoredAuth() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function persistAuth(user, profile) {
  try {
    if (user) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, profile }));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // localStorage unavailable (private mode, etc.) — fall back to in-memory only
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = loadStoredAuth();
    if (stored) {
      setUser(stored.user);
      setProfile(stored.profile);
    }
    setReady(true);
  }, []);

  const signup = useCallback(async ({ email, username, password, confirmPassword }) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password, confirmPassword }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Could not create your account.");
    }
    setUser(data.user);
    setProfile(data.profile);
    persistAuth(data.user, data.profile);
    return data;
  }, []);

  const login = useCallback(async ({ email, password }) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Could not sign you in.");
    }
    setUser(data.user);
    setProfile(data.profile);
    persistAuth(data.user, data.profile);
    return data;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setProfile(null);
    persistAuth(null, null);
    toast.success("Signed out.");
  }, []);

  const refreshProfile = useCallback(async () => {
    if (!user) return null;
    const res = await fetch(`/api/profile?userId=${encodeURIComponent(user.id)}`);
    const data = await res.json();
    if (res.ok) {
      setProfile(data.profile);
      persistAuth(user, data.profile);
    }
    return data.profile;
  }, [user]);

  const updateProfile = useCallback(
    async (field, value) => {
      if (!user) throw new Error("You need to be signed in to do that.");
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, field, value }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Could not save that change.");
      }
      setProfile(data.profile);
      const nextUser = data.user ? { ...user, ...data.user } : user;
      setUser(nextUser);
      persistAuth(nextUser, data.profile);
      return data.profile;
    },
    [user]
  );

  const deleteAccount = useCallback(async () => {
    if (!user) throw new Error("You need to be signed in to do that.");
    const res = await fetch("/api/profile", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.id }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Could not delete your account.");
    }
    setUser(null);
    setProfile(null);
    persistAuth(null, null);
  }, [user]);

  const applyProfilePatch = useCallback(
    (patch) => {
      setProfile((prev) => {
        const next = { ...prev, ...patch };
        persistAuth(user, next);
        return next;
      });
    },
    [user]
  );

  return (
    <AuthContext.Provider
      value={{ user, profile, ready, signup, login, logout, refreshProfile, updateProfile, applyProfilePatch, deleteAccount }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
