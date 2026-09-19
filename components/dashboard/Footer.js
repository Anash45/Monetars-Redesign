export default function Footer() {
  return (
  <footer className="pt-4 pb-lg-0 pb-5 mb-lg-0 mb-3">
    <div className="f-top py-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <a href="/dashboard">
            <img src="/dashboard-assets/img/Logo-light.png" alt="Logo" className="f-logo" />
          </a>
          <ul className="mb-0 p-0 d-flex align-items-center f-social-links">
            <li>
              <a href="https://twitter.com/dolares_app" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dolares_app/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/dolares/" target="_blank">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/dolaresapp" target="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="f-middle">
      <div className="container">
        <div className="row">
          <div className="col-10 flex-grow-1">
            <div className="row">
              <div className="col-6 d-md-none d-block">
                <p className="d-flex justify-content-center gap-1 mb-0">
                  <a className="text-white fw-semibold d-flex align-items-center gap-1 bd-view collapsed" data-bs-toggle="collapse" href="#collapse-1" role="button" aria-expanded="false" aria-controls="collapse-1">
                    <span>
                      About
                    </span>
                    <i className="fa fa-chevron-down"></i>
                  </a>
                </p>
                <div className="collapse bd-cat-desc pd-purple mb-0" id="collapse-1">
                  <ul className="list-unstyled p-0 mb-0 f-links lato mt-3 d-flex flex-column align-items-center">
                    <li>
                      <a href="/dashboard/blog" className="f-link">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/privacy-policy" className="f-link">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/terms-and-conditions" className="f-link">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 d-md-none d-block">
                <p className="d-flex justify-content-center gap-1 mb-0">
                  <a className="text-white fw-semibold d-flex align-items-center gap-1 bd-view collapsed" data-bs-toggle="collapse" href="#collapse-2" role="button" aria-expanded="false" aria-controls="collapse-2">
                    <span>
                      Support
                    </span>
                    <i className="fa fa-chevron-down"></i>
                  </a>
                </p>
                <div className="collapse bd-cat-desc pd-purple mb-0" id="collapse-2">
                  <ul className="list-unstyled p-0 mb-0 f-links lato mt-3 d-flex flex-column align-items-center">
                    <li>
                      <a href="/dashboard/contact" className="f-link">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/faq" className="f-link">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/imprint" className="f-link">
                        Imprint
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 pb-4 mb-3 pb-lg-0 mb-lg-0 d-md-block d-none">
                <div className="d-flex flex-column f-flex-1">
                  <h4 className="f-sec-title mb-0 inter text-white">
                    Account
                  </h4>
                  <ul className="list-unstyled p-0 mb-0 f-links lato">
                    <li>
                      <a href="/dashboard/login" className="f-link">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/register" className="f-link">
                        Register
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/faq" className="f-link">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-4 mb-3 pb-lg-0 mb-lg-0 d-md-block d-none">
                <div className="d-flex flex-column f-flex-1">
                  <h4 className="f-sec-title mb-0 inter text-white">
                    Company
                  </h4>
                  <ul className="list-unstyled p-0 mb-0 f-links lato">
                    <li>
                      <a href="/dashboard/about" className="f-link">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/blog" className="f-link">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/contact" className="f-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-4 mb-3 pb-lg-0 mb-lg-0 d-md-block d-none">
                <div className="d-flex flex-column f-flex-1">
                  <h4 className="f-sec-title mb-0 inter text-white">
                    Legal
                  </h4>
                  <ul className="list-unstyled p-0 mb-0 f-links lato">
                    <li>
                      <a href="/dashboard/privacy-policy" className="f-link">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/terms-and-conditions" className="f-link">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="/dashboard/imprint" className="f-link">
                        Imprint
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-12 d-md-block d-none">
                <div className="d-flex flex-column f-flex-1 align-items-md-start align-items-center text-md-start text-center">
                  <h4 className="f-sec-title mb-0 inter text-white d-flex align-items-center gap-2 flex-wrap">
                    <span>
                      Play Anywhere
                    </span>
                    <img src="/dashboard-assets/img/rocket-1.svg" height="20" alt="" />
                  </h4>
                  <div className="d-flex flex-column">
                    <p className="mb-0">
                      <a href="/dashboard/contact" className="f-link">
                        Earn on the go! Download our Android App to keep times rolling & the Dolares flowing.
                      </a>
                    </p>
                    <a href="#">
                      <img src="/dashboard-assets/img/f-google-paly.png" alt="Google Play" height="84" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 f-extra"></div>
        </div>
      </div>
    </div>
    <div className="f-bottom py-5">
      <div className="container">
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <p className="mb-0">
            © 2024 Dolares. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>  );
}
