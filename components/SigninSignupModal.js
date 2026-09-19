export default function SigninSignupModal() {
  return (
  <div className="modal fade ss-modal" id="signinSignup" tabIndex="-1" aria-labelledby="signinSignupLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn ms-auto btn-modal-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="fa fa-close"></i>
          </button>
        </div>
        <div className="modal-body pb-5 pt-0 roboto">
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
                  <form action="" method="post">
                    <div className="form-group mb-3">
                      <div className="d-flex align-items-center w-100 mb-1">
                        <label className="nowrap">
                          Email Address
                        </label>
                        <div className="p-2 w-100">
                          <div className="label-line"></div>
                        </div>
                      </div>
                      <input type="email" placeholder="Email Address" className="form-control" />
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
                      <input type="password" placeholder="Password" className="form-control" />
                    </div>
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
                      <button type="submit" className="btn btn-form-main px-4 py-2">
                        Sign In
                      </button>
                      <span className="ss-or">
                        <span>
                          OR
                        </span>
                      </span>
                      <a href="#" className="btn btn-form-google">
                        <img src="/assets/img/google.png" alt="Google" height="23" />
                      </a>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                  <form action="" method="post">
                    <div className="form-group mb-3">
                      <div className="d-flex align-items-center w-100 mb-1">
                        <label className="nowrap">
                          Email Address
                        </label>
                        <div className="p-2 w-100">
                          <div className="label-line"></div>
                        </div>
                      </div>
                      <input type="email" placeholder="Email Address" className="form-control" />
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
                      <input type="text" placeholder="Username" className="form-control" />
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
                      <input type="password" placeholder="Password" className="form-control" />
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
                      <input type="password" placeholder="Confirm Password" className="form-control" />
                    </div>
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
                      <button type="submit" className="btn btn-form-main px-4 py-2">
                        Sign Up
                      </button>
                      <span className="ss-or">
                        <span>
                          OR
                        </span>
                      </span>
                      <a href="#" className="btn btn-form-google">
                        <img src="/assets/img/google.png" alt="Google" height="23" />
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
