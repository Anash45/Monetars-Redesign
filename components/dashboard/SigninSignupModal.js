import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

function closeSigninSignupModal() {
  document.querySelector("#signinSignup .btn-modal-close")?.click();
}

export default function SigninSignupModal() {
  const { login, signup } = useAuth();

  const [signinValues, setSigninValues] = useState({ email: "", password: "" });
  const [signinError, setSigninError] = useState("");
  const [signinSubmitting, setSigninSubmitting] = useState(false);

  const [signupValues, setSignupValues] = useState({ email: "", username: "", password: "", confirmPassword: "" });
  const [signupError, setSignupError] = useState("");
  const [signupSubmitting, setSignupSubmitting] = useState(false);

  async function handleSignin(e) {
    e.preventDefault();
    setSigninError("");
    setSigninSubmitting(true);
    try {
      const { user } = await login(signinValues);
      toast.success(`Welcome back, ${user.username}!`);
      closeSigninSignupModal();
    } catch (err) {
      setSigninError(err.message);
      toast.error(err.message);
    } finally {
      setSigninSubmitting(false);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    setSignupError("");
    if (signupValues.password !== signupValues.confirmPassword) {
      setSignupError("Passwords do not match.");
      return;
    }
    setSignupSubmitting(true);
    try {
      const { user } = await signup(signupValues);
      toast.success(`Account created — welcome, ${user.username}!`);
      closeSigninSignupModal();
    } catch (err) {
      setSignupError(err.message);
      toast.error(err.message);
    } finally {
      setSignupSubmitting(false);
    }
  }

  return (
  <div className="modal fade ss-modal" id="signinSignup" tabIndex="-1" aria-labelledby="signinSignupLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn ms-auto btn-modal-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="fa fa-close"></i>
          </button>
        </div>
        <div className="modal-body pb-5 pt-0 inter">
          <div className="row">
            <div className="col-12 px-4">
              <ul className="nav nav-pills mb-4 mt-0" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link px-4 nav-signin active" id="pills-signin-tab" data-bs-toggle="pill" data-bs-target="#pills-signin" type="button" role="tab" aria-controls="pills-signin" aria-selected="true">
                    Sign In
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link px-4 nav-signup ms-3" id="pills-signup-tab" data-bs-toggle="pill" data-bs-target="#pills-signup" type="button" role="tab" aria-controls="pills-signup" aria-selected="false">
                    Sign Up
                  </button>
                </li>
              </ul>
              <div className="tab-content form-tabs" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-signin" role="tabpanel" aria-labelledby="pills-signin-tab">
                  <form onSubmit={handleSignin}>
                    <div className="form-group mb-3">
                      <div className="d-flex align-items-center w-100 mb-1">
                        <label className="nowrap">
                          Email Address
                        </label>
                        <div className="p-2 w-100">
                          <div className="label-line"></div>
                        </div>
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control"
                        required
                        value={signinValues.email}
                        onChange={(e) => setSigninValues((v) => ({ ...v, email: e.target.value }))}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <div className="d-flex align-items-center w-100 mb-1">
                        <label className="nowrap">
                          Password
                        </label>
                        <div className="p-2 w-100">
                          <div className="label-line"></div>
                        </div>
                      </div>
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        required
                        value={signinValues.password}
                        onChange={(e) => setSigninValues((v) => ({ ...v, password: e.target.value }))}
                      />
                    </div>
                    {signinError && (
                      <div className="form-group mb-3">
                        <small className="text-danger">{signinError}</small>
                      </div>
                    )}
                    <div className="form-group mb-4">
                      <div className="d-flex align-items-center w-100 gap-2">
                        <label className="accept-note">
                          <small>
                            Forgot your password?
                            <a href="/privacy">
                              Click here to reset your password
                            </a>
                          </small>
                        </label>
                      </div>
                    </div>
                    <div className="ss-btns d-flex justify-content-lg-start justify-content-center gap-3">
                      <button type="submit" className="btn btn-form-main px-4 py-2" disabled={signinSubmitting}>
                        {signinSubmitting ? "Signing In…" : "Sign In"}
                      </button>
                      <span className="ss-or">
                        <span>
                          OR
                        </span>
                      </span>
                      <a href="#" className="btn btn-form-google">
                        <img src="/dashboard-assets/img/google.png" alt="Google" height="23" />
                      </a>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                  <form onSubmit={handleSignup}>
                    <div className="form-group mb-3">
                      <div className="d-flex align-items-center w-100 mb-1">
                        <label className="nowrap">
                          Email Address
                        </label>
                        <div className="p-2 w-100">
                          <div className="label-line"></div>
                        </div>
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control"
                        required
                        value={signupValues.email}
                        onChange={(e) => setSignupValues((v) => ({ ...v, email: e.target.value }))}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <div className="d-flex align-items-center w-100 mb-1">
                        <label className="nowrap">
                          Username
                        </label>
                        <div className="p-2 w-100">
                          <div className="label-line"></div>
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        required
                        value={signupValues.username}
                        onChange={(e) => setSignupValues((v) => ({ ...v, username: e.target.value }))}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <div className="d-flex align-items-center w-100 mb-1">
                        <label className="nowrap">
                          Password
                        </label>
                        <div className="p-2 w-100">
                          <div className="label-line"></div>
                        </div>
                      </div>
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        required
                        minLength={6}
                        value={signupValues.password}
                        onChange={(e) => setSignupValues((v) => ({ ...v, password: e.target.value }))}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <div className="d-flex align-items-center w-100 mb-1">
                        <label className="nowrap">
                          Confirm Password
                        </label>
                        <div className="p-2 w-100">
                          <div className="label-line"></div>
                        </div>
                      </div>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="form-control"
                        required
                        value={signupValues.confirmPassword}
                        onChange={(e) => setSignupValues((v) => ({ ...v, confirmPassword: e.target.value }))}
                      />
                    </div>
                    {signupError && (
                      <div className="form-group mb-3">
                        <small className="text-danger">{signupError}</small>
                      </div>
                    )}
                    <div className="form-group mb-4">
                      <div className="d-flex align-items-center w-100 gap-2">
                        <input type="checkbox" name="" id="agree-terms" required />
                        <label className="accept-note" htmlFor="agree-terms">
                          By signing up, you are agreeing to our
                          <a className="text-decoration-underline" href="/privacy">
                            Privacy Policy
                          </a>
                          and
                          <a className="text-decoration-underline" href="/terms">
                            Term of Service.
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="ss-btns d-flex justify-content-lg-start justify-content-center gap-3">
                      <button type="submit" className="btn btn-form-main px-4 py-2" disabled={signupSubmitting}>
                        {signupSubmitting ? "Creating Account…" : "Sign Up"}
                      </button>
                      <span className="ss-or">
                        <span>
                          OR
                        </span>
                      </span>
                      <a href="#" className="btn btn-form-google">
                        <img src="/dashboard-assets/img/google.png" alt="Google" height="23" />
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  );
}
