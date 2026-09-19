export default function UserModal() {
  return (
  <div className="modal fade user-modal" id="userModal" tabIndex="-1" aria-labelledby="payModalLabel" aria-modal="true" role="dialog">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn ms-auto btn-modal-close btn-circle-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="fa fa-close"></i>
          </button>
        </div>
        <div className="modal-body p-lg-4 px-3 pb-4 pt-0 pb-lg-0 pt-lg-0 roboto">
          <div className="d-flex align-items-center gap-4 pb-3 border-bottom">
            <img src="/assets/img/2.png" alt="DP" height="80" width="80" className="rounded-circle" />
            <div className="">
              <p className="mb-1 f-12p opacity-75">
                Joined a day ago
              </p>
              <h3 className="fw-bold f-30p mb-0 lh-sm">
                Jalen Buckley
              </h3>
              <div className="d-flex align-items-center gap-2">
                <img src="/assets/img/united-states.png" alt="Flag" className="rounded-circle" height="24" width="24" />
                <span className="f-14p opacity-75">
                  United States
                </span>
              </div>
            </div>
          </div>
          <div className="py-3 border-bottom">
            <div className="d-flex align-items-center gap-2 mb-3">
              <svg className="um-svg" width="24" height="24" viewBox="0 0 24 24">
                <path xmlns="http://www.w3.org/2000/svg" d="M5 5.43c0-.48.6-.69.89-.32l2.54 3.17c.32.4.9.5 1.33.21l1.47-.97a1 1 0 0 1 1.34.21l2.46 3.16a1 1 0 0 0 1.18.3l2.1-.9c.32-.13.69.1.69.47V18H5V5.43Z" fill="currentColor"></path>
              </svg>
              <span className="fw-bold">
                Stats
              </span>
            </div>
            <div className="d-flex gap-3 stats text-center">
              <div className="um-stat rounded-lg flex-grow-1 d-flex align-items-center flex-column justify-content-center p-2">
                <span className="opacity-75 f-12p fw-medium">
                  Offers Completed
                </span>
                <span className="f-14p fw-bold">
                  9
                </span>
              </div>
              <div className="um-stat rounded-lg flex-grow-1 d-flex align-items-center flex-column justify-content-center p-2">
                <span className="opacity-75 f-12p fw-medium">
                  Points Earn
                </span>
                <span className="f-14p fw-bold">
                  9432
                </span>
              </div>
              <div className="um-stat rounded-lg flex-grow-1 d-flex align-items-center flex-column justify-content-center p-2">
                <span className="opacity-75 f-12p fw-medium">
                  Users Referred
                </span>
                <span className="f-14p fw-bold">
                  0
                </span>
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <svg className="um-svg" width="18" height="18" viewBox="0 0 16 16">
                <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M15.1988 1C15.1988 1 9.9565 0.987741 5.86961 5.07463C5.68061 5.26364 5.512 5.46646 5.36307 5.67939C4.63821 5.62264 3.53187 5.64592 2.96724 6.21093C1.64192 7.53625 1.19995 9.7455 1.19995 9.7455L4.12026 9.32832V10.329L5.87179 12.0806H6.87248L6.45542 15C6.45542 15 8.66468 14.558 9.99 13.2327C10.5556 12.6674 10.5783 11.5592 10.5213 10.8344C10.7336 10.6858 10.9357 10.5176 11.1242 10.3292C15.2111 6.24232 15.1988 1 15.1988 1ZM9.37266 5.65847C9.37266 5.01333 9.8952 4.49079 10.5403 4.49079C11.1855 4.49079 11.708 5.01333 11.708 5.65847C11.708 6.30362 11.1855 6.82616 10.5403 6.82616C9.8952 6.82616 9.37266 6.30362 9.37266 5.65847Z"></path>
              </svg>
              <span className="fw-bold">
                Activity
              </span>
            </div>
            <div className="table-responsive">
              <table className="table bg-transparent um-table">
                <thead>
                  <tr>
                    <td className="opacity-75">
                      Name
                    </td>
                    <td className="opacity-75">
                      Time
                    </td>
                    <td className="opacity-75">
                      Reward
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="opacity-75">
                      Leaderboard
                    </td>
                    <td className="opacity-75">
                      12h ago
                    </td>
                    <td>
                      <span className="me-2">
                        200
                      </span>
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" width="12" />
                    </td>
                  </tr>
                  <tr>
                    <td className="opacity-75">
                      Leaderboard
                    </td>
                    <td className="opacity-75">
                      12h ago
                    </td>
                    <td>
                      <span className="me-2">
                        200
                      </span>
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" width="12" />
                    </td>
                  </tr>
                  <tr>
                    <td className="opacity-75">
                      Leaderboard
                    </td>
                    <td className="opacity-75">
                      12h ago
                    </td>
                    <td>
                      <span className="me-2">
                        200
                      </span>
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" width="12" />
                    </td>
                  </tr>
                  <tr>
                    <td className="opacity-75">
                      Leaderboard
                    </td>
                    <td className="opacity-75">
                      12h ago
                    </td>
                    <td>
                      <span className="me-2">
                        200
                      </span>
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" width="12" />
                    </td>
                  </tr>
                  <tr>
                    <td className="opacity-75">
                      Leaderboard
                    </td>
                    <td className="opacity-75">
                      12h ago
                    </td>
                    <td>
                      <span className="me-2">
                        200
                      </span>
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" width="12" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav aria-label="Page navigation" className="um-pagination pb-0">
                <ul className="pagination justify-content-center pb-0 mb-0">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="fa fa-chevron-left"></i>
                      </span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      <span>
                        1
                      </span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <span>
                        2
                      </span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <span>
                        3
                      </span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="fa fa-chevron-right"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  );
}
