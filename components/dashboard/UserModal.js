export default function UserModal() {
  return (
  <div className="modal fade user-modal" id="userModal" tabIndex="-1" aria-labelledby="payModalLabel" aria-modal="true" role="dialog">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header p-0">
          <button type="button" className="btn ms-auto btn-modal-close btn-circle-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="fa fa-close"></i>
          </button>
        </div>
        <div className="modal-body p-0 poppins">
          <div className="py-4 user-info mx-auto profile-user-info">
            <div className="d-flex align-items-center text-center flex-column gap-4 pt-4">
              <img src="/dashboard-assets/img/smiley-man-relaxing-outdoors1.png" alt="Person" className="rounded-circle" style={{height: '115px', width: '115px', objectFit: 'cover'}} />
              <div className="d-flex flex-column gap-2 align-items-center w-100">
                <h3 className="mb-0 text-white fw-semibold f-32p">
                  Adeel Raza
                </h3>
                <div className="ui-box">
                  <div className="ui-box">
                    <div className="uii-box">
                      <div className="d-flex justify-content-center align-items-center p-3 uib-row fw-medium">
                        <div className="d-flex gap-2 align-items-center f-21p uib-value">
                          <img src="https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png" alt="Flag" className="rounded-circle" style={{height: '18px', width: '18px', objectFit: 'cover'}} />
                          <span>
                            Germany
                          </span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center p-3 uib-row fw-medium">
                        <div className="d-flex gap-2 align-items-center f-21p uib-value">
                          <span>
                            1mo Ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-md-5 px-4 py-4 um-stat-sec">
            <div className="d-flex align-items-center gap-2 mb-3 px-lg-5 px-4">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.44286 27H11.8284C12.1237 27 12.3663 26.7521 12.3663 26.4621V0.537891C12.3663 0.242578 12.1184 0 11.8284 0H8.44286C8.14754 0 7.90497 0.247852 7.90497 0.537891V26.4094C7.85223 26.7521 8.14754 27 8.44286 27ZM1.67176 27H5.05731C5.35262 27 5.5952 26.7521 5.5952 26.4621V16.3002C5.5952 16.0049 5.34735 15.7623 5.05731 15.7623H1.67176C1.37645 15.7623 1.13387 16.0102 1.13387 16.3002V26.4146C1.1286 26.7521 1.37645 27 1.67176 27ZM15.2192 27H18.5573C18.8526 27 19.1479 26.7521 19.1479 26.4094V11.8283C19.1479 11.533 18.9001 11.2377 18.5573 11.2377H15.2192C14.9239 11.2377 14.6286 11.4855 14.6286 11.8283V26.4568C14.6286 26.7521 14.8764 27 15.2192 27ZM21.3522 5.05723V26.4094C21.3522 26.7047 21.6001 27 21.9429 27H25.2809C25.5763 27 25.8716 26.7521 25.8716 26.4094V5.05723C25.8716 4.76191 25.6237 4.4666 25.2809 4.4666H21.9429C21.6475 4.51406 21.3522 4.76191 21.3522 5.05723Z" fill="#56596D"></path>
              </svg>
              <span className="fw-semibold text-white f-24p">
                Stats
              </span>
            </div>
            <div className="d-flex gap-3 stats text-center px-lg-5 px-4">
              <div className="um-stat rounded-lg flex-grow-1 d-flex align-items-center justify-content-between p-4">
                <span className="f-21p fw-medium">
                  Offers Completed
                </span>
                <span className="f-20p fw-semibold text-white">
                  9
                </span>
              </div>
              <div className="um-stat rounded-lg flex-grow-1 d-flex align-items-center justify-content-between p-4">
                <span className="f-21p fw-medium">
                  Coins Earn
                </span>
                <span className="f-20p fw-semibold text-white">
                  <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="20" />
                  <span>
                    9432
                  </span>
                </span>
              </div>
              <div className="um-stat rounded-lg flex-grow-1 d-flex align-items-center justify-content-between p-4">
                <span className="f-21p fw-medium">
                  Users Referred
                </span>
                <span className="f-20p fw-semibold text-white">
                  0
                </span>
              </div>
            </div>
          </div>
          <div className="px-md-5 px-4 pt-4">
            <div className="d-flex align-items-center gap-2 mb-3 px-lg-5 px-4">
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_74_2402)">
                  <path d="M30.7893 2.08605C30.7872 1.9952 30.7838 1.90434 30.7804 1.81315C30.7767 1.71141 30.7736 1.61001 30.7682 1.50793C30.7576 1.30308 30.7444 1.09722 30.727 0.89067C30.6994 0.559584 30.4364 0.296892 30.1053 0.26899C29.8988 0.251636 29.6936 0.238706 29.4891 0.227817C29.3853 0.222373 29.2825 0.21931 29.1798 0.215567C29.0906 0.212505 29.0011 0.208762 28.9123 0.20706C28.7636 0.203658 28.616 0.202637 28.4686 0.202637C28.4441 0.202637 28.4193 0.202637 28.3948 0.202977C25.4589 0.217268 22.7639 0.937968 20.0431 2.4236C19.9951 2.45014 19.9471 2.47498 19.8992 2.50118C19.8822 2.51071 19.8655 2.51888 19.8485 2.52841C19.8447 2.53045 19.8417 2.53385 19.8379 2.53589C17.6071 3.77925 15.38 5.53404 13.075 7.83905C12.813 8.10106 12.5567 8.36648 12.3032 8.63325L7.82389 8.97386C7.69288 8.98373 7.56766 9.03137 7.4632 9.11065L0.437569 14.4574C0.21401 14.6275 0.117712 14.9174 0.195635 15.1873C0.273217 15.4571 0.508686 15.6514 0.788391 15.6769L7.38051 16.272L9.46775 18.3593C8.72799 18.5284 7.97429 18.9429 7.32879 19.588C6.94224 19.9749 6.63191 20.4084 6.4046 20.8821C6.10755 21.5112 5.45524 23.1313 4.76449 24.8466L4.42728 25.6833C4.32519 25.9365 4.38406 26.2261 4.57734 26.419C4.70732 26.5493 4.88154 26.6184 5.05882 26.6184C5.14423 26.6184 5.23066 26.6021 5.31335 26.5687L6.18002 26.2193C7.88139 25.534 9.4885 24.8864 10.119 24.5894C10.5886 24.3634 11.0225 24.0531 11.4087 23.6669C12.0538 23.0217 12.4679 22.268 12.6371 21.5283L14.6624 23.5536L15.2575 30.1453C15.2827 30.425 15.4773 30.6605 15.7472 30.7381C15.8094 30.7561 15.8727 30.7646 15.9353 30.7646C16.1443 30.7646 16.346 30.6683 16.477 30.4962L21.8231 23.4709C21.9024 23.3664 21.95 23.2412 21.9599 23.1102L22.2903 18.7632C22.5819 18.4872 22.8708 18.2068 23.1569 17.921C25.4637 15.6143 27.2195 13.3862 28.4632 11.154C28.4645 11.1516 28.4666 11.1496 28.4679 11.1472C28.4741 11.1363 28.4792 11.1258 28.4853 11.1149C28.5421 11.0124 28.5962 10.91 28.6507 10.8073C30.0822 8.13713 30.7777 5.48708 30.7927 2.60701C30.793 2.57877 30.793 2.55086 30.793 2.52262C30.7937 2.378 30.7927 2.23237 30.7893 2.08605ZM22.0885 12.9282C21.5519 13.4648 20.838 13.7608 20.0785 13.7608C19.3193 13.7608 18.6054 13.4651 18.0685 12.9282C16.9602 11.8196 16.9602 10.0165 18.0685 8.90785C19.1775 7.79958 20.9809 7.80026 22.0885 8.90785C22.6254 9.44446 22.9215 10.1584 22.9215 10.9178C22.9215 11.6773 22.6258 12.3912 22.0885 12.9282Z" fill="#56596D"></path>
                </g>
                <defs>
                  <clipPath id="clip0_74_2402">
                    <rect width="31" height="31" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <span className="fw-semibold text-white f-24p">
                Activity
              </span>
            </div>
            <div className="site-card px-lg-5 px-4 py-4">
              <div className="table-responsive">
                <table className="table table-separated table-user-modal">
                  <thead>
                    <tr>
                      <th>
                        Name
                      </th>
                      <th>
                        Time
                      </th>
                      <th>
                        Reward
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Leaderboard
                      </td>
                      <td>
                        12h ago
                      </td>
                      <td>
                        <span className="me-2">
                          200
                        </span>
                        <img src="/dashboard-assets/img/coin (1).png" alt="Coin" height="12" width="12" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Leaderboard
                      </td>
                      <td>
                        12h ago
                      </td>
                      <td>
                        <span className="me-2">
                          200
                        </span>
                        <img src="/dashboard-assets/img/coin (1).png" alt="Coin" height="12" width="12" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Leaderboard
                      </td>
                      <td>
                        12h ago
                      </td>
                      <td>
                        <span className="me-2">
                          200
                        </span>
                        <img src="/dashboard-assets/img/coin (1).png" alt="Coin" height="12" width="12" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Leaderboard
                      </td>
                      <td>
                        12h ago
                      </td>
                      <td>
                        <span className="me-2">
                          200
                        </span>
                        <img src="/dashboard-assets/img/coin (1).png" alt="Coin" height="12" width="12" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Leaderboard
                      </td>
                      <td>
                        12h ago
                      </td>
                      <td>
                        <span className="me-2">
                          200
                        </span>
                        <img src="/dashboard-assets/img/coin (1).png" alt="Coin" height="12" width="12" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <nav aria-label="Page navigation" className="um-pagination pb-0 my-4">
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
  </div>  );
}
