import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "../../components/dashboard/Layout";
import { useAuth } from "../../context/AuthContext";

const DEFAULT_PROFILE = {
  displayName: "Adeel Raza",
  email: "asiadeel9@gmail.com",
  visibility: "Private",
  language: "English",
  twoFactorEnabled: false,
};

function ChangeField({ label, type = "text", field, value, options, onSave }) {
  const [draft, setDraft] = useState(value);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  async function handleChange() {
    if (draft === value) return;
    setSaving(true);
    try {
      await onSave(field, draft);
      toast.success(`${label} updated.`);
    } catch (err) {
      toast.error(err.message);
      setDraft(value);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="row px-sm-4 align-items-center">
      <div className="col-lg-3">
        <label className="sb-label d-block mb-lg-0 mb-2 ps-2">{label}</label>
      </div>
      <div className="col-lg-9">
        <div className="position-relative">
          {options ? (
            <select
              name={field}
              id={field}
              className="sbi-inp form-control"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            >
              {options.map((opt) => (
                <option value={opt} key={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              name={field}
              id={field}
              className="sbi-inp form-control"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
            />
          )}
          <button type="button" className="btn sb-btn" onClick={handleChange} disabled={saving || draft === value}>
            {saving ? "Saving…" : "Change"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const { user, profile, updateProfile, deleteAccount } = useAuth();
  const activeProfile = profile || DEFAULT_PROFILE;
  const [twoFactorSaving, setTwoFactorSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleFieldSave(field, value) {
    if (!user) {
      throw new Error("Sign in to save your account settings.");
    }
    await updateProfile(field, value);
  }

  async function handleToggle2FA() {
    if (!user) {
      toast.error("Sign in to manage two-factor authentication.");
      return;
    }
    setTwoFactorSaving(true);
    try {
      await updateProfile("twoFactorEnabled", !activeProfile.twoFactorEnabled);
      toast.success(activeProfile.twoFactorEnabled ? "Two-factor authentication disabled." : "Two-factor authentication activated.");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setTwoFactorSaving(false);
    }
  }

  async function handleDeleteAccount() {
    if (!user) {
      toast.error("Sign in first to delete an account.");
      return;
    }
    if (!window.confirm("This will permanently delete your account. Continue?")) return;
    setDeleting(true);
    try {
      await deleteAccount();
      toast.success("Account deleted.");
      window.location.href = "/";
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleting(false);
    }
  }

  return (
    <Layout>
  <section className="settings-sec py-5">
    <div className="container pe-xxl-5">
      <div className="nav-tabs-cont px-md-4 px-0 mb-md-4 mb-2">
        <h3 className="mb-0 f-26p fw-semibold poppins text-white">
          Settings
        </h3>
        <div className="d-flex align-items-center gap-sm-4 gap-3">
          <div className="form-check form-switch px-4 py-3 position-relative rounded-pill">
            <input className="form-check-input" onChange={() => { checkSwitch() }} type="checkbox" id="showUSD" />
            <label className="form-check-label" htmlFor="showUSD">
              Show USD
            </label>
          </div>
          <div className="form-check form-switch px-4 py-3 position-relative rounded-pill">
            <input className="form-check-input" onChange={() => { checkSwitch() }} checked type="checkbox" id="liveStats" />
            <label className="form-check-label" htmlFor="liveStats">
              Live Stats
            </label>
          </div>
        </div>
      </div>
      <div className="settings-boxes">
        <div className="setting-box sb-1 d-flex flex-column gap-3">
          <ChangeField label="Display Name" field="displayName" value={activeProfile.displayName} onSave={handleFieldSave} />
          <ChangeField label="Email Address" field="email" type="email" value={activeProfile.email} onSave={handleFieldSave} />
          <ChangeField label="Profile Visibility" field="visibility" value={activeProfile.visibility} options={["Private", "Public"]} onSave={handleFieldSave} />
          <ChangeField label="Language" field="language" value={activeProfile.language} options={["English", "German"]} onSave={handleFieldSave} />
        </div>
        <div className="setting-box sb-2 gap-4 d-flex flex-column">
          <div className="d-flex flex-column">
            <h3 className="mb-0 page-title fw-semibold text-white">
              Two-Factor Authentication
            </h3>
            <p className="mb-0 sb-desc fw-medium f-14p mb-2">
              Activate your 2FA to make your account more secure.
            </p>
          </div>
          <button
            className="btn fw-semibold sb-btn-primary text-white p-md-4 px-4 py-3 rounded-pill w-100"
            type="button"
            onClick={handleToggle2FA}
            disabled={twoFactorSaving}
          >
            {twoFactorSaving ? "Saving…" : activeProfile.twoFactorEnabled ? "Deactivate" : "Activate"}
          </button>
        </div>
        <div className="setting-box sb-3 gap-4 d-flex flex-column">
          <div className="d-flex flex-column">
            <h3 className="mb-0 page-title fw-semibold text-white">
              Danger Zone
            </h3>
            <p className="mb-0 sb-desc fw-medium f-14p mb-2">
              Once you delete your account, there is no going back. Please be certain.
            </p>
          </div>
          <button
            className="btn fw-semibold sb-btn-danger text-white p-md-4 px-4 py-3 rounded-pill w-100"
            type="button"
            onClick={handleDeleteAccount}
            disabled={deleting}
          >
            {deleting ? "Deleting…" : "Delete Account"}
          </button>
        </div>
      </div>
    </div>
  </section>

    </Layout>
  );
}
