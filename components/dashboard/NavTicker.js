const TICKER_ITEMS = [
  { avatar: "/dashboard-assets/img/blog-1.jpg", title: "Revenue Universe", handle: "waynegordon163", badge: 14 },
  { letter: "M", title: "Monetary Boost", handle: "mia_hendricks", badge: 27 },
  { avatar: "/dashboard-assets/img/blog-2.jpg", title: "Cashout Streak", handle: "devon.parker", badge: 9 },
  { letter: "J", title: "Offer Wall Win", handle: "jasmine_lowe", badge: 41 },
  { avatar: "/dashboard-assets/img/blog-1.jpg", title: "Survey Payout", handle: "ryan_okafor", badge: 6 },
  { letter: "K", title: "Leaderboard Climb", handle: "keisha.n", badge: 33 },
];

export default function NavTicker() {
  return (
    <div className="nav-down">
      <div className="p-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="dropdown lang-dropdown">
              <button className="btn nav-down-btn nb-btn d-flex align-items-center" type="button">
                <i className="fa fa-globe"></i>
                <i className="fa fa-chevron-down"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark inter">
                <li>
                  <a className="dropdown-item active d-flex align-items-center gap-2" href="#">
                    <i className="fa fa-globe lang-img"></i>
                    <span>Global</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                    <img src="/dashboard-assets/img/united-states.png" className="lang-flag" alt="Flag" />
                    <span>United States</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                    <img src="/dashboard-assets/img/germany.png" className="lang-flag" alt="Flag" />
                    <span>German</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-carousel-container">
            <div className="nav-carousel">
              {TICKER_ITEMS.map((item, i) => (
                <div className="nc-item-cont" key={i}>
                  <a href="#" className="nc-item inter" onClick={() => { openModal('user') }}>
                    <div className="d-flex gap-2">
                      {item.avatar ? (
                        <img src={item.avatar} alt="NC Image" className="nc-img" />
                      ) : (
                        <span className="nc-img">
                          <span>{item.letter}</span>
                        </span>
                      )}
                      <div className="d-flex nc-text inter flex-column gap-1 justify-content-center">
                        <p className="nc-up mb-0">{item.title}</p>
                        <p className="nc-down mb-0">{item.handle}</p>
                      </div>
                      <p className="nc-badge mb-0">{item.badge}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
