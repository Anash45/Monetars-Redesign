import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout headerVariant={"account"} active={"earn"} showPayModal payModalVariant={"empty"} showOfferModal scriptsVariant={"earn"}>
  <main>
    <section className="py-5 withdraw-page-sec roboto" id="offers-main">
      <div className="container">
        <div className="d-flex align-items-center gap-3 mb-3 flex-lg-row flex-column" id="earn-filters">
          <div className="align-items-center gap-3 osd-flex d-lg-flex d-none">
            <h2 className="page-title mb-0 fw-bold d-lg-block d-none">
              Earn
            </h2>
            <span className="earn-small f-14p d-lg-block d-none">
              on
            </span>
            <div className="dropdown os-dropdown">
              <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <div className="d-flex align-items-center gap-3" id="os-icons"></div>
                  <i className="fa fa-chevron-down"></i>
                </div>
              </button>
              <div className="dropdown-menu shadow-lg" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#" data-value="item1">
                  <span className="item-icon">
                    <svg className="os-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 2.20357L6.55714 1.3V7.63571H0V2.20357ZM0 13.7964L6.55714 14.7V8.44286H0V13.7964V13.7964ZM7.27857 14.7964L16 16V8.44286H7.27857V14.7964V14.7964ZM7.27857 1.20357V7.63571H16V0L7.27857 1.20357V1.20357Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="item-text">
                    Window
                  </span>
                  <input type="checkbox" id="item1Checkbox" className="item-checkbox" checked="checked" />
                </a>
                <a className="dropdown-item" href="#" data-value="item2">
                  <span className="item-icon">
                    <svg className="os-icon" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.54877 5.90796H1.50331C0.920504 5.90796 0.445312 6.38546 0.445312 6.96774V11.5818C0.445312 12.1664 0.920504 12.6424 1.50331 12.6424H1.54955C2.13235 12.6424 2.60755 12.1649 2.60755 11.5818V6.9677C2.60677 6.38546 2.13084 5.90796 1.54877 5.90796Z" fill="currentColor"></path>
                      <path d="M3.1138 13.3628C3.1138 13.8988 3.55108 14.3353 4.08614 14.3353H5.1252V16.8276C5.1252 17.4129 5.6019 17.8889 6.1832 17.8889H6.22866C6.81224 17.8889 7.28817 17.4121 7.28817 16.8276V14.3353H8.74027V16.8276C8.74027 17.4129 9.21848 17.8889 9.79978 17.8889H9.8445C10.428 17.8889 10.9032 17.4121 10.9032 16.8276V14.3353H11.943C12.4773 14.3353 12.9146 13.8988 12.9146 13.3628V6.07724H3.1138V13.3628Z" fill="currentColor"></path>
                      <path d="M10.4553 1.65899L11.2806 0.382874C11.3337 0.302386 11.3102 0.192336 11.2291 0.139933C11.1488 0.0867914 11.0389 0.108822 10.9866 0.191562L10.131 1.51174C9.48905 1.24832 8.7721 1.10029 8.01495 1.10029C7.25707 1.10029 6.54163 1.24832 5.89822 1.51174L5.04411 0.191562C4.99183 0.108822 4.88115 0.0867914 4.80006 0.139933C4.71897 0.192301 4.69547 0.302386 4.74852 0.382874L5.5746 1.65899C4.08536 2.39006 3.08119 3.76792 3.08119 5.34845C3.08119 5.44562 3.08727 5.54128 3.0956 5.63616H12.9351C12.9434 5.54128 12.9487 5.44562 12.9487 5.34845C12.9487 3.76792 11.9438 2.39006 10.4553 1.65899ZM5.73376 3.94403C5.47229 3.94403 5.26008 3.73297 5.26008 3.47032C5.26008 3.20767 5.47229 2.99736 5.73376 2.99736C5.99674 2.99736 6.20744 3.20764 6.20744 3.47032C6.20744 3.73301 5.99523 3.94403 5.73376 3.94403ZM10.2954 3.94403C10.0339 3.94403 9.82173 3.73297 9.82173 3.47032C9.82173 3.20767 10.0339 2.99736 10.2954 2.99736C10.5576 2.99736 10.7683 3.20764 10.7683 3.47032C10.7683 3.73297 10.5576 3.94403 10.2954 3.94403Z" fill="currentColor"></path>
                      <path d="M14.5251 5.90796H14.4811C13.8983 5.90796 13.4216 6.38546 13.4216 6.96774V11.5818C13.4216 12.1664 13.8991 12.6424 14.4811 12.6424H14.5259C15.1094 12.6424 15.5839 12.1649 15.5839 11.5818V6.9677C15.5839 6.38546 15.1079 5.90796 14.5251 5.90796Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="item-text">
                    Android
                  </span>
                  <input type="checkbox" id="item2Checkbox" className="item-checkbox" checked="checked" />
                </a>
                <a className="dropdown-item" href="#" data-value="item3">
                  <span className="item-icon">
                    <svg className="os-icon" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.54542 17.8889C2.89955 17.8736 0.710938 12.4725 0.710938 9.72185C0.710938 5.22865 4.0816 4.24497 5.38063 4.24497C5.96604 4.24497 6.59115 4.47487 7.1425 4.67831C7.52806 4.82022 7.92681 4.96671 8.14858 4.96671C8.28132 4.96671 8.59413 4.84209 8.87031 4.73275C9.45931 4.49827 10.1922 4.20685 11.0457 4.20685H11.0508C11.6881 4.20685 13.6203 4.34671 14.7821 6.09129L15.0542 6.50022L14.6625 6.79574C14.1031 7.21789 13.0822 7.98796 13.0822 9.51334C13.0822 11.32 14.2383 12.0148 14.7938 12.3489C15.0389 12.4964 15.2927 12.6485 15.2927 12.9812C15.2927 13.1983 13.5593 17.8619 11.0421 17.8619C10.4262 17.8619 9.9908 17.6768 9.60677 17.5135C9.21819 17.3482 8.88299 17.2058 8.3291 17.2058C8.04833 17.2058 7.6933 17.3386 7.31743 17.4795C6.80378 17.6712 6.2224 17.8889 5.56271 17.8889H5.54542Z" fill="currentColor"></path>
                      <path d="M11.3124 0.111084C11.3779 2.47483 9.68746 4.1147 7.99899 4.01185C7.72076 2.12549 9.68726 0.111084 11.3124 0.111084Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="item-text">
                    IOS
                  </span>
                  <input type="checkbox" id="item3Checkbox" className="item-checkbox" checked="checked" />
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 cs1-flex">
            <span className="earn-small f-14p ms-2 d-lg-block d-none">
              in
            </span>
            <div className="custom-select-cont cs-1">
              <select className="custom-select" id="cs1">
                <option value="Home">
                  Home
                </option>
                <option data-count="109" value="All" selected>
                  All
                </option>
                <option data-count="16" value="Apps">
                  Apps
                </option>
                <option data-count="20" value="Games">
                  Games
                </option>
                <option data-count="19" value="Casino">
                  Casino
                </option>
                <option data-count="7" value="Surveys">
                  Surveys
                </option>
                <option data-count="11" value="GPT">
                  GPT
                </option>
                <option data-count="18" value="Quizzes">
                  Quizzes
                </option>
                <option data-count="35" value="Sweeps">
                  Sweeps
                </option>
                <option data-count="22" value="Sign Ups">
                  Sign Ups
                </option>
                <option data-count="16" value="Free Trial">
                  Free Trial
                </option>
                <option data-count="12" value="Deposits">
                  Deposits
                </option>
                <option data-count="10" value="Purchases">
                  Purchases
                </option>
                <option data-count="2" value="Crypto">
                  Crypto
                </option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-lg-row gap-lg-3 gap-4 flex-column align-items-center flex-grow-1 earn-half-filter">
            <input type="search" placeholder="Search" className="form-control flex-grow-1 bg-transparent earn-search" />
            <div className="d-flex justify-content-between nf-last-flex">
              <div className="custom-select-cont cs-2 cs2-flex">
                <select className="custom-select" id="cs2">
                  <option value="Popularity" data-icon="fa-heart">
                    Popularity
                  </option>
                  <option value="Heigest" data-icon="fa-dollar">
                    Heigest
                  </option>
                </select>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className="earn-small ms-3 ps-1 d-lg-block d-none nowrap f-12p">
                  View as
                </span>
                <ul className="nav nav-pills gap-3 earn-np" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="grid-tab" data-bs-toggle="pill" data-bs-target="#grid" type="button" role="tab" aria-controls="grid" aria-selected="true">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 96H256V224H384V96zM384 288H256V416H384V288zM192 224V96H64V224H192zM64 416H192V288H64V416z"></path>
                      </svg>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="list-tab" data-bs-toggle="pill" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M16 96C16 69.49 37.49 48 64 48C90.51 48 112 69.49 112 96C112 122.5 90.51 144 64 144C37.49 144 16 122.5 16 96zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 416C16 389.5 37.49 368 64 368C90.51 368 112 389.5 112 416C112 442.5 90.51 464 64 464C37.49 464 16 442.5 16 416zM112 256C112 282.5 90.51 304 64 304C37.49 304 16 282.5 16 256C16 229.5 37.49 208 64 208C90.51 208 112 229.5 112 256z"></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-offers" id="filter-offers">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
              <div className="offers-container">
                <div className="py-2">
                  <div className="d-flex grid-offers mt-2">
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/19-37923.webp" alt="Offer" />
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/19-37923.webp" alt="Offer" />
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/19-37923.webp" alt="Offer" />
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/19-37923.webp" alt="Offer" />
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/19-37923.webp" alt="Offer" />
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
              <div className="offers-container">
                <div className="py-2">
                  <div className="d-flex list-offers mt-2">
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/19-37923.webp" alt="Offer" />
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/19-37923.webp" alt="Offer" />
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/19-37923.webp" alt="Offer" />
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/19-37923.webp" alt="Offer" />
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                    <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                      <div className="ob-img">
                        <div className="show-pop text-white">
                          <span className="eye-circle">
                            <i className="fa-solid fa-eye"></i>
                          </span>
                          <p className="mb-0">
                            Show Offers
                          </p>
                        </div>
                        <img src="/assets/img/19-37923.webp" alt="Offer" />
                      </div>
                      <div className="ob-text">
                        <h5 className="ob-title">
                          Prison Escapeeeee
                        </h5>
                        <p className="mb-2 ob-desc">
                          Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                        </p>
                        <div className="os-flex">
                          <i className="fa-brands fa-apple"></i>
                          <img src="/assets/img/android-white.svg" alt="OS" />
                        </div>
                      </div>
                      <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                        <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                        <span>
                          41,000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-offer" id="home-offers">
          <div className="offers-container">
            <div className="mb-0 py-2 d-flex align-items-center of-title">
              <img src="/assets/img/fire.png" alt="Icon" height="28" className="t-icon flip" />
              <h2 className="page-title mb-0 fw-medium ms-2">
                Featured Offers
              </h2>
              <span className="t-question ms-2" data-bs-placement="right" data-bs-toggle="tooltip" title="The most frequently completed tasks by people from your country recently. (1000 coins equal $1.00)">
                <i className="fa fa-question"></i>
              </span>
            </div>
            <div className="py-2">
              <div className="d-flex offers mt-2">
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                    <div className="ob-img">
                      <div className="show-pop text-white">
                        <span className="eye-circle">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                        <p className="mb-0">
                          Show Offers
                        </p>
                      </div>
                      <img src="/assets/img/19-37923.webp" alt="Offer" />
                      <div className="os-flex">
                        <i className="fa-brands fa-apple"></i>
                        <img src="/assets/img/android-white.svg" alt="OS" />
                      </div>
                    </div>
                    <div className="ob-text">
                      <h5 className="ob-title">
                        Prison Escapeeeee
                      </h5>
                      <p className="mb-2 ob-desc">
                        Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                      </p>
                    </div>
                    <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                      <span>
                        41,000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                    <div className="ob-img">
                      <div className="show-pop text-white">
                        <span className="eye-circle">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                        <p className="mb-0">
                          Show Offers
                        </p>
                      </div>
                      <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                      <div className="os-flex">
                        <i className="fa-brands fa-apple"></i>
                        <img src="/assets/img/android-white.svg" alt="OS" />
                      </div>
                    </div>
                    <div className="ob-text">
                      <h5 className="ob-title">
                        Prison Escapeeeee
                      </h5>
                      <p className="mb-2 ob-desc">
                        Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                      </p>
                    </div>
                    <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                      <span>
                        41,000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                    <div className="ob-img">
                      <div className="show-pop text-white">
                        <span className="eye-circle">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                        <p className="mb-0">
                          Show Offers
                        </p>
                      </div>
                      <img src="/assets/img/19-37923.webp" alt="Offer" />
                      <div className="os-flex">
                        <i className="fa-brands fa-apple"></i>
                        <img src="/assets/img/android-white.svg" alt="OS" />
                      </div>
                    </div>
                    <div className="ob-text">
                      <h5 className="ob-title">
                        Prison Escapeeeee
                      </h5>
                      <p className="mb-2 ob-desc">
                        Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                      </p>
                    </div>
                    <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                      <span>
                        41,000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                    <div className="ob-img">
                      <div className="show-pop text-white">
                        <span className="eye-circle">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                        <p className="mb-0">
                          Show Offers
                        </p>
                      </div>
                      <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                      <div className="os-flex">
                        <i className="fa-brands fa-apple"></i>
                        <img src="/assets/img/android-white.svg" alt="OS" />
                      </div>
                    </div>
                    <div className="ob-text">
                      <h5 className="ob-title">
                        Prison Escapeeeee
                      </h5>
                      <p className="mb-2 ob-desc">
                        Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                      </p>
                    </div>
                    <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                      <span>
                        41,000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                    <div className="ob-img">
                      <div className="show-pop text-white">
                        <span className="eye-circle">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                        <p className="mb-0">
                          Show Offers
                        </p>
                      </div>
                      <img src="/assets/img/19-37923.webp" alt="Offer" />
                      <div className="os-flex">
                        <i className="fa-brands fa-apple"></i>
                        <img src="/assets/img/android-white.svg" alt="OS" />
                      </div>
                    </div>
                    <div className="ob-text">
                      <h5 className="ob-title">
                        Prison Escapeeeee
                      </h5>
                      <p className="mb-2 ob-desc">
                        Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                      </p>
                    </div>
                    <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                      <span>
                        41,000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                    <div className="ob-img">
                      <div className="show-pop text-white">
                        <span className="eye-circle">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                        <p className="mb-0">
                          Show Offers
                        </p>
                      </div>
                      <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                      <div className="os-flex">
                        <i className="fa-brands fa-apple"></i>
                        <img src="/assets/img/android-white.svg" alt="OS" />
                      </div>
                    </div>
                    <div className="ob-text">
                      <h5 className="ob-title">
                        Prison Escapeeeee
                      </h5>
                      <p className="mb-2 ob-desc">
                        Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                      </p>
                    </div>
                    <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                      <span>
                        41,000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                    <div className="ob-img">
                      <div className="show-pop text-white">
                        <span className="eye-circle">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                        <p className="mb-0">
                          Show Offers
                        </p>
                      </div>
                      <img src="/assets/img/19-37923.webp" alt="Offer" />
                      <div className="os-flex">
                        <i className="fa-brands fa-apple"></i>
                        <img src="/assets/img/android-white.svg" alt="OS" />
                      </div>
                    </div>
                    <div className="ob-text">
                      <h5 className="ob-title">
                        Prison Escapeeeee
                      </h5>
                      <p className="mb-2 ob-desc">
                        Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                      </p>
                    </div>
                    <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                      <span>
                        41,000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                    <div className="ob-img">
                      <div className="show-pop text-white">
                        <span className="eye-circle">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                        <p className="mb-0">
                          Show Offers
                        </p>
                      </div>
                      <img src="/assets/img/Nfelng9URrYx0dN.gif" alt="Offer" />
                      <div className="os-flex">
                        <i className="fa-brands fa-apple"></i>
                        <img src="/assets/img/android-white.svg" alt="OS" />
                      </div>
                    </div>
                    <div className="ob-text">
                      <h5 className="ob-title">
                        Prison Escapeeeee
                      </h5>
                      <p className="mb-2 ob-desc">
                        Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                      </p>
                    </div>
                    <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                      <span>
                        41,000
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-hvr">
                    <div className="ob-img">
                      <div className="show-pop text-white">
                        <span className="eye-circle">
                          <i className="fa-solid fa-eye"></i>
                        </span>
                        <p className="mb-0">
                          Show Offers
                        </p>
                      </div>
                      <img src="/assets/img/19-37923.webp" alt="Offer" />
                      <div className="os-flex">
                        <i className="fa-brands fa-apple"></i>
                        <img src="/assets/img/android-white.svg" alt="OS" />
                      </div>
                    </div>
                    <div className="ob-text">
                      <h5 className="ob-title">
                        Prison Escapeeeee
                      </h5>
                      <p className="mb-2 ob-desc">
                        Pin the pulls in the correct order to help Andy overcome obstacles and get free from prison! Help Andy to escape prison by solving complex pin puzzles.
                      </p>
                    </div>
                    <div className="d-flex ob-coins align-items-center justify-content-center gap-1">
                      <img src="/assets/img/coin (1).png" alt="Coin" height="12" />
                      <span>
                        41,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offers-container mt-4">
            <div className="mb-0 py-2 d-flex align-items-center of-title">
              <img src="/assets/img/coins0icon.png" alt="Icon" height="24" className="t-icon flip" />
              <h2 className="page-title mb-0 fw-medium ms-2">
                Offer Walls
              </h2>
              <span className="t-question ms-2" data-bs-placement="right" data-bs-toggle="tooltip" title="Choose from one of our offer wall providers below to start earning coins.">
                <i className="fa fa-question"></i>
              </span>
            </div>
            <div className="py-2">
              <div className="d-flex offers mt-2">
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-simple" style={{backgroundColor: 'rgb(211 109 0 / 1) !important'}}>
                    <img src="/assets/img/providers/Ayet Studios.svg" alt="Ob Image" className="ob-main-img" />
                    <span className="ob-name text-white">
                      Ayet Studios
                    </span>
                    <span className="ob-percent text-white">
                      30%
                    </span>
                    <span className="show-pop">
                      <span className="eye-circle">
                        <i className="fa-solid fa-eye"></i>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-simple" style={{backgroundColor: 'rgb(211 109 0 / 1) !important'}}>
                    <img src="/assets/img/providers/Ayet Studios.svg" alt="Ob Image" className="ob-main-img" />
                    <span className="ob-name text-white">
                      Ayet Studios
                    </span>
                    <span className="ob-percent text-white">
                      30%
                    </span>
                    <span className="show-pop">
                      <span className="eye-circle">
                        <i className="fa-solid fa-eye"></i>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-simple" style={{backgroundColor: 'rgb(211 109 0 / 1) !important'}}>
                    <img src="/assets/img/providers/Ayet Studios.svg" alt="Ob Image" className="ob-main-img" />
                    <span className="ob-name text-white">
                      Ayet Studios
                    </span>
                    <span className="ob-percent text-white">
                      30%
                    </span>
                    <span className="show-pop">
                      <span className="eye-circle">
                        <i className="fa-solid fa-eye"></i>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-simple" style={{backgroundColor: 'rgb(211 109 0 / 1) !important'}}>
                    <img src="/assets/img/providers/Ayet Studios.svg" alt="Ob Image" className="ob-main-img" />
                    <span className="ob-name text-white">
                      Ayet Studios
                    </span>
                    <span className="ob-percent text-white">
                      30%
                    </span>
                    <span className="show-pop">
                      <span className="eye-circle">
                        <i className="fa-solid fa-eye"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offers-container mt-4">
            <div className="mb-0 py-2 d-flex align-items-center of-title">
              <img src="/assets/img/mark.png" alt="Icon" height="28" className="t-icon" />
              <h2 className="page-title mb-0 fw-medium ms-2">
                Surveys
              </h2>
              <span className="t-question ms-2" data-bs-placement="right" data-bs-toggle="tooltip" title=" Complete surveys to earn coins. You will be rewarded for each survey completed.">
                <i className="fa fa-question"></i>
              </span>
            </div>
            <div className="py-2">
              <div className="d-flex offers mt-2">
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-simple" style={{backgroundColor: 'rgb(211 109 0 / 1) !important'}}>
                    <img src="/assets/img/providers/Ayet Studios.svg" alt="Ob Image" className="ob-main-img" />
                    <span className="ob-name text-white">
                      Ayet Studios
                    </span>
                    <span className="ob-percent text-white">
                      30%
                    </span>
                    <span className="show-pop">
                      <span className="eye-circle">
                        <i className="fa-solid fa-eye"></i>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="mx-2">
                  <div onClick={() => { openModal('offer') }} className="offer-box ob-first ob-simple" style={{backgroundColor: 'rgb(211 109 0 / 1) !important'}}>
                    <img src="/assets/img/providers/Ayet Studios.svg" alt="Ob Image" className="ob-main-img" />
                    <span className="ob-name text-white">
                      Ayet Studios
                    </span>
                    <span className="ob-percent text-white">
                      30%
                    </span>
                    <span className="show-pop">
                      <span className="eye-circle">
                        <i className="fa-solid fa-eye"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="offers-container mt-4">
                            <div class="mb-0 py-2 d-flex align-items-center of-title">
                                <img src="/assets/img/cam-recorder.png" alt="Icon" height="28" class="t-icon">
                                <h2 class="page-title mb-0 fw-medium ms-2">Videos </h2>
                                <span class="t-question ms-2" data-bs-placement="right" data-bs-toggle="tooltip"
                                title="Choose one of the providers to earn coins by watching videos">
                                    <i class="fa fa-question"></i>
                                </span>
                            </div>
                            <div class="py-2">
                                <div class="d-flex offers mt-2">
                                    <div class="mx-2">
                                        <div onclick="openModal('offer')" class="offer-box ob-first ob-simple"
                                            style="background-color: rgb(211 109 0 / 1) !important;">
                                            <img src="/assets/img/providers/Ayet Studios.svg" alt="Ob Image"
                                                class="ob-main-img">
                                            <span class="ob-name text-white">Ayet Studios</span>
                                            <span class="ob-percent text-white">30%</span>
                                            <span class="show-pop">
                                                <span class="eye-circle">
                                                    <i class="fa-solid fa-eye">
                                                    </i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="mx-2">
                                        <div onclick="openModal('offer')" class="offer-box ob-first ob-simple"
                                            style="background-color: rgb(211 109 0 / 1) !important;">
                                            <img src="/assets/img/providers/Ayet Studios.svg" alt="Ob Image"
                                                class="ob-main-img">
                                            <span class="ob-name text-white">Ayet Studios</span>
                                            <span class="ob-percent text-white">30%</span>
                                            <span class="show-pop">
                                                <span class="eye-circle">
                                                    <i class="fa-solid fa-eye">
                                                    </i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
        </div>
      </div>
    </section>
  </main>
    </Layout>
  );
}
