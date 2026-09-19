import Layout from "../../components/dashboard/Layout";

export default function Page() {
  return (
    <Layout>
  <section className="affiliate-sec py-5">
    <div className="container pe-xxl-5">
      <div className="nav-tabs-cont px-md-4 px-0 mb-md-4 mb-2">
        <h3 className="mb-0 f-26p fw-semibold poppins text-white">
          Affiliate
        </h3>
        <ul className="nav nav-pills mb-0" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="pills-tab-2" data-bs-toggle="pill" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="true">
              General
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-tab-1" data-bs-toggle="pill" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="false">
              Referrals
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-tab-3" data-bs-toggle="pill" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">
              Promo
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content py-md-4 py-2" id="pills-tabContent">
        <div className="tab-pane fade show active" id="tab-2" role="tabpanel" aria-labelledby="pills-tab-2">
          <div className="d-flex flex-column gap-4">
            <div className="aff-stats-box px-4 py-4">
              <div className="d-flex asb-flex px-lg-3 py-2 flex-wrap">
                <div className="af-stat">
                  <span className="af-text">
                    Total Referrals
                  </span>
                  <span className="d-flex flex-column align-items-center justify-content-center af-circle">
                    <span>
                      0
                    </span>
                  </span>
                </div>
                <div className="af-stat">
                  <span className="af-text">
                    Total Claimed
                  </span>
                  <span className="d-flex flex-column align-items-center justify-content-center af-circle">
                    <span>
                      0
                    </span>
                  </span>
                </div>
                <div className="af-stat">
                  <span className="af-text">
                    Total Earnt
                  </span>
                  <span className="d-flex flex-column align-items-center justify-content-center af-circle">
                    <span>
                      0
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="site-card">
              <div className="bg-transparent pt-4 px-md-5 px-4">
                <div className="d-flex justify-content-between gap-3 flex-lg-nowrap flex-wrap">
                  <div className="d-flex flex-column gap-0 align-items-xxl-start align-items-center text-xxl-start text-center">
                    <h3 className="f-28p fw-semibold d-flex align-items-bottom mb-0 gap-0 text-white">
                      <span>
                        Affiliate Program
                      </span>
                    </h3>
                    <p className="mb-0 lato page-desc">
                      Lorem ipsum dolor sit amet, adipisicing elit, seiutempor incididunt ut Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-bottom px-md-5 px-4">
                <form className="d-flex align-items-center gap-3 flex-xl-row flex-column">
                  <input type="text" className="sc-inp flex-grow-1 form-control" placeholder="Link..." value="https://dolares.app/refer/s4rQOiVhQHNeu4vMBjaJXkJt" />
                  <div className="d-flex gap-2 flex-xl-grow-0 flex-grow-1 col-xl col-12 px-0">
                    <button className="btn sc-btn sc-btn-normal flex-xl-grow-0 flex-grow-1 lh-1">
                      Copy
                    </button>
                    <button className="btn sc-btn flex-xl-grow-0 flex-grow-1 lh-1">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="site-card py-lg-5 px-lg-5 py-3">
              <div className="pe-lg-3">
                <div className="table-responsive">
                  <table className="table table-separated table-borderless table-aff-general ps-5">
                    <tbody>
                      <tr className="tag-row tag-done">
                        <td>
                          <div className="ps-lg-5 tag-tier fw-semibold f-20p">
                            Tire 1
                          </div>
                        </td>
                        <td>
                          <div className="tag-earning fw-semibold f-16p">
                            $0 Affilliate earning
                          </div>
                        </td>
                        <td>
                          <div className="tag-comission fw-semibold f-16p text-center">
                            0% Commission
                          </div>
                        </td>
                      </tr>
                      <tr className="tag-row tag-done">
                        <td>
                          <div className="ps-lg-5 tag-tier fw-semibold f-20p">
                            Tire 1
                          </div>
                        </td>
                        <td>
                          <div className="tag-earning fw-semibold f-16p">
                            $0 Affilliate earning
                          </div>
                        </td>
                        <td>
                          <div className="tag-comission fw-semibold f-16p text-center">
                            0% Commission
                          </div>
                        </td>
                      </tr>
                      <tr className="tag-row">
                        <td>
                          <div className="ps-lg-5 tag-tier fw-semibold f-20p">
                            Tire 1
                          </div>
                        </td>
                        <td>
                          <div className="tag-earning fw-semibold f-16p">
                            $0 Affilliate earning
                          </div>
                        </td>
                        <td>
                          <div className="tag-comission fw-semibold f-16p text-center">
                            0% Commission
                          </div>
                        </td>
                      </tr>
                      <tr className="tag-row">
                        <td>
                          <div className="ps-lg-5 tag-tier fw-semibold f-20p">
                            Tire 1
                          </div>
                        </td>
                        <td>
                          <div className="tag-earning fw-semibold f-16p">
                            $0 Affilliate earning
                          </div>
                        </td>
                        <td>
                          <div className="tag-comission fw-semibold f-16p text-center">
                            0% Commission
                          </div>
                        </td>
                      </tr>
                      <tr className="tag-row">
                        <td>
                          <div className="ps-lg-5 tag-tier fw-semibold f-20p">
                            Tire 1
                          </div>
                        </td>
                        <td>
                          <div className="tag-earning fw-semibold f-16p">
                            $0 Affilliate earning
                          </div>
                        </td>
                        <td>
                          <div className="tag-comission fw-semibold f-16p text-center">
                            0% Commission
                          </div>
                        </td>
                      </tr>
                      <tr className="tag-row">
                        <td>
                          <div className="ps-lg-5 tag-tier fw-semibold f-20p">
                            Tire 1
                          </div>
                        </td>
                        <td>
                          <div className="tag-earning fw-semibold f-16p">
                            $0 Affilliate earning
                          </div>
                        </td>
                        <td>
                          <div className="tag-comission fw-semibold f-16p text-center">
                            0% Commission
                          </div>
                        </td>
                      </tr>
                      <tr className="tag-row">
                        <td>
                          <div className="ps-lg-5 tag-tier fw-semibold f-20p">
                            Tire 1
                          </div>
                        </td>
                        <td>
                          <div className="tag-earning fw-semibold f-16p">
                            $0 Affilliate earning
                          </div>
                        </td>
                        <td>
                          <div className="tag-comission fw-semibold f-16p text-center">
                            0% Commission
                          </div>
                        </td>
                      </tr>
                      <tr className="tag-row">
                        <td>
                          <div className="ps-lg-5 tag-tier fw-semibold f-20p">
                            Tire 1
                          </div>
                        </td>
                        <td>
                          <div className="tag-earning fw-semibold f-16p">
                            $0 Affilliate earning
                          </div>
                        </td>
                        <td>
                          <div className="tag-comission fw-semibold f-16p text-center">
                            0% Commission
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
            <div className="aff-stats-box px-4 py-4">
              <div className="d-flex asb-flex px-lg-3 py-2 flex-wrap">
                <div className="af-stat">
                  <span className="af-text">
                    Total Referrals
                  </span>
                  <span className="d-flex flex-column align-items-center justify-content-center af-circle">
                    <span>
                      0
                    </span>
                  </span>
                </div>
                <div className="af-stat">
                  <span className="af-text">
                    Referral Earnings
                  </span>
                  <span className="d-flex flex-column align-items-center justify-content-center af-circle">
                    <span>
                      0
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="site-card">
              <div className="bg-transparent pt-4 px-md-5 px-4">
                <div className="d-flex justify-content-between gap-3 flex-lg-nowrap flex-wrap w-100">
                  <div className="d-flex flex-column gap-0 align-items-lg-start align-items-center text-lg-start text-center w-100">
                    <h3 className="f-28p fw-semibold d-flex align-items-center mb-0 gap-lg-3 gap-2 flex-wrap text-white justify-content-between w-100 flex-lg-row flex-column">
                      <span>
                        Refer & Earn
                      </span>
                      <div className="sc-socials">
                        <a href="#">
                          <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 15.7214C0.341653 15.7623 0.685604 15.7816 1.02968 15.7788C2.95758 15.7826 4.83248 15.1476 6.36164 13.9735C5.46962 13.9549 4.60498 13.6619 3.88578 13.1339C3.16658 12.6059 2.62779 11.8688 2.3429 11.0233C2.61121 11.0761 2.88426 11.1005 3.15767 11.0963C3.53782 11.0988 3.91669 11.0516 4.28466 10.9561C3.31903 10.7659 2.44871 10.248 1.82089 9.49008C1.19307 8.73214 0.846305 7.78061 0.83915 6.79645V6.75014C1.43665 7.07508 2.10274 7.25375 2.78265 7.27134C1.87363 6.68174 1.22825 5.76309 0.981842 4.70799C0.735434 3.6529 0.907085 2.54322 1.46093 1.61199C2.54799 2.92761 3.8983 4.00137 5.42497 4.76413C6.95165 5.52689 8.62101 5.96205 10.3258 6.04129C10.2566 5.72436 10.2233 5.40032 10.2267 5.07594C10.2307 4.51558 10.3449 3.96178 10.563 3.44558C10.7811 2.92939 11.0988 2.46106 11.4978 2.06762C11.8969 1.67419 12.3695 1.36303 12.8887 1.15226C13.4079 0.941491 13.9636 0.835238 14.524 0.839219C15.1114 0.838888 15.6928 0.957543 16.2329 1.18832C16.7731 1.41909 17.2608 1.75728 17.6666 2.18194C18.6271 1.99611 19.5491 1.649 20.3938 1.15554C20.0717 2.14189 19.3982 2.97544 18.5016 3.49762C19.3551 3.39206 20.1894 3.1662 20.9796 2.82646C20.4008 3.68414 19.6705 4.42886 18.8246 5.02472C18.8339 5.20346 18.8406 5.38585 18.8406 5.57214C18.8397 7.17043 18.521 8.75235 17.9031 10.2264C17.2853 11.7004 16.3805 13.037 15.2415 14.1583C14.1026 15.2795 12.752 16.1634 11.2685 16.7581C9.78495 17.3527 8.19801 17.6464 6.5999 17.6222C4.26371 17.6309 1.97376 16.9713 0 15.7214Z" fill="#2568EF"></path>
                          </svg>
                        </a>
                        <a href="#">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.64512 17.5726C4.948 17.5577 4.25844 17.4257 3.60523 17.1817C3.04678 16.9665 2.53948 16.6368 2.11592 16.2139C1.69236 15.7911 1.36187 15.2842 1.14565 14.7261C0.899789 14.0746 0.767213 13.386 0.753735 12.6897C0.714295 11.8011 0.705078 11.5149 0.705078 9.28273V9.17702C0.705078 6.9474 0.714319 6.65956 0.757115 5.76838C0.771164 5.07261 0.903074 4.38444 1.14729 3.73279C1.36405 3.17503 1.69478 2.66861 2.11828 2.24584C2.54177 1.82307 3.04873 1.49301 3.60686 1.27721C4.25998 1.03303 4.94973 0.901231 5.64686 0.887138C6.54307 0.847698 6.82915 0.838379 9.11163 0.838379C11.3941 0.838379 11.6795 0.847619 12.5799 0.890416C13.277 0.904589 13.9667 1.03639 14.6199 1.28049C15.1796 1.49202 15.687 1.82204 16.1077 2.24748C16.5368 2.66641 16.8686 3.17458 17.0794 3.73607C17.3245 4.38724 17.457 5.07521 17.4713 5.77084C17.4763 5.91098 17.4814 6.036 17.4873 6.156V12.1366C17.4805 12.3086 17.4729 12.4825 17.4637 12.6889C17.4498 13.385 17.3179 14.0734 17.0735 14.7253C16.8573 15.2834 16.5268 15.7903 16.1032 16.2131C15.6797 16.6359 15.1724 16.9656 14.6139 17.1809C13.9609 17.4253 13.2712 17.5574 12.574 17.5718C11.6778 17.6104 11.3916 17.6197 9.10999 17.6197C6.82835 17.6197 6.54133 17.6121 5.64512 17.5726ZM5.72318 2.4126C5.19022 2.41879 4.66229 2.51663 4.16237 2.70147C3.79822 2.83592 3.46855 3.04943 3.19733 3.32715C2.91622 3.59622 2.70041 3.92637 2.56633 4.29168C2.38167 4.79019 2.28403 5.31671 2.27766 5.84828C2.23822 6.73107 2.22809 6.99877 2.22809 9.2393C2.22809 11.4798 2.23822 11.7438 2.27766 12.6283C2.28427 13.1604 2.3819 13.6878 2.56633 14.1869C2.70172 14.5503 2.91573 14.8792 3.19313 15.1502C3.46454 15.4285 3.79485 15.6421 4.15981 15.7759C4.65924 15.9614 5.18704 16.0593 5.7198 16.0648C6.60426 16.1034 6.87279 16.1135 9.11583 16.1135C11.3589 16.1135 11.6266 16.1042 12.5119 16.0648C13.0449 16.0588 13.5729 15.961 14.0728 15.7759C14.4349 15.6359 14.7638 15.4219 15.0383 15.1474C15.3129 14.8728 15.5271 14.5438 15.6671 14.1816C15.8532 13.6835 15.9509 13.1567 15.9557 12.625C15.9952 11.7388 16.0053 11.4769 16.0053 9.23807C16.0053 6.99922 15.9952 6.73361 15.9557 5.84746C15.9504 5.31579 15.8527 4.78869 15.6671 4.29045C15.5323 3.92608 15.3176 3.59665 15.0386 3.32633C14.7685 3.04725 14.4385 2.83353 14.0736 2.70065C13.5742 2.51511 13.0464 2.41725 12.5136 2.41178C11.6291 2.37234 11.364 2.36221 9.11757 2.36221C6.87117 2.36221 6.61016 2.37316 5.72318 2.4126ZM4.79337 9.2307C4.79204 8.37617 5.04422 7.54036 5.518 6.8292C5.99178 6.11805 6.66596 5.56365 7.45505 5.23572C8.24415 4.90779 9.11272 4.82111 9.95099 4.98701C10.7893 5.1529 11.5595 5.5637 12.1642 6.16747C12.7689 6.77124 13.181 7.54084 13.3482 8.37884C13.5153 9.21685 13.4302 10.0858 13.1035 10.8754C12.7768 11.665 12.2232 12.3398 11.5128 12.8147C10.8024 13.2896 9.96708 13.5432 9.11256 13.5432C7.96787 13.5439 6.86974 13.0897 6.05978 12.2808C5.24981 11.4719 4.79426 10.3754 4.79337 9.2307ZM6.31146 9.2307C6.31047 9.78508 6.47396 10.3275 6.78123 10.7889C7.0885 11.2504 7.5257 11.6103 8.0376 11.8231C8.5495 12.036 9.11305 12.0921 9.6569 11.9846C10.2007 11.877 10.7005 11.6104 11.0928 11.2188C11.4852 10.8271 11.7526 10.3279 11.8611 9.78426C11.9696 9.2406 11.9143 8.67683 11.7024 8.16455C11.4905 7.65227 11.1314 7.21434 10.6705 6.90623C10.2096 6.59813 9.66776 6.4338 9.11337 6.4338C8.37114 6.43336 7.6591 6.72777 7.13371 7.25206C6.60832 7.77634 6.31257 8.48846 6.31146 9.2307ZM12.5949 4.74977C12.5949 4.55061 12.654 4.35566 12.7647 4.19006C12.8753 4.02446 13.0326 3.89546 13.2166 3.81925C13.4006 3.74303 13.6031 3.72303 13.7985 3.76188C13.9938 3.80074 14.1732 3.89681 14.314 4.03764C14.4548 4.17847 14.5507 4.35776 14.5896 4.55309C14.6284 4.74843 14.6085 4.95092 14.5323 5.13492C14.4561 5.31893 14.327 5.47622 14.1614 5.58687C13.9958 5.69752 13.8011 5.7565 13.602 5.7565C13.3349 5.7565 13.0788 5.65074 12.89 5.4619C12.7011 5.27305 12.5949 5.01683 12.5949 4.74977Z" fill="#7C77B4"></path>
                          </svg>
                        </a>
                        <a href="#">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5175 19.2996V13.0252C15.5175 11.5307 15.4874 9.61411 13.439 9.61411C11.3579 9.61411 11.039 11.2387 11.039 12.9179V19.2955H7.04215V6.41035H10.8804V8.16732H10.9366C11.3202 7.51034 11.8749 6.96984 12.5416 6.60333C13.2082 6.23683 13.9618 6.0581 14.722 6.08624C18.7701 6.08624 19.5169 8.75487 19.5169 12.2172V19.2996H15.5175ZM0.533725 19.2996V6.41362H4.53556V19.2996H0.533725ZM0.214844 2.31703C0.218985 1.85955 0.358391 1.41333 0.615571 1.03495C0.87275 0.656574 1.23614 0.362688 1.66 0.190477C2.08386 0.0182659 2.54919 -0.0246403 2.9974 0.067145C3.4456 0.15893 3.85663 0.381381 4.17868 0.706341C4.50072 1.0313 4.71938 1.44435 4.80712 1.89336C4.89486 2.34238 4.84783 2.80724 4.6718 3.22953C4.49578 3.65182 4.19869 4.01241 3.818 4.26617C3.43732 4.51993 2.99005 4.65541 2.53254 4.65543C2.22658 4.65521 1.92373 4.5946 1.64136 4.47678C1.35898 4.35896 1.10271 4.18643 0.887331 3.96911C0.671956 3.75178 0.501696 3.4941 0.386423 3.21068C0.27115 2.92726 0.213116 2.62381 0.215663 2.31785L0.214844 2.31703Z" fill="#7C77B4"></path>
                          </svg>
                        </a>
                        <a href="#">
                          <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.445 20.139V11.1316H0.759766V7.55172H3.445V4.73229C3.445 1.66771 5.10822 0.000189021 7.53924 0.000189021C8.35984 -0.00339252 9.17988 0.0439248 9.99461 0.141959V3.34327H8.30873C6.98791 3.34327 6.73113 4.05163 6.73113 5.08631V7.55172H9.71353L9.30481 11.1324H6.73195V20.139H3.445Z" fill="#7C77B4"></path>
                          </svg>
                        </a>
                      </div>
                    </h3>
                    <p className="mb-0 lato page-desc">
                      Lorem ipsum dolor sit amet, adipisicing elit, seiutempor incididunt ut Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-bottom px-md-5 px-4">
                <form className="d-flex align-items-center gap-3 flex-xl-row flex-column">
                  <input type="text" className="sc-inp flex-grow-1 form-control" placeholder="Link..." value="https://dolares.app/refer/s4rQOiVhQHNeu4vMBjaJXkJt" />
                  <div className="d-flex gap-2 flex-xl-grow-0 flex-grow-1 col-xl col-12 px-0">
                    <button className="btn sc-btn sc-btn-normal flex-xl-grow-0 flex-grow-1 lh-1">
                      Copy
                    </button>
                    <button className="btn sc-btn flex-xl-grow-0 flex-grow-1 lh-1">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="site-card site-card-lighter py-md-5 px-2 py-md-0 py-2">
              <div className="pe-lg-3">
                <div className="table-responsive">
                  <table className="table table-separated table-borderless table-referrals ps-lg-5">
                    <thead>
                      <tr>
                        <th>
                          <span className="ps-lg-5">
                            Username
                          </span>
                        </th>
                        <th>
                          Registered
                        </th>
                        <th>
                          Earnings
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user ps-lg-5 d-flex align-items-center gap-2 fw-semibold f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg className="d-md-inline-block d-none" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="tar-date fw-semibold f-16p">
                            <span>
                              24 Septmber 2024
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex align-items-center gap-1 fw-semibold f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user ps-lg-5 d-flex align-items-center gap-2 fw-semibold f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg className="d-md-inline-block d-none" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="tar-date fw-semibold f-16p">
                            <span>
                              24 Septmber 2024
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex align-items-center gap-1 fw-semibold f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user ps-lg-5 d-flex align-items-center gap-2 fw-semibold f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg className="d-md-inline-block d-none" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="tar-date fw-semibold f-16p">
                            <span>
                              24 Septmber 2024
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex align-items-center gap-1 fw-semibold f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user ps-lg-5 d-flex align-items-center gap-2 fw-semibold f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg className="d-md-inline-block d-none" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="tar-date fw-semibold f-16p">
                            <span>
                              24 Septmber 2024
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex align-items-center gap-1 fw-semibold f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user ps-lg-5 d-flex align-items-center gap-2 fw-semibold f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg className="d-md-inline-block d-none" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="tar-date fw-semibold f-16p">
                            <span>
                              24 Septmber 2024
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex align-items-center gap-1 fw-semibold f-16p text-center">
                            <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                            <span className="text-white">
                              1500
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#" onClick={() => { openModal('user') }} className="tar-user ps-lg-5 d-flex align-items-center gap-2 fw-semibold f-16p">
                            <img src="/dashboard-assets/img/person.png" alt="Person" className="rounded-circle d-md-inline-block d-none" height="35" width="35" />
                            <span>
                              Adeel Raza
                            </span>
                            <svg className="d-md-inline-block d-none" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                            </svg>
                          </a>
                        </td>
                        <td>
                          <div className="tar-date fw-semibold f-16p">
                            <span>
                              24 Septmber 2024
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="tar-earning d-flex align-items-center gap-1 fw-semibold f-16p text-center">
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
            <div className="site-card">
              <div className="bg-transparent pt-4 px-md-5 px-4">
                <div className="d-flex justify-content-between gap-3 flex-lg-nowrap flex-wrap w-100">
                  <div className="d-flex flex-column gap-0 align-items-lg-start align-items-center text-lg-start text-center w-100">
                    <h3 className="f-28p fw-semibold d-flex align-items-center mb-0 gap-lg-3 gap-2 flex-wrap text-white justify-content-between w-100 flex-lg-row flex-column">
                      <span>
                        Refer & Earn
                      </span>
                      <div className="sc-socials">
                        <a href="#">
                          <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 15.7214C0.341653 15.7623 0.685604 15.7816 1.02968 15.7788C2.95758 15.7826 4.83248 15.1476 6.36164 13.9735C5.46962 13.9549 4.60498 13.6619 3.88578 13.1339C3.16658 12.6059 2.62779 11.8688 2.3429 11.0233C2.61121 11.0761 2.88426 11.1005 3.15767 11.0963C3.53782 11.0988 3.91669 11.0516 4.28466 10.9561C3.31903 10.7659 2.44871 10.248 1.82089 9.49008C1.19307 8.73214 0.846305 7.78061 0.83915 6.79645V6.75014C1.43665 7.07508 2.10274 7.25375 2.78265 7.27134C1.87363 6.68174 1.22825 5.76309 0.981842 4.70799C0.735434 3.6529 0.907085 2.54322 1.46093 1.61199C2.54799 2.92761 3.8983 4.00137 5.42497 4.76413C6.95165 5.52689 8.62101 5.96205 10.3258 6.04129C10.2566 5.72436 10.2233 5.40032 10.2267 5.07594C10.2307 4.51558 10.3449 3.96178 10.563 3.44558C10.7811 2.92939 11.0988 2.46106 11.4978 2.06762C11.8969 1.67419 12.3695 1.36303 12.8887 1.15226C13.4079 0.941491 13.9636 0.835238 14.524 0.839219C15.1114 0.838888 15.6928 0.957543 16.2329 1.18832C16.7731 1.41909 17.2608 1.75728 17.6666 2.18194C18.6271 1.99611 19.5491 1.649 20.3938 1.15554C20.0717 2.14189 19.3982 2.97544 18.5016 3.49762C19.3551 3.39206 20.1894 3.1662 20.9796 2.82646C20.4008 3.68414 19.6705 4.42886 18.8246 5.02472C18.8339 5.20346 18.8406 5.38585 18.8406 5.57214C18.8397 7.17043 18.521 8.75235 17.9031 10.2264C17.2853 11.7004 16.3805 13.037 15.2415 14.1583C14.1026 15.2795 12.752 16.1634 11.2685 16.7581C9.78495 17.3527 8.19801 17.6464 6.5999 17.6222C4.26371 17.6309 1.97376 16.9713 0 15.7214Z" fill="#2568EF"></path>
                          </svg>
                        </a>
                        <a href="#">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.64512 17.5726C4.948 17.5577 4.25844 17.4257 3.60523 17.1817C3.04678 16.9665 2.53948 16.6368 2.11592 16.2139C1.69236 15.7911 1.36187 15.2842 1.14565 14.7261C0.899789 14.0746 0.767213 13.386 0.753735 12.6897C0.714295 11.8011 0.705078 11.5149 0.705078 9.28273V9.17702C0.705078 6.9474 0.714319 6.65956 0.757115 5.76838C0.771164 5.07261 0.903074 4.38444 1.14729 3.73279C1.36405 3.17503 1.69478 2.66861 2.11828 2.24584C2.54177 1.82307 3.04873 1.49301 3.60686 1.27721C4.25998 1.03303 4.94973 0.901231 5.64686 0.887138C6.54307 0.847698 6.82915 0.838379 9.11163 0.838379C11.3941 0.838379 11.6795 0.847619 12.5799 0.890416C13.277 0.904589 13.9667 1.03639 14.6199 1.28049C15.1796 1.49202 15.687 1.82204 16.1077 2.24748C16.5368 2.66641 16.8686 3.17458 17.0794 3.73607C17.3245 4.38724 17.457 5.07521 17.4713 5.77084C17.4763 5.91098 17.4814 6.036 17.4873 6.156V12.1366C17.4805 12.3086 17.4729 12.4825 17.4637 12.6889C17.4498 13.385 17.3179 14.0734 17.0735 14.7253C16.8573 15.2834 16.5268 15.7903 16.1032 16.2131C15.6797 16.6359 15.1724 16.9656 14.6139 17.1809C13.9609 17.4253 13.2712 17.5574 12.574 17.5718C11.6778 17.6104 11.3916 17.6197 9.10999 17.6197C6.82835 17.6197 6.54133 17.6121 5.64512 17.5726ZM5.72318 2.4126C5.19022 2.41879 4.66229 2.51663 4.16237 2.70147C3.79822 2.83592 3.46855 3.04943 3.19733 3.32715C2.91622 3.59622 2.70041 3.92637 2.56633 4.29168C2.38167 4.79019 2.28403 5.31671 2.27766 5.84828C2.23822 6.73107 2.22809 6.99877 2.22809 9.2393C2.22809 11.4798 2.23822 11.7438 2.27766 12.6283C2.28427 13.1604 2.3819 13.6878 2.56633 14.1869C2.70172 14.5503 2.91573 14.8792 3.19313 15.1502C3.46454 15.4285 3.79485 15.6421 4.15981 15.7759C4.65924 15.9614 5.18704 16.0593 5.7198 16.0648C6.60426 16.1034 6.87279 16.1135 9.11583 16.1135C11.3589 16.1135 11.6266 16.1042 12.5119 16.0648C13.0449 16.0588 13.5729 15.961 14.0728 15.7759C14.4349 15.6359 14.7638 15.4219 15.0383 15.1474C15.3129 14.8728 15.5271 14.5438 15.6671 14.1816C15.8532 13.6835 15.9509 13.1567 15.9557 12.625C15.9952 11.7388 16.0053 11.4769 16.0053 9.23807C16.0053 6.99922 15.9952 6.73361 15.9557 5.84746C15.9504 5.31579 15.8527 4.78869 15.6671 4.29045C15.5323 3.92608 15.3176 3.59665 15.0386 3.32633C14.7685 3.04725 14.4385 2.83353 14.0736 2.70065C13.5742 2.51511 13.0464 2.41725 12.5136 2.41178C11.6291 2.37234 11.364 2.36221 9.11757 2.36221C6.87117 2.36221 6.61016 2.37316 5.72318 2.4126ZM4.79337 9.2307C4.79204 8.37617 5.04422 7.54036 5.518 6.8292C5.99178 6.11805 6.66596 5.56365 7.45505 5.23572C8.24415 4.90779 9.11272 4.82111 9.95099 4.98701C10.7893 5.1529 11.5595 5.5637 12.1642 6.16747C12.7689 6.77124 13.181 7.54084 13.3482 8.37884C13.5153 9.21685 13.4302 10.0858 13.1035 10.8754C12.7768 11.665 12.2232 12.3398 11.5128 12.8147C10.8024 13.2896 9.96708 13.5432 9.11256 13.5432C7.96787 13.5439 6.86974 13.0897 6.05978 12.2808C5.24981 11.4719 4.79426 10.3754 4.79337 9.2307ZM6.31146 9.2307C6.31047 9.78508 6.47396 10.3275 6.78123 10.7889C7.0885 11.2504 7.5257 11.6103 8.0376 11.8231C8.5495 12.036 9.11305 12.0921 9.6569 11.9846C10.2007 11.877 10.7005 11.6104 11.0928 11.2188C11.4852 10.8271 11.7526 10.3279 11.8611 9.78426C11.9696 9.2406 11.9143 8.67683 11.7024 8.16455C11.4905 7.65227 11.1314 7.21434 10.6705 6.90623C10.2096 6.59813 9.66776 6.4338 9.11337 6.4338C8.37114 6.43336 7.6591 6.72777 7.13371 7.25206C6.60832 7.77634 6.31257 8.48846 6.31146 9.2307ZM12.5949 4.74977C12.5949 4.55061 12.654 4.35566 12.7647 4.19006C12.8753 4.02446 13.0326 3.89546 13.2166 3.81925C13.4006 3.74303 13.6031 3.72303 13.7985 3.76188C13.9938 3.80074 14.1732 3.89681 14.314 4.03764C14.4548 4.17847 14.5507 4.35776 14.5896 4.55309C14.6284 4.74843 14.6085 4.95092 14.5323 5.13492C14.4561 5.31893 14.327 5.47622 14.1614 5.58687C13.9958 5.69752 13.8011 5.7565 13.602 5.7565C13.3349 5.7565 13.0788 5.65074 12.89 5.4619C12.7011 5.27305 12.5949 5.01683 12.5949 4.74977Z" fill="#7C77B4"></path>
                          </svg>
                        </a>
                        <a href="#">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5175 19.2996V13.0252C15.5175 11.5307 15.4874 9.61411 13.439 9.61411C11.3579 9.61411 11.039 11.2387 11.039 12.9179V19.2955H7.04215V6.41035H10.8804V8.16732H10.9366C11.3202 7.51034 11.8749 6.96984 12.5416 6.60333C13.2082 6.23683 13.9618 6.0581 14.722 6.08624C18.7701 6.08624 19.5169 8.75487 19.5169 12.2172V19.2996H15.5175ZM0.533725 19.2996V6.41362H4.53556V19.2996H0.533725ZM0.214844 2.31703C0.218985 1.85955 0.358391 1.41333 0.615571 1.03495C0.87275 0.656574 1.23614 0.362688 1.66 0.190477C2.08386 0.0182659 2.54919 -0.0246403 2.9974 0.067145C3.4456 0.15893 3.85663 0.381381 4.17868 0.706341C4.50072 1.0313 4.71938 1.44435 4.80712 1.89336C4.89486 2.34238 4.84783 2.80724 4.6718 3.22953C4.49578 3.65182 4.19869 4.01241 3.818 4.26617C3.43732 4.51993 2.99005 4.65541 2.53254 4.65543C2.22658 4.65521 1.92373 4.5946 1.64136 4.47678C1.35898 4.35896 1.10271 4.18643 0.887331 3.96911C0.671956 3.75178 0.501696 3.4941 0.386423 3.21068C0.27115 2.92726 0.213116 2.62381 0.215663 2.31785L0.214844 2.31703Z" fill="#7C77B4"></path>
                          </svg>
                        </a>
                        <a href="#">
                          <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.445 20.139V11.1316H0.759766V7.55172H3.445V4.73229C3.445 1.66771 5.10822 0.000189021 7.53924 0.000189021C8.35984 -0.00339252 9.17988 0.0439248 9.99461 0.141959V3.34327H8.30873C6.98791 3.34327 6.73113 4.05163 6.73113 5.08631V7.55172H9.71353L9.30481 11.1324H6.73195V20.139H3.445Z" fill="#7C77B4"></path>
                          </svg>
                        </a>
                      </div>
                    </h3>
                    <p className="mb-0 lato page-desc">
                      Lorem ipsum dolor sit amet, adipisicing elit, seiutempor incididunt ut Lorem ipsum dolor sit amet,
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-bottom px-md-5 px-4">
                <form className="d-flex align-items-center gap-3 flex-xl-row flex-column">
                  <input type="text" className="sc-inp flex-grow-1 form-control" placeholder="Link..." value="https://dolares.app/refer/s4rQOiVhQHNeu4vMBjaJXkJt" />
                  <div className="d-flex gap-2 flex-xl-grow-0 flex-grow-1 col-xl col-12 px-0">
                    <button className="btn sc-btn sc-btn-normal flex-xl-grow-0 flex-grow-1 lh-1">
                      Copy
                    </button>
                    <button className="btn sc-btn flex-xl-grow-0 flex-grow-1 lh-1">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="promo-flex-1 d-flex gap-4 flex-wrap">
              <div className="promo-card pc-1">
                <img src="/dashboard-assets/img/promo1.png" alt="Promo" className="promo-img img-fluid" />
                <div className="d-flex align-items-center justify-content-between px-md-4">
                  <div className="sc-socials">
                    <a href="#">
                      <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 15.7214C0.341653 15.7623 0.685604 15.7816 1.02968 15.7788C2.95758 15.7826 4.83248 15.1476 6.36164 13.9735C5.46962 13.9549 4.60498 13.6619 3.88578 13.1339C3.16658 12.6059 2.62779 11.8688 2.3429 11.0233C2.61121 11.0761 2.88426 11.1005 3.15767 11.0963C3.53782 11.0988 3.91669 11.0516 4.28466 10.9561C3.31903 10.7659 2.44871 10.248 1.82089 9.49008C1.19307 8.73214 0.846305 7.78061 0.83915 6.79645V6.75014C1.43665 7.07508 2.10274 7.25375 2.78265 7.27134C1.87363 6.68174 1.22825 5.76309 0.981842 4.70799C0.735434 3.6529 0.907085 2.54322 1.46093 1.61199C2.54799 2.92761 3.8983 4.00137 5.42497 4.76413C6.95165 5.52689 8.62101 5.96205 10.3258 6.04129C10.2566 5.72436 10.2233 5.40032 10.2267 5.07594C10.2307 4.51558 10.3449 3.96178 10.563 3.44558C10.7811 2.92939 11.0988 2.46106 11.4978 2.06762C11.8969 1.67419 12.3695 1.36303 12.8887 1.15226C13.4079 0.941491 13.9636 0.835238 14.524 0.839219C15.1114 0.838888 15.6928 0.957543 16.2329 1.18832C16.7731 1.41909 17.2608 1.75728 17.6666 2.18194C18.6271 1.99611 19.5491 1.649 20.3938 1.15554C20.0717 2.14189 19.3982 2.97544 18.5016 3.49762C19.3551 3.39206 20.1894 3.1662 20.9796 2.82646C20.4008 3.68414 19.6705 4.42886 18.8246 5.02472C18.8339 5.20346 18.8406 5.38585 18.8406 5.57214C18.8397 7.17043 18.521 8.75235 17.9031 10.2264C17.2853 11.7004 16.3805 13.037 15.2415 14.1583C14.1026 15.2795 12.752 16.1634 11.2685 16.7581C9.78495 17.3527 8.19801 17.6464 6.5999 17.6222C4.26371 17.6309 1.97376 16.9713 0 15.7214Z" fill="#2568EF"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.64512 17.5726C4.948 17.5577 4.25844 17.4257 3.60523 17.1817C3.04678 16.9665 2.53948 16.6368 2.11592 16.2139C1.69236 15.7911 1.36187 15.2842 1.14565 14.7261C0.899789 14.0746 0.767213 13.386 0.753735 12.6897C0.714295 11.8011 0.705078 11.5149 0.705078 9.28273V9.17702C0.705078 6.9474 0.714319 6.65956 0.757115 5.76838C0.771164 5.07261 0.903074 4.38444 1.14729 3.73279C1.36405 3.17503 1.69478 2.66861 2.11828 2.24584C2.54177 1.82307 3.04873 1.49301 3.60686 1.27721C4.25998 1.03303 4.94973 0.901231 5.64686 0.887138C6.54307 0.847698 6.82915 0.838379 9.11163 0.838379C11.3941 0.838379 11.6795 0.847619 12.5799 0.890416C13.277 0.904589 13.9667 1.03639 14.6199 1.28049C15.1796 1.49202 15.687 1.82204 16.1077 2.24748C16.5368 2.66641 16.8686 3.17458 17.0794 3.73607C17.3245 4.38724 17.457 5.07521 17.4713 5.77084C17.4763 5.91098 17.4814 6.036 17.4873 6.156V12.1366C17.4805 12.3086 17.4729 12.4825 17.4637 12.6889C17.4498 13.385 17.3179 14.0734 17.0735 14.7253C16.8573 15.2834 16.5268 15.7903 16.1032 16.2131C15.6797 16.6359 15.1724 16.9656 14.6139 17.1809C13.9609 17.4253 13.2712 17.5574 12.574 17.5718C11.6778 17.6104 11.3916 17.6197 9.10999 17.6197C6.82835 17.6197 6.54133 17.6121 5.64512 17.5726ZM5.72318 2.4126C5.19022 2.41879 4.66229 2.51663 4.16237 2.70147C3.79822 2.83592 3.46855 3.04943 3.19733 3.32715C2.91622 3.59622 2.70041 3.92637 2.56633 4.29168C2.38167 4.79019 2.28403 5.31671 2.27766 5.84828C2.23822 6.73107 2.22809 6.99877 2.22809 9.2393C2.22809 11.4798 2.23822 11.7438 2.27766 12.6283C2.28427 13.1604 2.3819 13.6878 2.56633 14.1869C2.70172 14.5503 2.91573 14.8792 3.19313 15.1502C3.46454 15.4285 3.79485 15.6421 4.15981 15.7759C4.65924 15.9614 5.18704 16.0593 5.7198 16.0648C6.60426 16.1034 6.87279 16.1135 9.11583 16.1135C11.3589 16.1135 11.6266 16.1042 12.5119 16.0648C13.0449 16.0588 13.5729 15.961 14.0728 15.7759C14.4349 15.6359 14.7638 15.4219 15.0383 15.1474C15.3129 14.8728 15.5271 14.5438 15.6671 14.1816C15.8532 13.6835 15.9509 13.1567 15.9557 12.625C15.9952 11.7388 16.0053 11.4769 16.0053 9.23807C16.0053 6.99922 15.9952 6.73361 15.9557 5.84746C15.9504 5.31579 15.8527 4.78869 15.6671 4.29045C15.5323 3.92608 15.3176 3.59665 15.0386 3.32633C14.7685 3.04725 14.4385 2.83353 14.0736 2.70065C13.5742 2.51511 13.0464 2.41725 12.5136 2.41178C11.6291 2.37234 11.364 2.36221 9.11757 2.36221C6.87117 2.36221 6.61016 2.37316 5.72318 2.4126ZM4.79337 9.2307C4.79204 8.37617 5.04422 7.54036 5.518 6.8292C5.99178 6.11805 6.66596 5.56365 7.45505 5.23572C8.24415 4.90779 9.11272 4.82111 9.95099 4.98701C10.7893 5.1529 11.5595 5.5637 12.1642 6.16747C12.7689 6.77124 13.181 7.54084 13.3482 8.37884C13.5153 9.21685 13.4302 10.0858 13.1035 10.8754C12.7768 11.665 12.2232 12.3398 11.5128 12.8147C10.8024 13.2896 9.96708 13.5432 9.11256 13.5432C7.96787 13.5439 6.86974 13.0897 6.05978 12.2808C5.24981 11.4719 4.79426 10.3754 4.79337 9.2307ZM6.31146 9.2307C6.31047 9.78508 6.47396 10.3275 6.78123 10.7889C7.0885 11.2504 7.5257 11.6103 8.0376 11.8231C8.5495 12.036 9.11305 12.0921 9.6569 11.9846C10.2007 11.877 10.7005 11.6104 11.0928 11.2188C11.4852 10.8271 11.7526 10.3279 11.8611 9.78426C11.9696 9.2406 11.9143 8.67683 11.7024 8.16455C11.4905 7.65227 11.1314 7.21434 10.6705 6.90623C10.2096 6.59813 9.66776 6.4338 9.11337 6.4338C8.37114 6.43336 7.6591 6.72777 7.13371 7.25206C6.60832 7.77634 6.31257 8.48846 6.31146 9.2307ZM12.5949 4.74977C12.5949 4.55061 12.654 4.35566 12.7647 4.19006C12.8753 4.02446 13.0326 3.89546 13.2166 3.81925C13.4006 3.74303 13.6031 3.72303 13.7985 3.76188C13.9938 3.80074 14.1732 3.89681 14.314 4.03764C14.4548 4.17847 14.5507 4.35776 14.5896 4.55309C14.6284 4.74843 14.6085 4.95092 14.5323 5.13492C14.4561 5.31893 14.327 5.47622 14.1614 5.58687C13.9958 5.69752 13.8011 5.7565 13.602 5.7565C13.3349 5.7565 13.0788 5.65074 12.89 5.4619C12.7011 5.27305 12.5949 5.01683 12.5949 4.74977Z" fill="#ffffff"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5175 19.2996V13.0252C15.5175 11.5307 15.4874 9.61411 13.439 9.61411C11.3579 9.61411 11.039 11.2387 11.039 12.9179V19.2955H7.04215V6.41035H10.8804V8.16732H10.9366C11.3202 7.51034 11.8749 6.96984 12.5416 6.60333C13.2082 6.23683 13.9618 6.0581 14.722 6.08624C18.7701 6.08624 19.5169 8.75487 19.5169 12.2172V19.2996H15.5175ZM0.533725 19.2996V6.41362H4.53556V19.2996H0.533725ZM0.214844 2.31703C0.218985 1.85955 0.358391 1.41333 0.615571 1.03495C0.87275 0.656574 1.23614 0.362688 1.66 0.190477C2.08386 0.0182659 2.54919 -0.0246403 2.9974 0.067145C3.4456 0.15893 3.85663 0.381381 4.17868 0.706341C4.50072 1.0313 4.71938 1.44435 4.80712 1.89336C4.89486 2.34238 4.84783 2.80724 4.6718 3.22953C4.49578 3.65182 4.19869 4.01241 3.818 4.26617C3.43732 4.51993 2.99005 4.65541 2.53254 4.65543C2.22658 4.65521 1.92373 4.5946 1.64136 4.47678C1.35898 4.35896 1.10271 4.18643 0.887331 3.96911C0.671956 3.75178 0.501696 3.4941 0.386423 3.21068C0.27115 2.92726 0.213116 2.62381 0.215663 2.31785L0.214844 2.31703Z" fill="#ffffff"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.445 20.139V11.1316H0.759766V7.55172H3.445V4.73229C3.445 1.66771 5.10822 0.000189021 7.53924 0.000189021C8.35984 -0.00339252 9.17988 0.0439248 9.99461 0.141959V3.34327H8.30873C6.98791 3.34327 6.73113 4.05163 6.73113 5.08631V7.55172H9.71353L9.30481 11.1324H6.73195V20.139H3.445Z" fill="#ffffff"></path>
                      </svg>
                    </a>
                  </div>
                  <a href="#" className="btn download-btn d-flex align-items-center gap-2">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1719 0.4375H5.39062C2.41208 0.4375 0 2.84958 0 5.82812V16.6185C0 19.5879 2.41208 22 5.39062 22H16.181C19.1504 22 21.5625 19.5879 21.5625 16.6094V5.82812C21.5625 2.84958 19.1504 0.4375 16.1719 0.4375ZM15.1486 12.0319L12.2888 14.8917C11.4939 15.6866 10.2239 15.6774 9.42902 14.8917L6.57839 12.0319C6.31343 11.7669 6.31343 11.3375 6.57839 11.0817C6.84335 10.8167 7.27278 10.8167 7.5286 11.0817L10.1874 13.7405V6.84229C10.1874 6.46769 10.4889 6.16618 10.8635 6.16618C11.2381 6.16618 11.5396 6.46769 11.5396 6.84229V13.7405L14.1984 11.0817C14.4633 10.8167 14.8927 10.8167 15.1486 11.0817C15.4135 11.3375 15.4135 11.7669 15.1486 12.0319Z" fill="#EF7C16"></path>
                    </svg>
                    <span className="fw-semibold">
                      Download
                    </span>
                  </a>
                </div>
              </div>
              <div className="promo-card pc-2">
                <img src="/dashboard-assets/img/promo2.png" alt="Promo" className="promo-img img-fluid" />
                <div className="d-flex align-items-center justify-content-between px-md-4">
                  <div className="sc-socials">
                    <a href="#">
                      <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 15.7214C0.341653 15.7623 0.685604 15.7816 1.02968 15.7788C2.95758 15.7826 4.83248 15.1476 6.36164 13.9735C5.46962 13.9549 4.60498 13.6619 3.88578 13.1339C3.16658 12.6059 2.62779 11.8688 2.3429 11.0233C2.61121 11.0761 2.88426 11.1005 3.15767 11.0963C3.53782 11.0988 3.91669 11.0516 4.28466 10.9561C3.31903 10.7659 2.44871 10.248 1.82089 9.49008C1.19307 8.73214 0.846305 7.78061 0.83915 6.79645V6.75014C1.43665 7.07508 2.10274 7.25375 2.78265 7.27134C1.87363 6.68174 1.22825 5.76309 0.981842 4.70799C0.735434 3.6529 0.907085 2.54322 1.46093 1.61199C2.54799 2.92761 3.8983 4.00137 5.42497 4.76413C6.95165 5.52689 8.62101 5.96205 10.3258 6.04129C10.2566 5.72436 10.2233 5.40032 10.2267 5.07594C10.2307 4.51558 10.3449 3.96178 10.563 3.44558C10.7811 2.92939 11.0988 2.46106 11.4978 2.06762C11.8969 1.67419 12.3695 1.36303 12.8887 1.15226C13.4079 0.941491 13.9636 0.835238 14.524 0.839219C15.1114 0.838888 15.6928 0.957543 16.2329 1.18832C16.7731 1.41909 17.2608 1.75728 17.6666 2.18194C18.6271 1.99611 19.5491 1.649 20.3938 1.15554C20.0717 2.14189 19.3982 2.97544 18.5016 3.49762C19.3551 3.39206 20.1894 3.1662 20.9796 2.82646C20.4008 3.68414 19.6705 4.42886 18.8246 5.02472C18.8339 5.20346 18.8406 5.38585 18.8406 5.57214C18.8397 7.17043 18.521 8.75235 17.9031 10.2264C17.2853 11.7004 16.3805 13.037 15.2415 14.1583C14.1026 15.2795 12.752 16.1634 11.2685 16.7581C9.78495 17.3527 8.19801 17.6464 6.5999 17.6222C4.26371 17.6309 1.97376 16.9713 0 15.7214Z" fill="#2568EF"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.64512 17.5726C4.948 17.5577 4.25844 17.4257 3.60523 17.1817C3.04678 16.9665 2.53948 16.6368 2.11592 16.2139C1.69236 15.7911 1.36187 15.2842 1.14565 14.7261C0.899789 14.0746 0.767213 13.386 0.753735 12.6897C0.714295 11.8011 0.705078 11.5149 0.705078 9.28273V9.17702C0.705078 6.9474 0.714319 6.65956 0.757115 5.76838C0.771164 5.07261 0.903074 4.38444 1.14729 3.73279C1.36405 3.17503 1.69478 2.66861 2.11828 2.24584C2.54177 1.82307 3.04873 1.49301 3.60686 1.27721C4.25998 1.03303 4.94973 0.901231 5.64686 0.887138C6.54307 0.847698 6.82915 0.838379 9.11163 0.838379C11.3941 0.838379 11.6795 0.847619 12.5799 0.890416C13.277 0.904589 13.9667 1.03639 14.6199 1.28049C15.1796 1.49202 15.687 1.82204 16.1077 2.24748C16.5368 2.66641 16.8686 3.17458 17.0794 3.73607C17.3245 4.38724 17.457 5.07521 17.4713 5.77084C17.4763 5.91098 17.4814 6.036 17.4873 6.156V12.1366C17.4805 12.3086 17.4729 12.4825 17.4637 12.6889C17.4498 13.385 17.3179 14.0734 17.0735 14.7253C16.8573 15.2834 16.5268 15.7903 16.1032 16.2131C15.6797 16.6359 15.1724 16.9656 14.6139 17.1809C13.9609 17.4253 13.2712 17.5574 12.574 17.5718C11.6778 17.6104 11.3916 17.6197 9.10999 17.6197C6.82835 17.6197 6.54133 17.6121 5.64512 17.5726ZM5.72318 2.4126C5.19022 2.41879 4.66229 2.51663 4.16237 2.70147C3.79822 2.83592 3.46855 3.04943 3.19733 3.32715C2.91622 3.59622 2.70041 3.92637 2.56633 4.29168C2.38167 4.79019 2.28403 5.31671 2.27766 5.84828C2.23822 6.73107 2.22809 6.99877 2.22809 9.2393C2.22809 11.4798 2.23822 11.7438 2.27766 12.6283C2.28427 13.1604 2.3819 13.6878 2.56633 14.1869C2.70172 14.5503 2.91573 14.8792 3.19313 15.1502C3.46454 15.4285 3.79485 15.6421 4.15981 15.7759C4.65924 15.9614 5.18704 16.0593 5.7198 16.0648C6.60426 16.1034 6.87279 16.1135 9.11583 16.1135C11.3589 16.1135 11.6266 16.1042 12.5119 16.0648C13.0449 16.0588 13.5729 15.961 14.0728 15.7759C14.4349 15.6359 14.7638 15.4219 15.0383 15.1474C15.3129 14.8728 15.5271 14.5438 15.6671 14.1816C15.8532 13.6835 15.9509 13.1567 15.9557 12.625C15.9952 11.7388 16.0053 11.4769 16.0053 9.23807C16.0053 6.99922 15.9952 6.73361 15.9557 5.84746C15.9504 5.31579 15.8527 4.78869 15.6671 4.29045C15.5323 3.92608 15.3176 3.59665 15.0386 3.32633C14.7685 3.04725 14.4385 2.83353 14.0736 2.70065C13.5742 2.51511 13.0464 2.41725 12.5136 2.41178C11.6291 2.37234 11.364 2.36221 9.11757 2.36221C6.87117 2.36221 6.61016 2.37316 5.72318 2.4126ZM4.79337 9.2307C4.79204 8.37617 5.04422 7.54036 5.518 6.8292C5.99178 6.11805 6.66596 5.56365 7.45505 5.23572C8.24415 4.90779 9.11272 4.82111 9.95099 4.98701C10.7893 5.1529 11.5595 5.5637 12.1642 6.16747C12.7689 6.77124 13.181 7.54084 13.3482 8.37884C13.5153 9.21685 13.4302 10.0858 13.1035 10.8754C12.7768 11.665 12.2232 12.3398 11.5128 12.8147C10.8024 13.2896 9.96708 13.5432 9.11256 13.5432C7.96787 13.5439 6.86974 13.0897 6.05978 12.2808C5.24981 11.4719 4.79426 10.3754 4.79337 9.2307ZM6.31146 9.2307C6.31047 9.78508 6.47396 10.3275 6.78123 10.7889C7.0885 11.2504 7.5257 11.6103 8.0376 11.8231C8.5495 12.036 9.11305 12.0921 9.6569 11.9846C10.2007 11.877 10.7005 11.6104 11.0928 11.2188C11.4852 10.8271 11.7526 10.3279 11.8611 9.78426C11.9696 9.2406 11.9143 8.67683 11.7024 8.16455C11.4905 7.65227 11.1314 7.21434 10.6705 6.90623C10.2096 6.59813 9.66776 6.4338 9.11337 6.4338C8.37114 6.43336 7.6591 6.72777 7.13371 7.25206C6.60832 7.77634 6.31257 8.48846 6.31146 9.2307ZM12.5949 4.74977C12.5949 4.55061 12.654 4.35566 12.7647 4.19006C12.8753 4.02446 13.0326 3.89546 13.2166 3.81925C13.4006 3.74303 13.6031 3.72303 13.7985 3.76188C13.9938 3.80074 14.1732 3.89681 14.314 4.03764C14.4548 4.17847 14.5507 4.35776 14.5896 4.55309C14.6284 4.74843 14.6085 4.95092 14.5323 5.13492C14.4561 5.31893 14.327 5.47622 14.1614 5.58687C13.9958 5.69752 13.8011 5.7565 13.602 5.7565C13.3349 5.7565 13.0788 5.65074 12.89 5.4619C12.7011 5.27305 12.5949 5.01683 12.5949 4.74977Z" fill="#ffffff"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5175 19.2996V13.0252C15.5175 11.5307 15.4874 9.61411 13.439 9.61411C11.3579 9.61411 11.039 11.2387 11.039 12.9179V19.2955H7.04215V6.41035H10.8804V8.16732H10.9366C11.3202 7.51034 11.8749 6.96984 12.5416 6.60333C13.2082 6.23683 13.9618 6.0581 14.722 6.08624C18.7701 6.08624 19.5169 8.75487 19.5169 12.2172V19.2996H15.5175ZM0.533725 19.2996V6.41362H4.53556V19.2996H0.533725ZM0.214844 2.31703C0.218985 1.85955 0.358391 1.41333 0.615571 1.03495C0.87275 0.656574 1.23614 0.362688 1.66 0.190477C2.08386 0.0182659 2.54919 -0.0246403 2.9974 0.067145C3.4456 0.15893 3.85663 0.381381 4.17868 0.706341C4.50072 1.0313 4.71938 1.44435 4.80712 1.89336C4.89486 2.34238 4.84783 2.80724 4.6718 3.22953C4.49578 3.65182 4.19869 4.01241 3.818 4.26617C3.43732 4.51993 2.99005 4.65541 2.53254 4.65543C2.22658 4.65521 1.92373 4.5946 1.64136 4.47678C1.35898 4.35896 1.10271 4.18643 0.887331 3.96911C0.671956 3.75178 0.501696 3.4941 0.386423 3.21068C0.27115 2.92726 0.213116 2.62381 0.215663 2.31785L0.214844 2.31703Z" fill="#ffffff"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.445 20.139V11.1316H0.759766V7.55172H3.445V4.73229C3.445 1.66771 5.10822 0.000189021 7.53924 0.000189021C8.35984 -0.00339252 9.17988 0.0439248 9.99461 0.141959V3.34327H8.30873C6.98791 3.34327 6.73113 4.05163 6.73113 5.08631V7.55172H9.71353L9.30481 11.1324H6.73195V20.139H3.445Z" fill="#ffffff"></path>
                      </svg>
                    </a>
                  </div>
                  <a href="#" className="btn download-btn d-flex align-items-center gap-2">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1719 0.4375H5.39062C2.41208 0.4375 0 2.84958 0 5.82812V16.6185C0 19.5879 2.41208 22 5.39062 22H16.181C19.1504 22 21.5625 19.5879 21.5625 16.6094V5.82812C21.5625 2.84958 19.1504 0.4375 16.1719 0.4375ZM15.1486 12.0319L12.2888 14.8917C11.4939 15.6866 10.2239 15.6774 9.42902 14.8917L6.57839 12.0319C6.31343 11.7669 6.31343 11.3375 6.57839 11.0817C6.84335 10.8167 7.27278 10.8167 7.5286 11.0817L10.1874 13.7405V6.84229C10.1874 6.46769 10.4889 6.16618 10.8635 6.16618C11.2381 6.16618 11.5396 6.46769 11.5396 6.84229V13.7405L14.1984 11.0817C14.4633 10.8167 14.8927 10.8167 15.1486 11.0817C15.4135 11.3375 15.4135 11.7669 15.1486 12.0319Z" fill="#EF7C16"></path>
                    </svg>
                    <span className="fw-semibold">
                      Download
                    </span>
                  </a>
                </div>
              </div>
              <div className="promo-card pc-3">
                <img src="/dashboard-assets/img/promo3.png" alt="Promo" className="promo-img img-fluid" />
                <div className="d-flex align-items-center justify-content-between px-md-4">
                  <div className="sc-socials">
                    <a href="#">
                      <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 15.7214C0.341653 15.7623 0.685604 15.7816 1.02968 15.7788C2.95758 15.7826 4.83248 15.1476 6.36164 13.9735C5.46962 13.9549 4.60498 13.6619 3.88578 13.1339C3.16658 12.6059 2.62779 11.8688 2.3429 11.0233C2.61121 11.0761 2.88426 11.1005 3.15767 11.0963C3.53782 11.0988 3.91669 11.0516 4.28466 10.9561C3.31903 10.7659 2.44871 10.248 1.82089 9.49008C1.19307 8.73214 0.846305 7.78061 0.83915 6.79645V6.75014C1.43665 7.07508 2.10274 7.25375 2.78265 7.27134C1.87363 6.68174 1.22825 5.76309 0.981842 4.70799C0.735434 3.6529 0.907085 2.54322 1.46093 1.61199C2.54799 2.92761 3.8983 4.00137 5.42497 4.76413C6.95165 5.52689 8.62101 5.96205 10.3258 6.04129C10.2566 5.72436 10.2233 5.40032 10.2267 5.07594C10.2307 4.51558 10.3449 3.96178 10.563 3.44558C10.7811 2.92939 11.0988 2.46106 11.4978 2.06762C11.8969 1.67419 12.3695 1.36303 12.8887 1.15226C13.4079 0.941491 13.9636 0.835238 14.524 0.839219C15.1114 0.838888 15.6928 0.957543 16.2329 1.18832C16.7731 1.41909 17.2608 1.75728 17.6666 2.18194C18.6271 1.99611 19.5491 1.649 20.3938 1.15554C20.0717 2.14189 19.3982 2.97544 18.5016 3.49762C19.3551 3.39206 20.1894 3.1662 20.9796 2.82646C20.4008 3.68414 19.6705 4.42886 18.8246 5.02472C18.8339 5.20346 18.8406 5.38585 18.8406 5.57214C18.8397 7.17043 18.521 8.75235 17.9031 10.2264C17.2853 11.7004 16.3805 13.037 15.2415 14.1583C14.1026 15.2795 12.752 16.1634 11.2685 16.7581C9.78495 17.3527 8.19801 17.6464 6.5999 17.6222C4.26371 17.6309 1.97376 16.9713 0 15.7214Z" fill="#2568EF"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.64512 17.5726C4.948 17.5577 4.25844 17.4257 3.60523 17.1817C3.04678 16.9665 2.53948 16.6368 2.11592 16.2139C1.69236 15.7911 1.36187 15.2842 1.14565 14.7261C0.899789 14.0746 0.767213 13.386 0.753735 12.6897C0.714295 11.8011 0.705078 11.5149 0.705078 9.28273V9.17702C0.705078 6.9474 0.714319 6.65956 0.757115 5.76838C0.771164 5.07261 0.903074 4.38444 1.14729 3.73279C1.36405 3.17503 1.69478 2.66861 2.11828 2.24584C2.54177 1.82307 3.04873 1.49301 3.60686 1.27721C4.25998 1.03303 4.94973 0.901231 5.64686 0.887138C6.54307 0.847698 6.82915 0.838379 9.11163 0.838379C11.3941 0.838379 11.6795 0.847619 12.5799 0.890416C13.277 0.904589 13.9667 1.03639 14.6199 1.28049C15.1796 1.49202 15.687 1.82204 16.1077 2.24748C16.5368 2.66641 16.8686 3.17458 17.0794 3.73607C17.3245 4.38724 17.457 5.07521 17.4713 5.77084C17.4763 5.91098 17.4814 6.036 17.4873 6.156V12.1366C17.4805 12.3086 17.4729 12.4825 17.4637 12.6889C17.4498 13.385 17.3179 14.0734 17.0735 14.7253C16.8573 15.2834 16.5268 15.7903 16.1032 16.2131C15.6797 16.6359 15.1724 16.9656 14.6139 17.1809C13.9609 17.4253 13.2712 17.5574 12.574 17.5718C11.6778 17.6104 11.3916 17.6197 9.10999 17.6197C6.82835 17.6197 6.54133 17.6121 5.64512 17.5726ZM5.72318 2.4126C5.19022 2.41879 4.66229 2.51663 4.16237 2.70147C3.79822 2.83592 3.46855 3.04943 3.19733 3.32715C2.91622 3.59622 2.70041 3.92637 2.56633 4.29168C2.38167 4.79019 2.28403 5.31671 2.27766 5.84828C2.23822 6.73107 2.22809 6.99877 2.22809 9.2393C2.22809 11.4798 2.23822 11.7438 2.27766 12.6283C2.28427 13.1604 2.3819 13.6878 2.56633 14.1869C2.70172 14.5503 2.91573 14.8792 3.19313 15.1502C3.46454 15.4285 3.79485 15.6421 4.15981 15.7759C4.65924 15.9614 5.18704 16.0593 5.7198 16.0648C6.60426 16.1034 6.87279 16.1135 9.11583 16.1135C11.3589 16.1135 11.6266 16.1042 12.5119 16.0648C13.0449 16.0588 13.5729 15.961 14.0728 15.7759C14.4349 15.6359 14.7638 15.4219 15.0383 15.1474C15.3129 14.8728 15.5271 14.5438 15.6671 14.1816C15.8532 13.6835 15.9509 13.1567 15.9557 12.625C15.9952 11.7388 16.0053 11.4769 16.0053 9.23807C16.0053 6.99922 15.9952 6.73361 15.9557 5.84746C15.9504 5.31579 15.8527 4.78869 15.6671 4.29045C15.5323 3.92608 15.3176 3.59665 15.0386 3.32633C14.7685 3.04725 14.4385 2.83353 14.0736 2.70065C13.5742 2.51511 13.0464 2.41725 12.5136 2.41178C11.6291 2.37234 11.364 2.36221 9.11757 2.36221C6.87117 2.36221 6.61016 2.37316 5.72318 2.4126ZM4.79337 9.2307C4.79204 8.37617 5.04422 7.54036 5.518 6.8292C5.99178 6.11805 6.66596 5.56365 7.45505 5.23572C8.24415 4.90779 9.11272 4.82111 9.95099 4.98701C10.7893 5.1529 11.5595 5.5637 12.1642 6.16747C12.7689 6.77124 13.181 7.54084 13.3482 8.37884C13.5153 9.21685 13.4302 10.0858 13.1035 10.8754C12.7768 11.665 12.2232 12.3398 11.5128 12.8147C10.8024 13.2896 9.96708 13.5432 9.11256 13.5432C7.96787 13.5439 6.86974 13.0897 6.05978 12.2808C5.24981 11.4719 4.79426 10.3754 4.79337 9.2307ZM6.31146 9.2307C6.31047 9.78508 6.47396 10.3275 6.78123 10.7889C7.0885 11.2504 7.5257 11.6103 8.0376 11.8231C8.5495 12.036 9.11305 12.0921 9.6569 11.9846C10.2007 11.877 10.7005 11.6104 11.0928 11.2188C11.4852 10.8271 11.7526 10.3279 11.8611 9.78426C11.9696 9.2406 11.9143 8.67683 11.7024 8.16455C11.4905 7.65227 11.1314 7.21434 10.6705 6.90623C10.2096 6.59813 9.66776 6.4338 9.11337 6.4338C8.37114 6.43336 7.6591 6.72777 7.13371 7.25206C6.60832 7.77634 6.31257 8.48846 6.31146 9.2307ZM12.5949 4.74977C12.5949 4.55061 12.654 4.35566 12.7647 4.19006C12.8753 4.02446 13.0326 3.89546 13.2166 3.81925C13.4006 3.74303 13.6031 3.72303 13.7985 3.76188C13.9938 3.80074 14.1732 3.89681 14.314 4.03764C14.4548 4.17847 14.5507 4.35776 14.5896 4.55309C14.6284 4.74843 14.6085 4.95092 14.5323 5.13492C14.4561 5.31893 14.327 5.47622 14.1614 5.58687C13.9958 5.69752 13.8011 5.7565 13.602 5.7565C13.3349 5.7565 13.0788 5.65074 12.89 5.4619C12.7011 5.27305 12.5949 5.01683 12.5949 4.74977Z" fill="#ffffff"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5175 19.2996V13.0252C15.5175 11.5307 15.4874 9.61411 13.439 9.61411C11.3579 9.61411 11.039 11.2387 11.039 12.9179V19.2955H7.04215V6.41035H10.8804V8.16732H10.9366C11.3202 7.51034 11.8749 6.96984 12.5416 6.60333C13.2082 6.23683 13.9618 6.0581 14.722 6.08624C18.7701 6.08624 19.5169 8.75487 19.5169 12.2172V19.2996H15.5175ZM0.533725 19.2996V6.41362H4.53556V19.2996H0.533725ZM0.214844 2.31703C0.218985 1.85955 0.358391 1.41333 0.615571 1.03495C0.87275 0.656574 1.23614 0.362688 1.66 0.190477C2.08386 0.0182659 2.54919 -0.0246403 2.9974 0.067145C3.4456 0.15893 3.85663 0.381381 4.17868 0.706341C4.50072 1.0313 4.71938 1.44435 4.80712 1.89336C4.89486 2.34238 4.84783 2.80724 4.6718 3.22953C4.49578 3.65182 4.19869 4.01241 3.818 4.26617C3.43732 4.51993 2.99005 4.65541 2.53254 4.65543C2.22658 4.65521 1.92373 4.5946 1.64136 4.47678C1.35898 4.35896 1.10271 4.18643 0.887331 3.96911C0.671956 3.75178 0.501696 3.4941 0.386423 3.21068C0.27115 2.92726 0.213116 2.62381 0.215663 2.31785L0.214844 2.31703Z" fill="#ffffff"></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.445 20.139V11.1316H0.759766V7.55172H3.445V4.73229C3.445 1.66771 5.10822 0.000189021 7.53924 0.000189021C8.35984 -0.00339252 9.17988 0.0439248 9.99461 0.141959V3.34327H8.30873C6.98791 3.34327 6.73113 4.05163 6.73113 5.08631V7.55172H9.71353L9.30481 11.1324H6.73195V20.139H3.445Z" fill="#ffffff"></path>
                      </svg>
                    </a>
                  </div>
                  <a href="#" className="btn download-btn d-flex align-items-center gap-2">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1719 0.4375H5.39062C2.41208 0.4375 0 2.84958 0 5.82812V16.6185C0 19.5879 2.41208 22 5.39062 22H16.181C19.1504 22 21.5625 19.5879 21.5625 16.6094V5.82812C21.5625 2.84958 19.1504 0.4375 16.1719 0.4375ZM15.1486 12.0319L12.2888 14.8917C11.4939 15.6866 10.2239 15.6774 9.42902 14.8917L6.57839 12.0319C6.31343 11.7669 6.31343 11.3375 6.57839 11.0817C6.84335 10.8167 7.27278 10.8167 7.5286 11.0817L10.1874 13.7405V6.84229C10.1874 6.46769 10.4889 6.16618 10.8635 6.16618C11.2381 6.16618 11.5396 6.46769 11.5396 6.84229V13.7405L14.1984 11.0817C14.4633 10.8167 14.8927 10.8167 15.1486 11.0817C15.4135 11.3375 15.4135 11.7669 15.1486 12.0319Z" fill="#EF7C16"></path>
                    </svg>
                    <span className="fw-semibold">
                      Download
                    </span>
                  </a>
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
