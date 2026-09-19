export default function MobileSidebarNav() {
  return (
  <>
  <div className="mobile-nav py-2 px-4">
    <div className="d-flex justify-content-between">
      <a className="m-nav-link py-2 px-1" href="/earn">
        <i className="fa-regular fa-dollar-sign"></i>
        <span>
          Earn
        </span>
      </a>
      <a className="m-nav-link py-2 px-1" href="/withdraw">
        <i className="fa-regular fa-credit-card"></i>
        <span>
          Withdraw
        </span>
      </a>
      <a className="m-nav-link py-2 px-1" href="/leaders">
        <i className="fa-regular fa-star"></i>
        <span>
          Leaders
        </span>
      </a>
      <a className="m-nav-link py-2 px-1" href="/reward">
        <i className="fa fa-gift"></i>
        <span>
          Reward
        </span>
      </a>
      <a className="m-nav-link py-2 px-1" onClick={() => { chatWindow() }} href="#">
        <i className="fa-regular fa-message"></i>
        <span>
          Chat
        </span>
      </a>
    </div>
  </div>
  <aside className="sidebar">
    <div className="side-nav d-flex flex-column">
      <div className="p-3 w-100">
        <a className="navbar-brand d-inline-block" href="/">
          <img src="/assets/img/Monester-logo.png" alt="Monster Logo" className="show-light" style={{width: '180px'}} />
          <img src="/assets/img/Logo-light.png" alt="Monster Logo" className="show-dark" style={{width: '180px'}} />
        </a>
      </div>
      <div className="p-3 d-flex flex-column flex-grow-1">
        <nav className="px-0">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                <i className="fa-regular fa-user"></i>
                <span>
                  Profile
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/earn">
                <i className="fa-regular fa-dollar-sign"></i>
                <span>
                  Earn
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/withdraw">
                <i className="fa-regular fa-credit-card"></i>
                <span>
                  Withdraw
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/leaders">
                <i className="fa-regular fa-star"></i>
                <span>
                  Leaderbord
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reward">
                <i className="fa fa-gift"></i>
                <span>
                  Rewards
                </span>
              </a>
            </li>
            <li className="nav-item px-3 pt-4">
              <button className="btn btn-switch" data-switch="dark">
                <i className="fa fa-moon show-light"></i>
                <i className="fa fa-sun show-dark"></i>
                <span className="show-light">
                  Dark
                </span>
                <span className="show-dark">
                  Light
                </span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="mt-auto px-3">
          <a href="#" className="btn btn-logout">
            Logout
          </a>
        </div>
      </div>
    </div>
  </aside>
  </>
  );
}
