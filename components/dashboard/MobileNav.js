export default function MobileNav() {
  return (
  <div className="mobile-nav py-2 px-4">
    <div className="d-flex justify-content-between">
      <a className="m-nav-link py-2 px-1" onClick={() => { sidebarMenu(event) }}>
        <i className="fa fa-bars"></i>
        <span>
          Menu
        </span>
      </a>
      <a className="m-nav-link py-2 px-1" href="/dashboard/affiliate">
        <i className="fa-regular fa-dollar"></i>
        <span>
          Earn
        </span>
      </a>
      <a className="m-nav-link py-2 px-1" href="/dashboard/lobby">
        <i className="fa fa-home"></i>
        <span>
          Lobby
        </span>
      </a>
      <a className="m-nav-link py-2 px-1" href="/dashboard/rewards">
        <i className="fa fa-gift"></i>
        <span>
          Rewards
        </span>
      </a>
      <a className="m-nav-link py-2 px-1" onClick={() => { chatWindow() }} href="#">
        <i className="fa-regular fa-message"></i>
        <span>
          Chat
        </span>
      </a>
    </div>
  </div>  );
}
