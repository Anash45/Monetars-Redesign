import Layout from "../../components/dashboard/Layout";

export default function Page() {
  return (
    <Layout>
  <section className="affiliate-sec py-5">
    <div className="container pe-xxl-5">
      <div className="home-offer" id="home-offers">
        <div className="mb-5 lobby-cards d-lg-flex d-none gap-3">
          <div className="lobby-card lc-orange">
            <div className="lc-content">
              <h2 className="lc-title text-white mb-2">
                EARN BATTLE
              </h2>
              <p className="text-white mb-0 lato f-18p">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
              </p>
            </div>
          </div>
          <div className="lobby-card lc-purple">
            <div className="lc-content">
              <h2 className="lc-title text-white mb-2">
                INVITE BATTLE
              </h2>
              <p className="text-white mb-0 lato f-18p">
                Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="offers-container oc-recently mt-0 mb-5">
          <div className="mb-0 py-2 d-flex align-items-center of-title justify-content-between">
            <h2 className="page-title mb-0 fw-semibold f-28p ms-2 text-white">
              Recently Completed
            </h2>
            <div className="pe-md-5 me-md-5">
              <a href="#" className="view-link f-16p fw-semibold me-md-3">
                View All
              </a>
            </div>
          </div>
          <div className="py-2">
            <div className="d-flex offers mt-2">
              <div className="mx-2">
                <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-recent position-relative">
                  <img src="/dashboard-assets/img/offers-cards/rc-1.png" alt="Offer" className="rc-img" />
                  <div className="d-flex flex-column gap-2 rc-content">
                    <span className="rc-pill">
                      <span>
                        $229
                      </span>
                    </span>
                    <span className="rc-title">
                      <span>
                        Adgate Media
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mx-2">
                <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-recent position-relative">
                  <img src="/dashboard-assets/img/offers-cards/rc-2.png" alt="Offer" className="rc-img" />
                  <div className="d-flex flex-column gap-2 rc-content">
                    <span className="rc-pill">
                      <span>
                        $229
                      </span>
                    </span>
                    <span className="rc-title">
                      <span>
                        Adgate Media
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mx-2">
                <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-recent position-relative">
                  <img src="/dashboard-assets/img/offers-cards/rc-3.png" alt="Offer" className="rc-img" />
                  <div className="d-flex flex-column gap-2 rc-content">
                    <span className="rc-pill">
                      <span>
                        $229
                      </span>
                    </span>
                    <span className="rc-title">
                      <span>
                        Adgate Media
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mx-2">
                <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-recent position-relative">
                  <img src="/dashboard-assets/img/offers-cards/rc-4.png" alt="Offer" className="rc-img" />
                  <div className="d-flex flex-column gap-2 rc-content">
                    <span className="rc-pill">
                      <span>
                        $229
                      </span>
                    </span>
                    <span className="rc-title">
                      <span>
                        Adgate Media
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offers-container oc-offer-walls mt-0 mb-5">
          <div className="mb-0 py-2 d-flex align-items-center of-title justify-content-between">
            <h2 className="page-title mb-0 fw-semibold f-28p ms-2 text-white">
              Offer Walls
            </h2>
          </div>
          <div className="py-2">
            <div className="d-flex offers mt-2">
              <div className="mx-2">
                <div onClick={() => { openModal('signin') }} className="offer-box ob-first ob-simple" style={{backgroundColor: '#45b6f2  !important'}}>
                  <span style={{position: 'absolute', top: '10px', right: '10px', fontSize: '0.85rem', background: '#a7c957', color: '#1B4332', padding: '0px 5px', borderRadius: '4px', fontWeight: '500'}}>
                    +30%
                  </span>
                  <img src="https://dolares.app/public/storage/network_logos/e9s89EWbQKnLLaHu8OXPSGQZ6CX3LPkIEahVaWOP.png" alt="AdGateMedia" className="ob-main-img" />
                  <span className="ob-name text-white">
                    AdGateMedia
                  </span>
                  <span className="ob-percent text-white"></span>
                </div>
              </div>
              <div className="mx-2">
                <div onClick={() => { openModal('signin') }} className="offer-box ob-first ob-simple" style={{backgroundColor: '#1c2531  !important'}}>
                  <img src="https://dolares.app/public/storage/network_logos/VCnYX2a3ClbSPcR0BwrduB4aolIG1AlzPWuLXttf.png" alt="Lootably" className="ob-main-img" />
                  <span className="ob-name text-white">
                    Lootably
                  </span>
                  <span className="ob-percent text-white"></span>
                </div>
              </div>
              <div className="mx-2">
                <div onClick={() => { openModal('signin') }} className="offer-box ob-first ob-simple" style={{backgroundColor: '#33485d  !important'}}>
                  <img src="https://dolares.app/public/storage/network_logos/7jutdyflnKyoYSeUOYnecYcfiGpSmtytebjRLJsL.png" alt="Revenue Universe" className="ob-main-img" />
                  <span className="ob-name text-white">
                    Revenue Universe
                  </span>
                  <span className="ob-percent text-white"></span>
                </div>
              </div>
              <div className="mx-2">
                <div onClick={() => { openModal('signin') }} className="offer-box ob-first ob-simple" style={{backgroundColor: '#4bb170  !important'}}>
                  <img src="https://dolares.app/public/storage/network_logos/PYP76CcXPYfoW6l5gYxGBokAWzlw2PrBcKLWxGKn.png" alt="Monlix" className="ob-main-img" />
                  <span className="ob-name text-white">
                    Monlix
                  </span>
                  <span className="ob-percent text-white"></span>
                </div>
              </div>
              <div className="mx-2">
                <div onClick={() => { openModal('signin') }} className="offer-box ob-first ob-simple" style={{backgroundColor: '#2563eb  !important'}}>
                  <img src="https://dolares.app/public/storage/network_logos/36eNroaRox5OYDPGCP39nUsThcbhqQSEZUQFMiZb.png" alt="TimeWall" className="ob-main-img" />
                  <span className="ob-name text-white">
                    TimeWall
                  </span>
                  <span className="ob-percent text-white"></span>
                </div>
              </div>
              <div className="mx-2">
                <div onClick={() => { openModal('signin') }} className="offer-box ob-first ob-simple" style={{backgroundColor: '#ff7707  !important'}}>
                  <img src="https://dolares.app/public/storage/network_logos/kXaeBKiq8TwF39aoJ0nzi8VhdNFb8yDaPelotDBE.png" alt="Make Money" className="ob-main-img" />
                  <span className="ob-name text-white">
                    Make Money
                  </span>
                  <span className="ob-percent text-white"></span>
                </div>
              </div>
              <div className="mx-2">
                <div onClick={() => { openModal('signin') }} className="offer-box ob-first ob-simple" style={{backgroundColor: '#AADBD6  !important'}}>
                  <img src="https://dolares.app/public/storage/network_logos/7tq88rj01q84kb8rGsLcc8IyYI26Olu7p3x9iw91.png" alt="Notik" className="ob-main-img" />
                  <span className="ob-name text-white">
                    Notik
                  </span>
                  <span className="ob-percent text-white"></span>
                </div>
              </div>
              <div className="mx-2">
                <div onClick={() => { openModal('signin') }} className="offer-box ob-first ob-simple" style={{backgroundColor: '#16202b  !important'}}>
                  <img src="https://dolares.app/public/storage/network_logos/4p7IQPnWoRDjtlzwHu6WBadlI3wo5s9obxvOsp9H.png" alt="Revlum" className="ob-main-img" />
                  <span className="ob-name text-white">
                    Revlum
                  </span>
                  <span className="ob-percent text-white"></span>
                </div>
              </div>
              <div className="mx-2">
                <div onClick={() => { openModal('signin') }} className="offer-box ob-first ob-simple" style={{backgroundColor: '#ffbc42  !important'}}>
                  <img src="https://dolares.app/public/storage/network_logos/XyBGXJL1Hhm58er80iwYPHz5blQ2wWN6hRtnjaSl.png" alt="Adscend Media" className="ob-main-img" />
                  <span className="ob-name text-white">
                    Adscend Media
                  </span>
                  <span className="ob-percent text-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-tabs-cont px-md-4 px-0 mb-md-4 mb-2">
        <h3 className="mb-0 f-26p fw-semibold poppins text-white">
          Activity
        </h3>
        <ul className="nav nav-pills mb-0" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="pills-tab-2" data-bs-toggle="pill" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="true">
              All
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-tab-1" data-bs-toggle="pill" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="false">
              Offers
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-tab-3" data-bs-toggle="pill" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">
              Withdrawls
            </a>
          </li>
        </ul>
        <div className="d-flex ms-auto offer-filters gap-2 align-items-center flex-sm-grow-0 flex-grow-1 sb-flex-3">
          <div className="position-relative sb-flex-4">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="sb-inp-icon">
              <path d="M10.5 0C16.299 0 21 4.70103 21 10.5C21 16.299 16.299 21 10.5 21C4.70103 21 0 16.299 0 10.5C0 4.70103 4.70103 0 10.5 0ZM1.5308 9.75002H4.51506C4.56513 8.50863 4.73849 7.32684 5.01389 6.24187C4.31706 5.9974 3.67403 5.70779 3.09723 5.3801C2.22385 6.64052 1.66405 8.1348 1.5308 9.75002ZM6.73616 2.32247C5.71433 2.79355 4.79586 3.4505 4.02408 4.25003C4.4539 4.47266 4.92925 4.67317 5.44258 4.84787C5.79348 3.88828 6.23112 3.03522 6.73616 2.32247ZM9.75002 9.75002V7.10994C8.57983 7.06276 7.46265 6.90597 6.42959 6.65753C6.20469 7.60873 6.06073 8.6514 6.0154 9.75002H9.75002ZM9.75002 1.62445C8.55903 2.02405 7.52674 3.35927 6.84842 5.23922C7.74762 5.43902 8.7244 5.5673 9.75002 5.6096V1.62445ZM19.4692 9.75002C19.3359 8.1348 18.7762 6.64057 17.9028 5.3801C17.326 5.70779 16.6829 5.99745 15.9861 6.24192C16.2615 7.32684 16.4348 8.50863 16.4849 9.75002H19.4692ZM14.2638 2.32247C14.7688 3.03522 15.2065 3.88833 15.5574 4.84787C16.0708 4.67317 16.546 4.47266 16.9759 4.25003C16.2041 3.4505 15.2857 2.79355 14.2638 2.32247ZM11.25 9.75002H14.9846C14.9393 8.6514 14.7953 7.60873 14.5704 6.65753C13.5374 6.90597 12.4201 7.06276 11.25 7.10994V9.75002ZM11.25 1.62445V5.6096C12.2756 5.5673 13.2524 5.43902 14.1515 5.23922C13.4733 3.35927 12.4409 2.0241 11.25 1.62445ZM19.4692 11.25H16.4849C16.4348 12.4914 16.2615 13.6732 15.9861 14.7581C16.6829 15.0026 17.326 15.2922 17.9028 15.6199C18.7762 14.3595 19.3359 12.8652 19.4692 11.25ZM14.2638 18.6776C15.2857 18.2065 16.2041 17.5495 16.9759 16.75C16.5461 16.5273 16.0708 16.3268 15.5574 16.1521C15.2065 17.1117 14.7688 17.9648 14.2638 18.6776ZM11.25 11.25V13.8901C12.4201 13.9372 13.5374 14.094 14.5704 14.3425C14.7953 13.3913 14.9393 12.3486 14.9846 11.25H11.25ZM11.25 19.3756C12.4409 18.976 13.4733 17.6408 14.1516 15.7608C13.2524 15.561 12.2756 15.4327 11.25 15.3904V19.3756ZM1.5308 11.25C1.66405 12.8652 2.22385 14.3595 3.09723 15.6199C3.67403 15.2922 4.31706 15.0026 5.01389 14.7581C4.73849 13.6732 4.56513 12.4914 4.51506 11.25H1.5308ZM6.73616 18.6776C6.23116 17.9648 5.79353 17.1117 5.44258 16.1521C4.92925 16.3268 4.4539 16.5273 4.02408 16.75C4.79586 17.5495 5.71433 18.2065 6.73616 18.6776ZM9.75002 11.25H6.0154C6.06073 12.3486 6.20469 13.3913 6.42959 14.3425C7.46265 14.094 8.57983 13.9372 9.75002 13.8901V11.25ZM9.75002 19.3756V15.3904C8.7244 15.4327 7.74757 15.561 6.84842 15.7608C7.52674 17.6408 8.55903 18.976 9.75002 19.3756Z" fill="#9F9BBF"></path>
            </svg>
            <select className="form-select sb-inp-1 popularity-select">
              <option selected>
                Global
              </option>
              <option value="US">
                US
              </option>
              <option value="Germany">
                Germany
              </option>
            </select>
          </div>
          <div className="position-relative sb-flex-4">
            <select className="form-select sb-inp-1" style={{minWidth: '100px'}}>
              <option selected="10">
                10
              </option>
              <option value="15">
                15
              </option>
              <option value="20">
                20
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="tab-content py-md-4 py-2" id="pills-tabContent">
        <div className="tab-pane fade show active" id="tab-2" role="tabpanel" aria-labelledby="pills-tab-2">
          <div className="d-flex flex-column gap-4">
            <div className="site-card site-card-lighter py-md-5 px-2 py-md-0 py-2">
              <div className="pe-lg-3">
                <div className="table-responsive">
                  <table className="table table-separated table-borderless table-referrals table-activity ps-lg-3">
                    <thead>
                      <tr>
                        <th>
                          <span className="ps-lg-5">
                            Name
                          </span>
                        </th>
                        <th>
                          <span>
                            User
                          </span>
                        </th>
                        <th>
                          Providers
                        </th>
                        <th>
                          Time
                        </th>
                        <th>
                          <span className="pe-lg-5">
                            Prize
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="fw-medium f-16p ps-lg-5">
                            Placeholder Name
                          </div>
                        </td>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user d-flex align-items-center gap-2 fw-medium f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg width="12" height="12" viewBox="0 0 12 12" className="d-md-inline-block d-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Dolares
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Now
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex pe-lg-5 align-items-center gap-1 fw-medium f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="fw-medium f-16p ps-lg-5">
                            Placeholder Name
                          </div>
                        </td>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user d-flex align-items-center gap-2 fw-medium f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg width="12" height="12" viewBox="0 0 12 12" className="d-md-inline-block d-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Dolares
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Now
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex pe-lg-5 align-items-center gap-1 fw-medium f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="fw-medium f-16p ps-lg-5">
                            Placeholder Name
                          </div>
                        </td>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user d-flex align-items-center gap-2 fw-medium f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg width="12" height="12" viewBox="0 0 12 12" className="d-md-inline-block d-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Dolares
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Now
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex pe-lg-5 align-items-center gap-1 fw-medium f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tab-1" role="tabpanel" aria-labelledby="pills-tab-1">
          <div className="d-flex flex-column gap-4">
            <div className="site-card site-card-lighter py-md-5 px-2 py-md-0 py-2">
              <div className="pe-lg-3">
                <div className="table-responsive">
                  <table className="table table-separated table-borderless table-referrals table-activity ps-lg-3">
                    <thead>
                      <tr>
                        <th>
                          <span className="ps-lg-5">
                            Name
                          </span>
                        </th>
                        <th>
                          <span>
                            User
                          </span>
                        </th>
                        <th>
                          Providers
                        </th>
                        <th>
                          Time
                        </th>
                        <th>
                          <span className="pe-lg-5">
                            Prize
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="fw-medium f-16p ps-lg-5">
                            Placeholder Name
                          </div>
                        </td>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user d-flex align-items-center gap-2 fw-medium f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg width="12" height="12" viewBox="0 0 12 12" className="d-md-inline-block d-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Dolares
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Now
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex pe-lg-5 align-items-center gap-1 fw-medium f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="fw-medium f-16p ps-lg-5">
                            Placeholder Name
                          </div>
                        </td>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user d-flex align-items-center gap-2 fw-medium f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg width="12" height="12" viewBox="0 0 12 12" className="d-md-inline-block d-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Dolares
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Now
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex pe-lg-5 align-items-center gap-1 fw-medium f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="fw-medium f-16p ps-lg-5">
                            Placeholder Name
                          </div>
                        </td>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user d-flex align-items-center gap-2 fw-medium f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg width="12" height="12" viewBox="0 0 12 12" className="d-md-inline-block d-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Dolares
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Now
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex pe-lg-5 align-items-center gap-1 fw-medium f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="pills-tab-3">
          <div className="d-flex flex-column gap-4">
            <div className="site-card site-card-lighter py-md-5 px-2 py-md-0 py-2">
              <div className="pe-lg-3">
                <div className="table-responsive">
                  <table className="table table-separated table-borderless table-referrals table-activity ps-lg-3">
                    <thead>
                      <tr>
                        <th>
                          <span className="ps-lg-5">
                            Name
                          </span>
                        </th>
                        <th>
                          <span>
                            User
                          </span>
                        </th>
                        <th>
                          Providers
                        </th>
                        <th>
                          Time
                        </th>
                        <th>
                          <span className="pe-lg-5">
                            Prize
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="fw-medium f-16p ps-lg-5">
                            Placeholder Name
                          </div>
                        </td>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user d-flex align-items-center gap-2 fw-medium f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg width="12" height="12" viewBox="0 0 12 12" className="d-md-inline-block d-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Dolares
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Now
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex pe-lg-5 align-items-center gap-1 fw-medium f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="fw-medium f-16p ps-lg-5">
                            Placeholder Name
                          </div>
                        </td>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user d-flex align-items-center gap-2 fw-medium f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg width="12" height="12" viewBox="0 0 12 12" className="d-md-inline-block d-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Dolares
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Now
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex pe-lg-5 align-items-center gap-1 fw-medium f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="fw-medium f-16p ps-lg-5">
                            Placeholder Name
                          </div>
                        </td>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user d-flex align-items-center gap-2 fw-medium f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg width="12" height="12" viewBox="0 0 12 12" className="d-md-inline-block d-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Dolares
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="fw-medium f-16p">
                            <span>
                              Now
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex pe-lg-5 align-items-center gap-1 fw-medium f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </Layout>
  );
}
