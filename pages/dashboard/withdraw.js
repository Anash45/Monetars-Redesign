import Layout from "../../components/dashboard/Layout";

export default function Page() {
  return (
    <Layout>
  <section className="settings-sec py-5">
    <div className="container pe-xxl-5">
      <div className="withdraw-flex-1 d-flex flex-wrap gap-4 w-100">
        <div className="wf-2 d-flex gap-4 flex-column">
          <div className="site-card pt-4 pb-md-4 pb-3">
            <div className="px-md-4 px-3 mx-2">
              <h3 className="fw-semibold mt-2 text-white mb-2 f-28p">
                Withdraw Cash
              </h3>
              <p className="mb-0 page-desc lato f-16p">
                Lorem ipsum dolor sit amet, adipisicing elit, seiutempor incididunt ut
              </p>
            </div>
            <div className="pt-4">
              <form action="" method="post" className="withdraw-cash-form hidden-radio-form">
                <div className="er-cont py-3">
                  <div className="mx-2 px-md-4 px-3">
                    <div className="expandable-radio px-4">
                      <div className="py-0">
                        <label className="er-label text-white mx-3 py-4 fw-medium d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-1">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.7633 1.33044C13.9771 0.472485 12.883 0 11.6828 0L4.01198 4.29688e-05C3.67781 4.29688e-05 3.39903 0.25545 3.36994 0.588372L1.96065 16.6969C1.94488 16.8769 2.00542 17.0553 2.12754 17.1885C2.24962 17.3217 2.42205 17.3976 2.60273 17.3976H7.20517C7.53938 17.3976 7.81816 17.1422 7.84725 16.8092L8.39975 10.4939H10.8774C13.318 10.4939 15.4771 8.50942 15.6904 6.07021L15.8247 4.53605C15.9301 3.33086 15.5532 2.19236 14.7633 1.33044Z" fill="#0065A3"></path>
                              <path d="M18.9632 5.93287C18.177 5.07482 17.0829 4.60229 15.8826 4.60229L8.21179 4.60234C7.87763 4.60234 7.59884 4.85774 7.56975 5.19067L6.16042 21.2992C6.14465 21.4792 6.20519 21.6576 6.32731 21.7908C6.44939 21.9241 6.62182 21.9999 6.8025 21.9999H11.405C11.7392 21.9999 12.0179 21.7445 12.047 21.4116L12.5996 15.0963H15.0772C17.5177 15.0963 19.6768 13.1118 19.8903 10.6725L20.0244 9.13834C20.13 7.93324 19.7531 6.79482 18.9632 5.93287Z" fill="#00AADF"></path>
                              <path d="M7.84725 16.8091L8.39975 10.4938H10.8774C13.318 10.4938 15.4771 8.50932 15.6904 6.07011L15.8189 4.60229L8.21176 4.60234C7.87759 4.60234 7.59881 4.85774 7.56972 5.19067L6.50177 17.3975H7.20517C7.53938 17.3975 7.81812 17.1421 7.84725 16.8091Z" fill="#003E67"></path>
                            </svg>
                            <span>
                              Paypal
                            </span>
                          </div>
                          <input className="form-check-input m-0" type="radio" name="withdraw-type" id="withdraw-type" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="er-hidden">
                    <div className="px-md-4 px-3 py-3 mx-2">
                      <div className="form-group mb-3">
                        <div className="position-relative">
                          <input type="text" className="form-control er-inp" placeholder="Your Paypal Email Address" />
                          <button type="button" className="f-12p er-inp-btn btn text-orange fw-semibold">
                            <span>
                              Save
                            </span>
                          </button>
                        </div>
                        <div className="d-flex align-items-center gap-1 px-4 er-help">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.99975 0C2.68648 0 0 2.68648 0 5.99975C0 9.31302 2.68648 12 5.99975 12C9.31302 12 12 9.31302 12 5.99975C12 2.68648 9.31302 0 5.99975 0ZM7.24876 9.29879C6.93994 9.4207 6.6941 9.51314 6.50971 9.57714C6.32584 9.64114 6.112 9.67314 5.8687 9.67314C5.49486 9.67314 5.20381 9.58171 4.99657 9.39937C4.78933 9.21702 4.68622 8.98591 4.68622 8.70502C4.68622 8.59581 4.69384 8.48406 4.70908 8.37029C4.72483 8.25651 4.74971 8.12851 4.78375 7.98476L5.17029 6.61943C5.20432 6.48838 5.23378 6.36394 5.25714 6.24813C5.28051 6.1313 5.29168 6.02413 5.29168 5.9266C5.29168 5.75289 5.25562 5.63098 5.184 5.56241C5.11137 5.49384 4.97473 5.46032 4.77105 5.46032C4.67149 5.46032 4.56889 5.47505 4.46375 5.50603C4.35962 5.53803 4.26921 5.56698 4.19505 5.59543L4.29714 5.17486C4.5501 5.07175 4.79238 4.98337 5.02349 4.91022C5.2546 4.83606 5.47302 4.79949 5.67873 4.79949C6.05003 4.79949 6.33651 4.8899 6.53816 5.0687C6.73879 5.248 6.83987 5.48114 6.83987 5.76762C6.83987 5.82705 6.83276 5.93168 6.81905 6.08102C6.80533 6.23086 6.77943 6.36749 6.74184 6.49295L6.35733 7.85422C6.32584 7.96343 6.2979 8.08838 6.27251 8.22806C6.24762 8.36775 6.23543 8.47441 6.23543 8.54603C6.23543 8.72686 6.27556 8.85029 6.35683 8.91581C6.43708 8.98133 6.57778 9.01435 6.77689 9.01435C6.87086 9.01435 6.976 8.99759 7.09486 8.96508C7.2127 8.93257 7.29803 8.90362 7.35187 8.87873L7.24876 9.29879ZM7.1807 3.77346C7.0014 3.94006 6.78552 4.02337 6.53308 4.02337C6.28114 4.02337 6.06375 3.94006 5.88292 3.77346C5.70311 3.60686 5.61219 3.40419 5.61219 3.16749C5.61219 2.9313 5.70362 2.72813 5.88292 2.56C6.06375 2.39137 6.28114 2.30756 6.53308 2.30756C6.78552 2.30756 7.00191 2.39137 7.1807 2.56C7.36 2.72813 7.4499 2.9313 7.4499 3.16749C7.4499 3.4047 7.36 3.60686 7.1807 3.77346Z" fill="#7C77B4"></path>
                          </svg>
                          <span className="f-12p">
                            Please Confirm your email is correct.
                          </span>
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <div className="position-relative">
                          <input type="text" className="form-control er-inp" placeholder="$ Amount (USD)" />
                        </div>
                        <div className="d-flex align-items-center gap-1 px-4 er-help">
                          <span className="f-14p">
                            Minimum: $5.8
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="er-foot p-4">
                      <div className="px-md-3 py-md-2 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-grow-1">
                          <div className="d-flex align-items-center gap-1 f-16p erf-fee">
                            <span>
                              Fee:
                            </span>
                            <span>
                              $0.5
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-1 f-14p fw-semibold text-white">
                            <span>
                              Receive::
                            </span>
                            <span>
                              $123
                            </span>
                          </div>
                        </div>
                        <button type="submit" className="btn erf-btn">
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="er-cont pt-3">
                  <div className="mx-2 px-md-4 px-3">
                    <div className="expandable-radio px-4">
                      <div className="py-0">
                        <label className="er-label text-white mx-3 py-4 fw-medium d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-1">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_2_2328)">
                                <path d="M28 5.02563H0V22.9744H28V5.02563Z" fill="#0E4595"></path>
                                <path d="M10.5252 17.5442L11.7227 10.517H13.6382L12.4398 17.5442H10.5252ZM19.3599 10.6684C18.9804 10.5261 18.3857 10.3733 17.6432 10.3733C15.7505 10.3733 14.4173 11.3264 14.406 12.6924C14.3952 13.7022 15.3577 14.2655 16.0842 14.6016C16.8299 14.9461 17.0805 15.1657 17.0769 15.4733C17.0722 15.9443 16.4815 16.1595 15.931 16.1595C15.1644 16.1595 14.7571 16.053 14.128 15.7906L13.8812 15.679L13.6123 17.2521C14.0597 17.4483 14.8871 17.6182 15.746 17.627C17.7595 17.627 19.0665 16.6849 19.0815 15.2261C19.0886 14.4267 18.5783 13.8184 17.4732 13.3168C16.8037 12.9918 16.3937 12.7748 16.3981 12.4457C16.3981 12.1536 16.7451 11.8412 17.495 11.8412C18.1213 11.8315 18.5751 11.9681 18.9286 12.1104L19.1003 12.1915L19.3599 10.6684ZM24.289 10.5168H22.8088C22.3503 10.5168 22.0072 10.642 21.8058 11.0996L18.9612 17.5396H20.9725C20.9725 17.5396 21.3014 16.6737 21.3757 16.4836C21.5956 16.4836 23.5495 16.4866 23.8289 16.4866C23.8862 16.7326 24.0619 17.5396 24.0619 17.5396H25.8393L24.289 10.5166V10.5168ZM21.9406 15.0546C22.099 14.6498 22.7038 13.0902 22.7038 13.0902C22.6924 13.109 22.861 12.6834 22.9577 12.4195L23.0871 13.0254C23.0871 13.0254 23.454 14.7029 23.5306 15.0546H21.9406ZM8.89908 10.5168L7.02379 15.3092L6.82395 14.3353C6.47485 13.2126 5.38716 11.9964 4.1712 11.3874L5.88588 17.5331L7.91251 17.5308L10.928 10.5168H8.89908" fill="white"></path>
                                <path d="M5.27405 10.5165H2.1854L2.16095 10.6627C4.56385 11.2444 6.15382 12.6501 6.81398 14.339L6.14233 11.1096C6.02639 10.6647 5.69013 10.5319 5.27412 10.5164" fill="#F2AE14"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_2_2328">
                                  <rect width="28" height="28" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            <span>
                              Visa
                            </span>
                          </div>
                          <input className="form-check-input m-0" type="radio" name="withdraw-type" id="withdraw-type2" value="Visa" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="er-hidden">
                    <div className="px-md-4 px-3 py-3 mx-2">
                      <div className="form-group mb-3">
                        <div className="position-relative">
                          <input type="text" className="form-control er-inp" placeholder="Card Number" />
                          <button type="button" className="f-12p er-inp-btn btn text-orange fw-semibold">
                            <span>
                              Save
                            </span>
                          </button>
                        </div>
                        <div className="d-flex align-items-center gap-1 px-4 er-help">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.99975 0C2.68648 0 0 2.68648 0 5.99975C0 9.31302 2.68648 12 5.99975 12C9.31302 12 12 9.31302 12 5.99975C12 2.68648 9.31302 0 5.99975 0ZM7.24876 9.29879C6.93994 9.4207 6.6941 9.51314 6.50971 9.57714C6.32584 9.64114 6.112 9.67314 5.8687 9.67314C5.49486 9.67314 5.20381 9.58171 4.99657 9.39937C4.78933 9.21702 4.68622 8.98591 4.68622 8.70502C4.68622 8.59581 4.69384 8.48406 4.70908 8.37029C4.72483 8.25651 4.74971 8.12851 4.78375 7.98476L5.17029 6.61943C5.20432 6.48838 5.23378 6.36394 5.25714 6.24813C5.28051 6.1313 5.29168 6.02413 5.29168 5.9266C5.29168 5.75289 5.25562 5.63098 5.184 5.56241C5.11137 5.49384 4.97473 5.46032 4.77105 5.46032C4.67149 5.46032 4.56889 5.47505 4.46375 5.50603C4.35962 5.53803 4.26921 5.56698 4.19505 5.59543L4.29714 5.17486C4.5501 5.07175 4.79238 4.98337 5.02349 4.91022C5.2546 4.83606 5.47302 4.79949 5.67873 4.79949C6.05003 4.79949 6.33651 4.8899 6.53816 5.0687C6.73879 5.248 6.83987 5.48114 6.83987 5.76762C6.83987 5.82705 6.83276 5.93168 6.81905 6.08102C6.80533 6.23086 6.77943 6.36749 6.74184 6.49295L6.35733 7.85422C6.32584 7.96343 6.2979 8.08838 6.27251 8.22806C6.24762 8.36775 6.23543 8.47441 6.23543 8.54603C6.23543 8.72686 6.27556 8.85029 6.35683 8.91581C6.43708 8.98133 6.57778 9.01435 6.77689 9.01435C6.87086 9.01435 6.976 8.99759 7.09486 8.96508C7.2127 8.93257 7.29803 8.90362 7.35187 8.87873L7.24876 9.29879ZM7.1807 3.77346C7.0014 3.94006 6.78552 4.02337 6.53308 4.02337C6.28114 4.02337 6.06375 3.94006 5.88292 3.77346C5.70311 3.60686 5.61219 3.40419 5.61219 3.16749C5.61219 2.9313 5.70362 2.72813 5.88292 2.56C6.06375 2.39137 6.28114 2.30756 6.53308 2.30756C6.78552 2.30756 7.00191 2.39137 7.1807 2.56C7.36 2.72813 7.4499 2.9313 7.4499 3.16749C7.4499 3.4047 7.36 3.60686 7.1807 3.77346Z" fill="#7C77B4"></path>
                          </svg>
                          <span className="f-12p">
                            Enter correct card number.
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="form-group mb-0">
                            <div className="position-relative">
                              <input type="text" className="form-control er-inp" placeholder="01/29" />
                            </div>
                            <div className="d-flex align-items-center gap-1 px-4 er-help">
                              <span className="f-14p">
                                Expiry date
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-group mb-0">
                            <div className="position-relative">
                              <input type="text" className="form-control er-inp" placeholder="***" />
                            </div>
                            <div className="d-flex align-items-center gap-1 px-4 er-help">
                              <span className="f-14p">
                                CVV
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="er-foot p-4">
                      <div className="px-md-3 py-md-2 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-grow-1">
                          <div className="d-flex align-items-center gap-1 f-16p erf-fee">
                            <span>
                              Fee:
                            </span>
                            <span>
                              $0.5
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-1 f-14p fw-semibold text-white">
                            <span>
                              Receive::
                            </span>
                            <span>
                              $123
                            </span>
                          </div>
                        </div>
                        <button type="submit" className="btn erf-btn">
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="site-card pt-4 pb-md-4 pb-3">
            <div className="px-md-4 px-3 mx-2">
              <h3 className="fw-semibold mt-2 text-white mb-2 f-28p">
                Gift Card Payment
              </h3>
              <p className="mb-0 page-desc lato f-16p">
                Lorem ipsum dolor sit amet, adipisicing elit, seiutempor incididunt ut
              </p>
            </div>
            <div className="pt-4">
              <form action="" method="post" className="gift-card-form hidden-radio-form">
                <div className="er-cont py-3">
                  <div className="mx-2 px-md-4 px-3">
                    <div className="expandable-radio px-4">
                      <div className="py-0">
                        <label className="er-label text-white mx-3 py-4 fw-medium d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-1">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.7633 1.33044C13.9771 0.472485 12.883 0 11.6828 0L4.01198 4.29688e-05C3.67781 4.29688e-05 3.39903 0.25545 3.36994 0.588372L1.96065 16.6969C1.94488 16.8769 2.00542 17.0553 2.12754 17.1885C2.24962 17.3217 2.42205 17.3976 2.60273 17.3976H7.20517C7.53938 17.3976 7.81816 17.1422 7.84725 16.8092L8.39975 10.4939H10.8774C13.318 10.4939 15.4771 8.50942 15.6904 6.07021L15.8247 4.53605C15.9301 3.33086 15.5532 2.19236 14.7633 1.33044Z" fill="#0065A3"></path>
                              <path d="M18.9632 5.93287C18.177 5.07482 17.0829 4.60229 15.8826 4.60229L8.21179 4.60234C7.87763 4.60234 7.59884 4.85774 7.56975 5.19067L6.16042 21.2992C6.14465 21.4792 6.20519 21.6576 6.32731 21.7908C6.44939 21.9241 6.62182 21.9999 6.8025 21.9999H11.405C11.7392 21.9999 12.0179 21.7445 12.047 21.4116L12.5996 15.0963H15.0772C17.5177 15.0963 19.6768 13.1118 19.8903 10.6725L20.0244 9.13834C20.13 7.93324 19.7531 6.79482 18.9632 5.93287Z" fill="#00AADF"></path>
                              <path d="M7.84725 16.8091L8.39975 10.4938H10.8774C13.318 10.4938 15.4771 8.50932 15.6904 6.07011L15.8189 4.60229L8.21176 4.60234C7.87759 4.60234 7.59881 4.85774 7.56972 5.19067L6.50177 17.3975H7.20517C7.53938 17.3975 7.81812 17.1421 7.84725 16.8091Z" fill="#003E67"></path>
                            </svg>
                            <span>
                              Paypal
                            </span>
                          </div>
                          <input className="form-check-input m-0" type="radio" name="gift-card-type" value="PayPal" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="er-hidden px-md-4 px-3 mx-2 pt-3">
                    <div className="d-flex flex-column gap-3 mb-3">
                      <div className="position-relative country-slct">
                        <img src="/dashboard-assets/img/flags/de.png" alt="Sort Icon" className="sb-inp-icon" />
                        <select className="form-select sb-inp-1 popularity-select">
                          <option selected="Germany">
                            Germany
                          </option>
                          <option value="International">
                            International
                          </option>
                        </select>
                      </div>
                      <div className="d-flex flex-wrap gap-3 gift-card-radios">
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/paypal.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              PayPal
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/paypal.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              PayPal
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/paypal.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              PayPal
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/paypal.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              PayPal
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/paypal.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              PayPal
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/paypal.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              PayPal
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/paypal.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              PayPal
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/paypal.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              PayPal
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                      </div>
                    </div>
                    <div className="er-foot p-4">
                      <div className="px-md-3 py-md-2 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-grow-1">
                          <div className="d-flex align-items-center gap-1 f-16p erf-fee">
                            <span>
                              Fee:
                            </span>
                            <span>
                              $0.5
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-1 f-14p fw-semibold text-white">
                            <span>
                              Receive::
                            </span>
                            <span>
                              $123
                            </span>
                          </div>
                        </div>
                        <button type="submit" className="btn erf-btn">
                          Payout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="er-cont py-3">
                  <div className="mx-2 px-md-4 px-3">
                    <div className="expandable-radio px-4">
                      <div className="py-0">
                        <label className="er-label text-white mx-3 py-4 fw-medium d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_2_2485)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.5245 19.432C20.4056 19.4316 20.2823 19.4594 20.1686 19.513C20.0389 19.5655 19.9076 19.6245 19.7846 19.6773L19.6016 19.7528L19.3646 19.8473V19.8507C16.7899 20.8952 14.0854 21.5074 11.5819 21.5611C11.4896 21.5645 11.3978 21.5645 11.3074 21.5645C7.37213 21.5663 4.15951 19.7396 0.918381 17.9407C0.804756 17.8807 0.691131 17.8499 0.577132 17.8499C0.430506 17.8499 0.281631 17.9043 0.172881 18.006C0.0637565 18.108 -0.000743531 18.257 6.46944e-06 18.4081C-0.000743531 18.6047 0.105381 18.7848 0.252756 18.9019C3.29401 21.5427 6.62776 23.9974 11.1101 23.9997C11.1971 23.9997 11.286 23.9974 11.3756 23.9959C14.2271 23.9314 17.4529 22.9687 19.9553 21.3949L19.9695 21.3847C20.2976 21.19 20.6258 20.9661 20.934 20.7196C21.1268 20.5763 21.2588 20.3538 21.2569 20.1223C21.2513 19.7111 20.901 19.432 20.5245 19.432ZM23.9966 17.9737V17.9722C23.9876 17.7216 23.9333 17.531 23.8294 17.3731L23.8193 17.358L23.8069 17.3427C23.7008 17.2267 23.5991 17.1828 23.4885 17.1337C23.16 17.0073 22.6826 16.9401 22.1059 16.9382C21.6923 16.9382 21.2359 16.9773 20.7773 17.077L20.7765 17.047L20.3145 17.2005L20.3066 17.2046L20.046 17.2894L20.0468 17.3014C19.7408 17.4282 19.4618 17.5865 19.2034 17.7734C19.0433 17.8945 18.909 18.0536 18.9011 18.2975C18.8978 18.4299 18.9645 18.5834 19.0778 18.6734C19.1884 18.7638 19.3189 18.7938 19.4325 18.7938C19.4599 18.7938 19.4854 18.7931 19.5083 18.7889L19.5304 18.7871L19.548 18.7841C19.7741 18.7364 20.1026 18.7042 20.4866 18.6498C20.817 18.6137 21.1669 18.5864 21.471 18.5864C21.6866 18.5852 21.8786 18.6002 22.0106 18.6291C22.077 18.6426 22.1273 18.6603 22.1554 18.6741C22.1636 18.6775 22.1708 18.6816 22.1749 18.685C22.1809 18.703 22.1891 18.7499 22.1876 18.8171C22.1914 19.0711 22.0819 19.5427 21.936 20.0019C21.7913 20.4622 21.6158 20.924 21.4995 21.2309C21.4725 21.3015 21.4549 21.3784 21.4549 21.4632C21.4523 21.587 21.5025 21.7363 21.6098 21.835C21.7136 21.9347 21.8479 21.9738 21.9619 21.9738H21.9664C22.1363 21.9719 22.2803 21.9036 22.4051 21.8072C23.577 20.7522 23.9843 19.0707 24.0004 18.1238L23.9966 17.9737Z" fill="#FBB11E"></path>
                                <path d="M18.7383 14.3593C18.1574 13.6164 17.5743 12.9801 17.5743 11.5489V6.78082C17.5743 4.76729 17.7333 2.91207 16.2509 1.53632C15.0329 0.424692 13.1256 0 11.6425 0H11.0065C8.30614 0.157196 5.44602 1.32322 4.81077 4.66261C4.70464 5.08693 5.02302 5.24488 5.23452 5.2974L8.20002 5.66769C8.51839 5.61479 8.67664 5.34917 8.72989 5.08656C8.99427 3.9209 9.94789 3.33676 11.0065 3.23059H11.2191C11.8548 3.23059 12.5425 3.49621 12.9134 4.0267C13.3371 4.66224 13.2846 5.51012 13.2846 6.25221V6.67728C12.5954 6.7283 11.8015 6.78082 11.0065 6.88587C9.78852 7.04719 8.57014 7.25729 7.56439 7.73601C5.60502 8.53024 4.28052 10.2249 4.28052 12.7149C4.28052 15.8427 6.29277 17.4312 8.83564 17.4312C9.68277 17.4312 10.372 17.3242 11.0061 17.1667C12.0134 16.8481 12.8594 16.2659 13.867 15.2045C14.449 16.0003 14.6084 16.372 15.6141 17.2192C15.8793 17.3242 16.144 17.3242 16.3551 17.1667C16.9919 16.6358 18.1045 15.6817 18.6858 15.1531C18.9516 14.9404 18.8984 14.6223 18.7383 14.3593ZM12.7023 12.9805C12.3314 13.7207 11.695 14.1983 11.0065 14.3596C10.9011 14.3596 10.7429 14.4125 10.5828 14.4125C9.41877 14.4125 8.72989 13.5106 8.72989 12.1863C8.72989 10.4901 9.73602 9.69552 11.0065 9.32448C11.6954 9.16578 12.4896 9.1125 13.2846 9.1125V9.74917C13.2846 10.9666 13.3368 11.9195 12.7023 12.9805Z" fill="white"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_2_2485">
                                  <rect width="24" height="24" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            <span>
                              amazon
                            </span>
                          </div>
                          <input className="form-check-input m-0" type="radio" name="gift-card-type" value="amazon" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="er-hidden px-md-4 px-3 mx-2 pt-3">
                    <div className="d-flex flex-column gap-3 mb-3">
                      <div className="position-relative country-slct">
                        <img src="/dashboard-assets/img/flags/de.png" alt="Sort Icon" className="sb-inp-icon" />
                        <select className="form-select sb-inp-1 popularity-select">
                          <option selected="Germany">
                            Germany
                          </option>
                          <option value="International">
                            International
                          </option>
                        </select>
                      </div>
                      <div className="d-flex flex-wrap gap-3 gift-card-radios">
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/amazon.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              amazon
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/amazon.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              amazon
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/amazon.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              amazon
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/amazon.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              amazon
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/amazon.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              amazon
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/amazon.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              amazon
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/amazon.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              amazon
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/amazon.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              amazon
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                      </div>
                    </div>
                    <div className="er-foot p-4">
                      <div className="px-md-3 py-md-2 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-grow-1">
                          <div className="d-flex align-items-center gap-1 f-16p erf-fee">
                            <span>
                              Fee:
                            </span>
                            <span>
                              $0.5
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-1 f-14p fw-semibold text-white">
                            <span>
                              Receive::
                            </span>
                            <span>
                              $123
                            </span>
                          </div>
                        </div>
                        <button type="submit" className="btn erf-btn">
                          Payout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="er-cont py-3">
                  <div className="mx-2 px-md-4 px-3">
                    <div className="expandable-radio px-4">
                      <div className="py-0">
                        <label className="er-label text-white mx-3 py-4 fw-medium d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.98215 24C4.06989 24 3.5634 23.7922 3.29288 23.64C2.91865 23.4292 2.22732 22.8935 1.60661 21.3055C0.613188 18.7633 0.0270524 15.6575 0 12.0073V11.9941C0.0270524 8.34248 0.613188 5.2382 1.60661 2.69447C2.22732 1.10648 2.91865 0.569338 3.29288 0.360044C3.5634 0.20783 4.06989 0 4.98215 0C5.32933 0 5.73661 0.0307355 6.21153 0.105379C8.97088 0.540066 12.0278 1.59824 15.2861 3.40139L15.2996 3.40724C18.5324 5.2543 21.0017 7.30187 22.7676 9.4109C23.8692 10.7281 24 11.5785 24 12C24 12.4215 23.8692 13.2719 22.7676 14.5891C21.0017 16.6981 18.5324 18.7457 15.2996 20.5928L15.2861 20.6001C12.0278 22.4032 8.97088 23.4614 6.21153 23.8961C5.73661 23.9707 5.33083 24 4.98215 24Z" fill="#FF6900"></path>
                            </svg>
                            <span>
                              zolando
                            </span>
                          </div>
                          <input className="form-check-input m-0" type="radio" name="gift-card-type" value="zolando" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="er-hidden px-md-4 px-3 mx-2 pt-3">
                    <div className="d-flex flex-column gap-3 mb-3">
                      <div className="position-relative country-slct">
                        <img src="/dashboard-assets/img/flags/de.png" alt="Sort Icon" className="sb-inp-icon" />
                        <select className="form-select sb-inp-1 popularity-select">
                          <option selected="Germany">
                            Germany
                          </option>
                          <option value="International">
                            International
                          </option>
                        </select>
                      </div>
                      <div className="d-flex flex-wrap gap-3 gift-card-radios">
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/zolando.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              zolando
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/zolando.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              zolando
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/zolando.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              zolando
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/zolando.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              zolando
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/zolando.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              zolando
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/zolando.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              zolando
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/zolando.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              zolando
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/zolando.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              zolando
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                      </div>
                    </div>
                    <div className="er-foot p-4">
                      <div className="px-md-3 py-md-2 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-grow-1">
                          <div className="d-flex align-items-center gap-1 f-16p erf-fee">
                            <span>
                              Fee:
                            </span>
                            <span>
                              $0.5
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-1 f-14p fw-semibold text-white">
                            <span>
                              Receive::
                            </span>
                            <span>
                              $123
                            </span>
                          </div>
                        </div>
                        <button type="submit" className="btn erf-btn">
                          Payout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="er-cont py-3">
                  <div className="mx-2 px-md-4 px-3">
                    <div className="expandable-radio px-4">
                      <div className="py-0">
                        <label className="er-label text-white mx-3 py-4 fw-medium d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-1">
                            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_2_138)">
                                <path d="M12.9999 10.8266C16.9225 13.92 23.5684 21.519 21.5584 23.671C19.2567 25.7558 16.2741 26.9999 12.9999 26.9999C9.72567 26.9999 6.71052 25.7558 4.4414 23.671C2.39896 21.519 9.07726 13.92 12.9675 10.8602C12.9675 10.8266 12.9999 10.8266 12.9999 10.8266ZM19.7754 1.98341C17.7978 0.739246 15.6257 -0.000488281 12.9999 -0.000488281C10.3739 -0.000488281 8.20199 0.739246 6.22436 1.98341C6.19195 1.98341 6.19195 2.01702 6.19195 2.05064C6.19195 2.08425 6.22436 2.08425 6.25677 2.08425C8.78537 1.5126 12.6108 3.76541 12.9675 4.00092H13.0323C13.3888 3.76562 17.2144 1.5128 19.743 2.08425C19.7754 2.08425 19.8078 2.08425 19.8078 2.05064C19.8078 2.01702 19.8078 1.98341 19.7754 1.98341ZM3.89023 3.86626C3.85782 3.86626 3.85782 3.89987 3.82541 3.89987C1.45886 6.35438 0 9.75052 0 13.4826C0 16.5424 1.00511 19.4005 2.65844 21.6533C2.65844 21.6869 2.69085 21.6869 2.72326 21.6869C2.75567 21.6869 2.75567 21.6533 2.72326 21.6197C1.71814 18.4254 6.80795 10.7256 9.43397 7.4975L9.46638 7.46388C9.46638 7.43027 9.46638 7.43027 9.43397 7.43027C5.44651 3.32822 4.1173 3.76521 3.89042 3.86606L3.89023 3.86626ZM16.566 7.39686L16.5336 7.43047C16.5336 7.43047 16.5336 7.46409 16.566 7.46409C19.1921 10.6919 24.2493 18.392 23.2767 21.5863V21.6535C23.3092 21.6535 23.3416 21.6535 23.3416 21.6199C24.9949 19.3671 26 16.509 26 13.4492C26 9.7169 24.5411 6.32097 22.1422 3.86646C22.1098 3.83285 22.1098 3.83285 22.0774 3.83285C21.8829 3.76562 20.5537 3.32842 16.5662 7.39706L16.566 7.39686Z" fill="#107B10"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_2_138">
                                  <rect width="26" height="27" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            <span>
                              xbox live
                            </span>
                          </div>
                          <input className="form-check-input m-0" type="radio" name="gift-card-type" value="xbox live" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="er-hidden px-md-4 px-3 mx-2 pt-3">
                    <div className="d-flex flex-column gap-3 mb-3">
                      <div className="position-relative country-slct">
                        <img src="/dashboard-assets/img/flags/de.png" alt="Sort Icon" className="sb-inp-icon" />
                        <select className="form-select sb-inp-1 popularity-select">
                          <option selected="Germany">
                            Germany
                          </option>
                          <option value="International">
                            International
                          </option>
                        </select>
                      </div>
                      <div className="d-flex flex-wrap gap-3 gift-card-radios">
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/xbox live.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              xbox live
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/xbox live.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              xbox live
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/xbox live.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              xbox live
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/xbox live.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              xbox live
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/xbox live.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              xbox live
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/xbox live.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              xbox live
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/xbox live.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              xbox live
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/xbox live.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              xbox live
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                      </div>
                    </div>
                    <div className="er-foot p-4">
                      <div className="px-md-3 py-md-2 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-grow-1">
                          <div className="d-flex align-items-center gap-1 f-16p erf-fee">
                            <span>
                              Fee:
                            </span>
                            <span>
                              $0.5
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-1 f-14p fw-semibold text-white">
                            <span>
                              Receive::
                            </span>
                            <span>
                              $123
                            </span>
                          </div>
                        </div>
                        <button type="submit" className="btn erf-btn">
                          Payout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="er-cont py-3">
                  <div className="mx-2 px-md-4 px-3">
                    <div className="expandable-radio px-4">
                      <div className="py-0">
                        <label className="er-label text-white mx-3 py-4 fw-medium d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_2_69)">
                                <path d="M17.9236 8.23239C15.1356 6.673 10.6607 4.16898 3.71978 0.282608C3.25183 -0.0264393 2.71342 -0.0669394 2.24823 0.0905141L14.1568 11.9991L17.9236 8.23239Z" fill="#32BBFF"></path>
                                <path d="M2.24824 0.0904541C2.16106 0.119985 2.07621 0.15561 1.99507 0.198642C1.48137 0.476517 1.10388 1.01122 1.10388 1.68749V22.3107C1.10388 22.9869 1.48132 23.5216 1.99507 23.7995C2.07607 23.8424 2.16087 23.8782 2.24796 23.9079L14.1569 11.9991L2.24824 0.0904541Z" fill="#32BBFF"></path>
                                <path d="M14.1569 11.9991L2.24799 23.908C2.71331 24.0666 3.25172 24.0292 3.71982 23.7157C10.451 19.9464 14.8754 17.4721 17.6957 15.8994C17.7742 15.8553 17.8512 15.8122 17.9272 15.7695L14.1569 11.9991Z" fill="#32BBFF"></path>
                                <path d="M1.10388 11.9991V22.3107C1.10388 22.987 1.48132 23.5217 1.99507 23.7995C2.07607 23.8425 2.16087 23.8783 2.24796 23.908L14.1569 11.9991H1.10388Z" fill="#2C9FD9"></path>
                                <path d="M3.71978 0.282559C3.16407 -0.0843794 2.50876 -0.0739263 1.99506 0.198699L13.9761 12.1798L17.9235 8.23234C15.1356 6.67295 10.6607 4.16893 3.71978 0.282559Z" fill="#29CC5E"></path>
                                <path d="M13.9762 11.8185L1.99506 23.7995C2.50881 24.0721 3.16407 24.0878 3.71978 23.7157C10.4509 19.9464 14.8754 17.4721 17.6957 15.8994C17.7742 15.8553 17.8511 15.8122 17.9272 15.7695L13.9762 11.8185Z" fill="#D93F21"></path>
                                <path d="M22.8961 11.9991C22.8961 11.4277 22.6078 10.851 22.0363 10.5312C22.0363 10.5312 20.9676 9.93491 17.6919 8.10266L13.7955 11.9991L17.6957 15.8993C20.9355 14.0802 22.0363 13.4669 22.0363 13.4669C22.6078 13.1471 22.8961 12.5705 22.8961 11.9991Z" fill="#FFD500"></path>
                                <path d="M22.0363 13.467C22.6078 13.1472 22.8961 12.5706 22.8961 11.9991H13.7955L17.6957 15.8994C20.9355 14.0804 22.0363 13.467 22.0363 13.467Z" fill="#FFAA00"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_2_69">
                                  <rect width="24" height="24" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            <span>
                              Google Play
                            </span>
                          </div>
                          <input className="form-check-input m-0" type="radio" name="gift-card-type" value="Google Play" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="er-hidden px-md-4 px-3 mx-2 pt-3">
                    <div className="d-flex flex-column gap-3 mb-3">
                      <div className="position-relative country-slct">
                        <img src="/dashboard-assets/img/flags/de.png" alt="Sort Icon" className="sb-inp-icon" />
                        <select className="form-select sb-inp-1 popularity-select">
                          <option selected="Germany">
                            Germany
                          </option>
                          <option value="International">
                            International
                          </option>
                        </select>
                      </div>
                      <div className="d-flex flex-wrap gap-3 gift-card-radios">
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/google play.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              Google Play
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/google play.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              Google Play
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/google play.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              Google Play
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/google play.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              Google Play
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/google play.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              Google Play
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/google play.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              Google Play
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/google play.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              Google Play
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/google play.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              Google Play
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                      </div>
                    </div>
                    <div className="er-foot p-4">
                      <div className="px-md-3 py-md-2 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-grow-1">
                          <div className="d-flex align-items-center gap-1 f-16p erf-fee">
                            <span>
                              Fee:
                            </span>
                            <span>
                              $0.5
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-1 f-14p fw-semibold text-white">
                            <span>
                              Receive::
                            </span>
                            <span>
                              $123
                            </span>
                          </div>
                        </div>
                        <button type="submit" className="btn erf-btn">
                          Payout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="er-cont py-3">
                  <div className="mx-2 px-md-4 px-3">
                    <div className="expandable-radio px-4">
                      <div className="py-0">
                        <label className="er-label text-white mx-3 py-4 fw-medium d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-1">
                            <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.4015 0C17.4666 0 17.5318 0 17.6007 0C17.7605 1.97462 17.0068 3.45005 16.0908 4.51851C15.192 5.57959 13.9613 6.6087 11.9707 6.45255C11.8379 4.50621 12.5928 3.14021 13.5076 2.07421C14.3559 1.08075 15.9113 0.196724 17.4015 0Z" fill="white"></path>
                              <path d="M23.4274 20.5528C23.4274 20.5724 23.4274 20.5897 23.4274 20.6081C22.8679 22.3024 22.07 23.7545 21.0962 25.102C20.2072 26.3254 19.1179 27.9717 17.1728 27.9717C15.492 27.9717 14.3756 26.891 12.653 26.8615C10.8309 26.832 9.8288 27.7652 8.16279 28C7.97221 28 7.78164 28 7.59475 28C6.37137 27.823 5.38406 26.8541 4.66479 25.9811C2.54386 23.4016 0.904898 20.0696 0.599976 15.8056C0.599976 15.3875 0.599976 14.9707 0.599976 14.5527C0.729076 11.501 2.21188 9.01982 4.18281 7.81734C5.22299 7.17799 6.65293 6.63331 8.24517 6.87675C8.92756 6.98249 9.6247 7.2161 10.2358 7.44725C10.8149 7.6698 11.5391 8.06448 12.2251 8.04357C12.6899 8.03005 13.1522 7.78783 13.6207 7.61693C14.9928 7.12143 16.3379 6.55339 18.1109 6.82019C20.2417 7.14233 21.754 8.08907 22.6884 9.54974C20.8859 10.6969 19.4609 12.4256 19.7044 15.3777C19.9207 18.0593 21.4798 19.6282 23.4274 20.5528Z" fill="white"></path>
                            </svg>
                            <span>
                              apple
                            </span>
                          </div>
                          <input className="form-check-input m-0" type="radio" name="gift-card-type" value="apple" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="er-hidden px-md-4 px-3 mx-2 pt-3">
                    <div className="d-flex flex-column gap-3 mb-3">
                      <div className="position-relative country-slct">
                        <img src="/dashboard-assets/img/flags/de.png" alt="Sort Icon" className="sb-inp-icon" />
                        <select className="form-select sb-inp-1 popularity-select">
                          <option selected="Germany">
                            Germany
                          </option>
                          <option value="International">
                            International
                          </option>
                        </select>
                      </div>
                      <div className="d-flex flex-wrap gap-3 gift-card-radios">
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/apple.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              apple
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/apple.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              apple
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/apple.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              apple
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/apple.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              apple
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/apple.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              apple
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/apple.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              apple
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/apple.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              apple
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/apple.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              apple
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                      </div>
                    </div>
                    <div className="er-foot p-4">
                      <div className="px-md-3 py-md-2 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-grow-1">
                          <div className="d-flex align-items-center gap-1 f-16p erf-fee">
                            <span>
                              Fee:
                            </span>
                            <span>
                              $0.5
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-1 f-14p fw-semibold text-white">
                            <span>
                              Receive::
                            </span>
                            <span>
                              $123
                            </span>
                          </div>
                        </div>
                        <button type="submit" className="btn erf-btn">
                          Payout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="er-cont py-3">
                  <div className="mx-2 px-md-4 px-3">
                    <div className="expandable-radio px-4">
                      <div className="py-0">
                        <label className="er-label text-white mx-3 py-4 fw-medium d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-1">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_2_94)">
                                <path d="M12.9999 -0.000171206C5.82037 -0.000171206 0 5.82014 0 12.9998C0 20.1797 5.82037 25.9998 12.9999 25.9998C20.1802 25.9998 26 20.1799 26 12.9998C26 5.82053 20.1802 0.000413809 12.9997 0.000413809L12.9999 -0.000366211V-0.000171206ZM18.9617 18.7497C18.7288 19.1316 18.229 19.2529 17.847 19.0183C14.7949 17.1538 10.9524 16.7316 6.42722 17.7656C5.9912 17.8648 5.55654 17.5916 5.45709 17.1554C5.35725 16.7192 5.62947 16.2845 6.06666 16.1852C11.0187 15.0538 15.2664 15.5409 18.6931 17.6351C19.0751 17.8695 19.1962 18.3677 18.9617 18.7497ZM20.5529 15.21C20.2594 15.6868 19.6354 15.8373 19.1588 15.5441C15.6644 13.3961 10.338 12.774 6.20472 14.0289C5.66866 14.1907 5.10258 13.8887 4.93995 13.3536C4.77849 12.8175 5.08074 12.2526 5.61582 12.0895C10.337 10.657 16.2063 11.3509 20.2192 13.8169C20.6958 14.1104 20.8463 14.7344 20.5531 15.2104V15.2102L20.5529 15.21ZM20.6896 11.524C16.4996 9.03538 9.587 8.80664 5.58676 10.0207C4.94443 10.2155 4.26505 9.85304 4.07044 9.21049C3.87583 8.56776 4.23814 7.88895 4.88086 7.69375C9.47293 6.29966 17.1066 6.56896 21.9305 9.4328C22.5095 9.77581 22.699 10.5219 22.3558 11.0989C22.0142 11.6767 21.266 11.8672 20.6901 11.524H20.6896Z" fill="#1ED760"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_2_94">
                                  <rect width="26" height="26" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            <span>
                              spotify
                            </span>
                          </div>
                          <input className="form-check-input m-0" type="radio" name="gift-card-type" value="spotify" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="er-hidden px-md-4 px-3 mx-2 pt-3">
                    <div className="d-flex flex-column gap-3 mb-3">
                      <div className="position-relative country-slct">
                        <img src="/dashboard-assets/img/flags/de.png" alt="Sort Icon" className="sb-inp-icon" />
                        <select className="form-select sb-inp-1 popularity-select">
                          <option selected="Germany">
                            Germany
                          </option>
                          <option value="International">
                            International
                          </option>
                        </select>
                      </div>
                      <div className="d-flex flex-wrap gap-3 gift-card-radios">
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/spotify.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              spotify
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/spotify.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              spotify
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/spotify.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              spotify
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/spotify.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              spotify
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/spotify.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              spotify
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/spotify.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              spotify
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/spotify.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              spotify
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/spotify.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              spotify
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                      </div>
                    </div>
                    <div className="er-foot p-4">
                      <div className="px-md-3 py-md-2 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-grow-1">
                          <div className="d-flex align-items-center gap-1 f-16p erf-fee">
                            <span>
                              Fee:
                            </span>
                            <span>
                              $0.5
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-1 f-14p fw-semibold text-white">
                            <span>
                              Receive::
                            </span>
                            <span>
                              $123
                            </span>
                          </div>
                        </div>
                        <button type="submit" className="btn erf-btn">
                          Payout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="er-cont py-3">
                  <div className="mx-2 px-md-4 px-3">
                    <div className="expandable-radio px-4">
                      <div className="py-0">
                        <label className="er-label text-white mx-3 py-4 fw-medium d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-1">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_2_101)">
                                <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#E60012"></path>
                                <path d="M8.11835 8.4137H11.5992L16.4281 16.2067V8.4137H19.8844V19.5891H16.4308L11.5801 11.7961V19.5891H8.11835V8.4137Z" fill="white"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_2_101">
                                  <rect width="28" height="28" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            <span>
                              nintendo
                            </span>
                          </div>
                          <input className="form-check-input m-0" type="radio" name="gift-card-type" value="nintendo" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="er-hidden px-md-4 px-3 mx-2 pt-3">
                    <div className="d-flex flex-column gap-3 mb-3">
                      <div className="position-relative country-slct">
                        <img src="/dashboard-assets/img/flags/de.png" alt="Sort Icon" className="sb-inp-icon" />
                        <select className="form-select sb-inp-1 popularity-select">
                          <option selected="Germany">
                            Germany
                          </option>
                          <option value="International">
                            International
                          </option>
                        </select>
                      </div>
                      <div className="d-flex flex-wrap gap-3 gift-card-radios">
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/nintendo.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              nintendo
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/nintendo.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              nintendo
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/nintendo.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              nintendo
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/nintendo.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              nintendo
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/nintendo.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              nintendo
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/nintendo.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              nintendo
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/nintendo.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              nintendo
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                        <label className="gc-radio">
                          <img src="/dashboard-assets/img/flags/de.png" alt="Flags" style={{height: '22px', width: '22px', objectFit: 'cover'}} className="rounded-circle gcr-flag" />
                          <div className="d-flex flex-column pt-5 pb-4 px-3 text-center align-items-center">
                            <img src="/dashboard-assets/img/gift-card-providers/nintendo.svg" alt="Provider" className="gcr-icon mb-2" height="43" />
                            <span className="text-white fw-semibold f-22p">
                              $5
                            </span>
                            <span className="gcr-name fw-semibold f-16p">
                              nintendo
                            </span>
                          </div>
                          <input type="radio" name="gift-card-amount" value="$5" className="d-none" />
                        </label>
                      </div>
                    </div>
                    <div className="er-foot p-4">
                      <div className="px-md-3 py-md-2 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-grow-1">
                          <div className="d-flex align-items-center gap-1 f-16p erf-fee">
                            <span>
                              Fee:
                            </span>
                            <span>
                              $0.5
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-1 f-14p fw-semibold text-white">
                            <span>
                              Receive::
                            </span>
                            <span>
                              $123
                            </span>
                          </div>
                        </div>
                        <button type="submit" className="btn erf-btn">
                          Payout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="wf-3 d-flex gap-3 flex-column">
          <div className="pt-4 px-2 pb-md-4 pb-3">
            <h3 className="fw-semibold mt-2 text-white mb-2 f-28p d-flex align-items-center gap-1">
              <span>
                Hello Adeel
              </span>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2_2544)">
                  <path d="M11.5 22.2959C17.4624 22.2959 22.2959 17.4624 22.2959 11.5C22.2959 5.5376 17.4624 0.704102 11.5 0.704102C5.53758 0.704102 0.704086 5.5376 0.704086 11.5C0.704086 17.4624 5.53758 22.2959 11.5 22.2959Z" fill="#FCC33B"></path>
                  <path d="M11.5 20.5592C13.0036 20.5592 14.2225 18.8149 14.2225 16.6633C14.2225 14.5116 13.0036 12.7673 11.5 12.7673C9.99644 12.7673 8.77756 14.5116 8.77756 16.6633C8.77756 18.8149 9.99644 20.5592 11.5 20.5592Z" fill="#722717"></path>
                  <path d="M8.87143 7.69798L9.90409 6.66532C10.2327 6.33675 10.2327 5.77349 9.90409 5.44491C9.57551 5.11634 9.01225 5.11634 8.68368 5.44491L7.65102 6.47757L6.61837 5.44491C6.2898 5.11634 5.72654 5.11634 5.39796 5.44491C5.06939 5.77349 5.06939 6.33675 5.39796 6.66532L6.43062 7.69798L5.39796 8.73063C5.06939 9.0592 5.06939 9.62247 5.39796 9.95104C5.58572 10.1388 5.77347 10.1857 6.00817 10.1857C6.24286 10.1857 6.43062 10.0919 6.61837 9.95104L7.65102 8.91838L8.68368 9.95104C8.87143 10.1388 9.05919 10.1857 9.29388 10.1857C9.52857 10.1857 9.71633 10.0919 9.90409 9.95104C10.2327 9.62247 10.2327 9.0592 9.90409 8.73063L8.87143 7.69798Z" fill="#722717"></path>
                  <path d="M16.5694 7.69798L17.602 6.66532C17.9306 6.33675 17.9306 5.77349 17.602 5.44491C17.2735 5.11634 16.7102 5.11634 16.3816 5.44491L15.349 6.47757L14.3163 5.44491C13.9878 5.11634 13.4245 5.11634 13.0959 5.44491C12.7673 5.77349 12.7673 6.33675 13.0959 6.66532L14.1286 7.69798L13.0959 8.73063C12.7673 9.0592 12.7673 9.62247 13.0959 9.95104C13.2837 10.1388 13.4714 10.1857 13.7061 10.1857C13.9408 10.1857 14.1286 10.0919 14.3163 9.95104L15.349 8.91838L16.3816 9.95104C16.5694 10.1388 16.7571 10.1857 16.9918 10.1857C17.2265 10.1857 17.4143 10.0919 17.602 9.95104C17.9306 9.62247 17.9306 9.0592 17.602 8.73063L16.5694 7.69798Z" fill="#722717"></path>
                  <path d="M11.5 20.5593C12.3296 20.5593 13.002 19.6767 13.002 18.5879C13.002 17.4991 12.3296 16.6165 11.5 16.6165C10.6704 16.6165 9.99796 17.4991 9.99796 18.5879C9.99796 19.6767 10.6704 20.5593 11.5 20.5593Z" fill="#EA302E"></path>
                  <path d="M11.5 22.5307C5.39796 22.5307 0.469391 17.6021 0.469391 11.5001C0.469391 5.39805 5.39796 0.469482 11.5 0.469482C17.602 0.469482 22.5306 5.39805 22.5306 11.5001C22.5306 17.6021 17.602 22.5307 11.5 22.5307ZM11.5 0.93887C5.67959 0.93887 0.938779 5.67969 0.938779 11.5001C0.938779 17.3205 5.67959 22.0613 11.5 22.0613C17.3204 22.0613 22.0612 17.3205 22.0612 11.5001C22.0612 5.67969 17.3204 0.93887 11.5 0.93887Z" fill="black"></path>
                  <path d="M11.5 20.7939C9.85715 20.7939 8.54286 18.9164 8.54286 16.6633C8.54286 14.3633 9.85715 12.5327 11.5 12.5327C13.1429 12.5327 14.4571 14.4103 14.4571 16.6633C14.4571 18.9164 13.1429 20.7939 11.5 20.7939ZM11.5 13.0021C10.1388 13.0021 9.01225 14.645 9.01225 16.6633C9.01225 18.6817 10.1388 20.3246 11.5 20.3246C12.8612 20.3246 13.9878 18.6817 13.9878 16.6633C13.9878 14.645 12.8612 13.0021 11.5 13.0021Z" fill="black"></path>
                  <path d="M11.5 20.7941C10.5612 20.7941 9.76328 19.8084 9.76328 18.588C9.76328 17.3675 10.5612 16.3818 11.5 16.3818C12.4388 16.3818 13.2367 17.3675 13.2367 18.588C13.2367 19.8084 12.4388 20.7941 11.5 20.7941ZM11.5 16.8982C10.7959 16.8982 10.2327 17.6492 10.2327 18.6349C10.2327 19.5737 10.7959 20.3716 11.5 20.3716C12.2041 20.3716 12.7674 19.6206 12.7674 18.6349C12.7674 17.6492 12.2041 16.8982 11.5 16.8982Z" fill="black"></path>
                  <path d="M9.29388 10.4205C9.01224 10.4205 8.73061 10.3266 8.54286 10.0919L7.69796 9.247L6.85306 10.0919C6.43061 10.5143 5.72653 10.5143 5.30408 10.0919C4.88163 9.66945 4.88163 8.96537 5.30408 8.54292L6.14898 7.69802L5.30408 6.85312C4.88163 6.43067 4.88163 5.72659 5.30408 5.30414C5.72653 4.88169 6.43061 4.88169 6.85306 5.30414L7.69796 6.14904L8.54286 5.30414C8.96531 4.88169 9.66939 4.88169 10.0918 5.30414C10.5143 5.72659 10.5143 6.43067 10.0918 6.85312L9.24694 7.69802L10.0918 8.54292C10.5143 8.96537 10.5143 9.66945 10.0918 10.0919C9.85714 10.2797 9.57551 10.4205 9.29388 10.4205ZM7.65102 8.58986L8.87143 9.81026C9.10612 10.045 9.52857 10.045 9.76326 9.81026C9.99796 9.57557 9.99796 9.20006 9.76326 8.91843L8.54286 7.69802L9.76326 6.47761C9.99796 6.24292 9.99796 5.86741 9.76326 5.58577C9.52857 5.35108 9.10612 5.35108 8.87143 5.58577L7.65102 6.80618L6.43061 5.63271C6.19592 5.39802 5.77347 5.39802 5.53877 5.63271C5.30408 5.86741 5.30408 6.24292 5.53877 6.52455L6.75918 7.74496L5.58571 8.91843C5.35102 9.15312 5.35102 9.52863 5.58571 9.81026C5.82041 10.045 6.24286 10.045 6.47755 9.81026L7.65102 8.58986Z" fill="black"></path>
                  <path d="M16.9918 10.4205C16.7102 10.4205 16.4286 10.3266 16.2408 10.0919L15.3959 9.247L14.551 10.0919C14.1286 10.5143 13.4245 10.5143 13.002 10.0919C12.5796 9.66945 12.5796 8.96537 13.002 8.54292L13.8469 7.69802L13.002 6.85312C12.5796 6.43067 12.5796 5.72659 13.002 5.30414C13.4245 4.88169 14.1286 4.88169 14.551 5.30414L15.3959 6.14904L16.2408 5.30414C16.6633 4.88169 17.3674 4.88169 17.7898 5.30414C18.2123 5.72659 18.2123 6.43067 17.7898 6.85312L16.898 7.69802L17.7429 8.54292C18.1653 8.96537 18.1653 9.66945 17.7429 10.0919C17.5551 10.2797 17.2735 10.4205 16.9918 10.4205ZM15.349 8.58986L16.5694 9.81026C16.8041 10.045 17.2265 10.045 17.4612 9.81026C17.6959 9.57557 17.6959 9.20006 17.4612 8.91843L16.2408 7.69802L17.4612 6.47761C17.6959 6.24292 17.6959 5.86741 17.4612 5.58577C17.2265 5.35108 16.8041 5.35108 16.5694 5.58577L15.349 6.80618L14.1286 5.63271C13.8939 5.39802 13.4714 5.39802 13.2367 5.63271C13.002 5.86741 13.002 6.24292 13.2367 6.52455L14.4571 7.74496L13.2837 8.91843C13.049 9.15312 13.049 9.52863 13.2837 9.81026C13.5184 10.045 13.9408 10.045 14.1755 9.81026L15.349 8.58986Z" fill="black"></path>
                </g>
                <defs>
                  <clipPath id="clip0_2_2544">
                    <rect width="23" height="23" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </h3>
            <p className="mb-0 page-desc lato f-16p">
              With decades of maintenance of way expertise and experience, no one knows the rail like Loram. Today, with our Loram Technologies business group, we're leveraging our accumulated data, analytics and maintenance algorithms with advanced inspection technologies to provide you actionable intelligence with real-time monitoring and the most precise application of
              <br />
              <br />
              maintenance of way activities. In this new era of digital insight, interval-based maintenance is a thing of the past. Loram delivers on the promise of truly targeted, agile and data-driven solutions, offering unsurpassed efficiency, predictability and return on your maintenance investment.
            </p>
          </div>
          <div className="px-2">
            <h4 className="acc-title text-center position-relative f-24p mb-3 fw-semibold">
              <span className="at-text">
                FAQ
              </span>
            </h4>
            <div className="site-card accordion-card">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>
                        This is the first item's accordion body.
                      </strong>
                      It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                      <code>
                        .accordion-body
                      </code>
                      , though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>
                        This is the second item's accordion body.
                      </strong>
                      It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                      <code>
                        .accordion-body
                      </code>
                      , though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>
                        This is the third item's accordion body.
                      </strong>
                      It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                      <code>
                        .accordion-body
                      </code>
                      , though the transition does limit overflow.
                    </div>
                  </div>
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
