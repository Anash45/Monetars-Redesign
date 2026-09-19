export default function Footer() {
  return (
  <footer>
    <div className="container">
      <div className="mb-4 text-md-start text-center">
        <a href="/">
          <img src="/assets/img/logo white.png" height="32" alt="White Logo" />
        </a>
      </div>
      <div className="d-flex f-divs justify-content-between mb-4">
        <div className="f-div">
          <h3 className="fw-bold f-title mb-2 pb-1">
            Account
          </h3>
          <a href="#" className="d-block mb-2" onClick={() => { openModal('signin') }}>
            Sign in
          </a>
          <a href="#" className="d-block mb-2" onClick={() => { openModal('signup') }}>
            Register
          </a>
          <a href="/faq" className="d-block mb-2">
            FAQ
          </a>
        </div>
        <div className="f-div ps-4">
          <h3 className="fw-bold f-title mb-2 pb-1">
            Company
          </h3>
          <a href="/about" className="d-block mb-2">
            About us
          </a>
          <a href="/blog" className="d-block mb-2">
            Blog
          </a>
          <a href="/contact" className="d-block mb-2">
            Contact
          </a>
        </div>
        <div className="f-div ps-4">
          <h3 className="fw-bold f-title mb-2 pb-1">
            Legal
          </h3>
          <a href="/privacy" className="d-block mb-2">
            Privacy Policy
          </a>
          <a href="/terms" className="d-block mb-2">
            Terms of service
          </a>
          <a href="/imprint" className="d-block mb-2">
            Imprint
          </a>
        </div>
        <div className="f-div ps-4">
          <h3 className="fw-bold f-title mb-2 pb-1">
            Social
          </h3>
          <a href="#" className="d-block mb-2">
            <i className="fa-brands fa-discord"></i>
            <span className="ms-1">
              Discord
            </span>
          </a>
          <a href="#" className="d-block mb-2">
            <i className="fa-brands fa-instagram"></i>
            <span className="ms-1">
              Instagram
            </span>
          </a>
          <a href="#" className="d-block mb-2">
            <i className="fa-brands fa-twitter"></i>
            <span className="ms-1">
              Twitter
            </span>
          </a>
        </div>
      </div>
      <div className=" text-center gap-2 d-flex justify-content-md-between justify-content-center flex-md-row flex-column align-items-center">
        <p className="m-0">
          Monetars.com | All rights reserved
        </p>
        <p className="m-0">
          © Copyright 2020 - 2024
        </p>
      </div>
    </div>
  </footer>  );
}
