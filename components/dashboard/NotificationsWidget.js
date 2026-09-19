export default function NotificationsWidget() {
  return (
  <aside className="chat-widget inter" id="notifications-widget">
    <div className="chat-opener" onClick={() => { notificationsWindow() }}>
      <i className="fa fa-arrow-left co-left"></i>
      <i className="fa fa-arrow-right co-right"></i>
    </div>
    <div className="nw-header p-4">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5833 17C12.2873 18.15 11.2433 19 10.0006 19C8.75797 19 7.71397 18.15 7.41797 17H12.5833Z" fill="#A6A4BC"></path>
            <path d="M17.2243 14.554C16.6353 14.2963 15.6673 13.4497 15.6673 10.6667V7.66667C15.6673 5.06333 13.801 2.89867 11.334 2.43033L11.0007 2.367C11.0007 2.18467 11.0007 2.086 11.0007 2C11.0007 1.44767 10.553 1 10.0007 1C9.44832 1 9.00065 1.44767 9.00065 2V2.367L8.66732 2.43033C6.20032 2.89867 4.33398 5.06333 4.33398 7.66667V10.6667C4.33398 13.4497 3.36598 14.2963 2.77698 14.554C2.50465 14.673 2.33398 14.9453 2.33398 15.2423C2.33398 15.6607 2.67332 16 3.09165 16H16.9093C17.328 16 17.6673 15.6607 17.6673 15.2423C17.6673 14.9453 17.4967 14.673 17.2243 14.554Z" fill="#A6A4BC"></path>
          </svg>
          <span className="f-20p text-white fw-semibold poppins">
            Notifications
          </span>
        </div>
        <a href="#" onClick={() => { notificationsWindow() }}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19" cy="19" r="19" fill="#0D0B1F"></circle>
            <path d="M22.3331 18.5318L16.9929 13.1917C16.8694 13.0681 16.7046 13 16.5287 13C16.3529 13 16.1881 13.0681 16.0646 13.1917L15.6713 13.5849C15.4154 13.8411 15.4154 14.2575 15.6713 14.5133L20.1555 18.9975L15.6663 23.4867C15.5428 23.6104 15.4746 23.7751 15.4746 23.9508C15.4746 24.1267 15.5428 24.2915 15.6663 24.4152L16.0596 24.8083C16.1832 24.9319 16.348 25 16.5238 25C16.6996 25 16.8645 24.9319 16.988 24.8083L22.3331 19.4634C22.4569 19.3394 22.5249 19.1738 22.5245 18.9978C22.5249 18.8211 22.4569 18.6557 22.3331 18.5318Z" fill="#9F9BBF"></path>
          </svg>
        </a>
      </div>
    </div>
    <div className="flex-grow-1 overflow-auto cw-tabs-cont">
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active ps-2" id="pills-noti" role="tabpanel" aria-labelledby="pills-noti-tab">
          <a href="#" className="d-flex flex-column gap-2 ps-4 pe-4 py-4 noti-msg poppins">
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-semibold noti-title text-white f-15p">
                Challenge Accepted
              </span>
              <span className="fw-semibold noti-date fw-medium noti-small-text f-12p">
                1mo ago
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-medium noti-small-text noti-name f-14p">
                waynegordon163
              </span>
              <span className="fw-semibold noti-title text-white f-15p d-flex align-items-center">
                <img src="/dashboard-assets/img/coin.svg" height="13" alt="Coin" />
                <span>
                  5
                </span>
              </span>
            </div>
          </a>
          <a href="#" className="d-flex flex-column gap-2 ps-4 pe-4 py-4 noti-msg poppins">
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-semibold noti-title text-white f-15p">
                Challenge Accepted
              </span>
              <span className="fw-semibold noti-date fw-medium noti-small-text f-12p">
                1mo ago
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-medium noti-small-text noti-name f-14p">
                waynegordon163
              </span>
              <span className="fw-semibold noti-title text-white f-15p d-flex align-items-center">
                <img src="/dashboard-assets/img/coin.svg" height="13" alt="Coin" />
                <span>
                  5
                </span>
              </span>
            </div>
          </a>
          <a href="#" className="d-flex flex-column gap-2 ps-4 pe-4 py-4 noti-msg poppins">
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-semibold noti-title text-white f-15p">
                Challenge Accepted
              </span>
              <span className="fw-semibold noti-date fw-medium noti-small-text f-12p">
                1mo ago
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-medium noti-small-text noti-name f-14p">
                waynegordon163
              </span>
              <span className="fw-semibold noti-title text-white f-15p d-flex align-items-center">
                <img src="/dashboard-assets/img/coin.svg" height="13" alt="Coin" />
                <span>
                  5
                </span>
              </span>
            </div>
          </a>
          <a href="#" className="d-flex flex-column gap-2 ps-4 pe-4 py-4 noti-msg poppins">
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-semibold noti-title text-white f-15p">
                Challenge Accepted
              </span>
              <span className="fw-semibold noti-date fw-medium noti-small-text f-12p">
                1mo ago
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-medium noti-small-text noti-name f-14p">
                waynegordon163
              </span>
              <span className="fw-semibold noti-title text-white f-15p d-flex align-items-center">
                <img src="/dashboard-assets/img/coin.svg" height="13" alt="Coin" />
                <span>
                  5
                </span>
              </span>
            </div>
          </a>
          <a href="#" className="d-flex flex-column gap-2 ps-4 pe-4 py-4 noti-msg poppins">
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-semibold noti-title text-white f-15p">
                Challenge Accepted
              </span>
              <span className="fw-semibold noti-date fw-medium noti-small-text f-12p">
                1mo ago
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-medium noti-small-text noti-name f-14p">
                waynegordon163
              </span>
              <span className="fw-semibold noti-title text-white f-15p d-flex align-items-center">
                <img src="/dashboard-assets/img/coin.svg" height="13" alt="Coin" />
                <span>
                  5
                </span>
              </span>
            </div>
          </a>
          <a href="#" className="d-flex flex-column gap-2 ps-4 pe-4 py-4 noti-msg poppins">
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-semibold noti-title text-white f-15p">
                Challenge Accepted
              </span>
              <span className="fw-semibold noti-date fw-medium noti-small-text f-12p">
                1mo ago
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-medium noti-small-text noti-name f-14p">
                waynegordon163
              </span>
              <span className="fw-semibold noti-title text-white f-15p d-flex align-items-center">
                <img src="/dashboard-assets/img/coin.svg" height="13" alt="Coin" />
                <span>
                  5
                </span>
              </span>
            </div>
          </a>
          <a href="#" className="d-flex flex-column gap-2 ps-4 pe-4 py-4 noti-msg poppins">
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-semibold noti-title text-white f-15p">
                Challenge Accepted
              </span>
              <span className="fw-semibold noti-date fw-medium noti-small-text f-12p">
                1mo ago
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className="fw-medium noti-small-text noti-name f-14p">
                waynegordon163
              </span>
              <span className="fw-semibold noti-title text-white f-15p d-flex align-items-center">
                <img src="/dashboard-assets/img/coin.svg" height="13" alt="Coin" />
                <span>
                  5
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </aside>  );
}
