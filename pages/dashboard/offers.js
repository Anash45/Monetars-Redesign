import Layout from "../../components/dashboard/Layout";

const OFFERS = [
  { img: "/dashboard-assets/img/offers/offer1.png", title: "Pixel Point Tv", coins: 786 },
  { img: "/dashboard-assets/img/offers-cards/offer-1.svg", title: "Coin Master Quest", coins: 412 },
  { img: "/dashboard-assets/img/offers-cards/offer-2.svg", title: "Puzzle Legends", coins: 1250 },
  { img: "/dashboard-assets/img/offers-cards/offer-3.svg", title: "Battle Royale Arena", coins: 950 },
  { img: "/dashboard-assets/img/offers-cards/offer-4.svg", title: "Survey Squad", coins: 300 },
  { img: "/dashboard-assets/img/offers-cards/offer-5.svg", title: "City Builder Tycoon", coins: 680 },
  { img: "/dashboard-assets/img/offers-cards/offer-6.svg", title: "Word Search Deluxe", coins: 220 },
  { img: "/dashboard-assets/img/offers/offer1.png", title: "Farm Fever", coins: 540 },
  { img: "/dashboard-assets/img/offers-cards/offer-1.svg", title: "Racing Rivals", coins: 1100 },
  { img: "/dashboard-assets/img/offers-cards/offer-2.svg", title: "Trivia Champions", coins: 175 },
];

function OfferCard({ offer }) {
  return (
    <div className="offer d-flex flex-column gap-3">
      <div className="offer-img">
        <img src={offer.img} alt="Offer Image" className="offer-img img-fluid" />
      </div>
      <div className="px-2 offer-text">
        <h3 className="offer-title fw-medium text-white mb-0 f-16p">{offer.title}</h3>
        <p className="offer-desc lato f-12p mb-0">Lorem ipsum dolor sit 100 points sit 100 points sit 100 points</p>
      </div>
      <div className="px-2 d-flex align-items-center gap-2 justify-content-between mt-auto pb-2">
        <div className="d-flex gap-2 f-12p text-white fw-semibold align-items-center">
          <img src="/dashboard-assets/img/coin.svg" alt="coin" height="17" />
          <span>{offer.coins}</span>
        </div>
        <div className="d-flex align-items-center gap-1">
          <a href="#">
            <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.01 24.7719C18.6429 24.7719 24.02 19.3814 24.02 12.7319C24.02 6.08239 18.6429 0.691895 12.01 0.691895C5.37706 0.691895 0 6.08239 0 12.7319C0 19.3814 5.37706 24.7719 12.01 24.7719Z" fill="#0D0B1F"></path>
              <g clipPath="url(#clip0_30_2)">
                <path d="M6 8.56689V12.3169H11.25V7.91064L6 8.56689Z" fill="#67708C"></path>
                <path d="M12 7.81689V12.3169H18V7.06689L12 7.81689Z" fill="#67708C"></path>
                <path d="M12 13.0669V17.5669L18 18.3169V13.0669H12Z" fill="#67708C"></path>
                <path d="M6 13.0669V16.8169L11.25 17.4731V13.0669H6Z" fill="#67708C"></path>
              </g>
              <defs>
                <clipPath id="clip0_30_2">
                  <rect width="100%" height="100%" fill="white" transform="translate(6 6.69189)"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="#">
            <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.03 24.7719C18.674 24.7719 24.06 19.3814 24.06 12.7319C24.06 6.08239 18.674 0.691895 12.03 0.691895C5.38601 0.691895 0 6.08239 0 12.7319C0 19.3814 5.38601 24.7719 12.03 24.7719Z" fill="#0D0B1F"></path>
              <g clipPath="url(#clip0_32_5)">
                <path d="M14.6947 5.69189C14.7273 5.69189 14.7599 5.69189 14.7943 5.69189C14.8742 6.6792 14.4974 7.41692 14.0394 7.95115C13.59 8.48169 12.9746 8.99625 11.9793 8.91817C11.9129 7.945 12.2904 7.262 12.7477 6.729C13.1719 6.23227 13.9496 5.79026 14.6947 5.69189Z" fill="#67708C"></path>
                <path d="M17.7076 15.9683C17.7076 15.9781 17.7076 15.9867 17.7076 15.9959C17.4279 16.8431 17.0289 17.5691 16.542 18.2429C16.0976 18.8546 15.5529 19.6778 14.5803 19.6778C13.74 19.6778 13.1818 19.1374 12.3205 19.1226C11.4094 19.1079 10.9084 19.5745 10.0754 19.6919C9.98006 19.6919 9.88478 19.6919 9.79133 19.6919C9.17964 19.6034 8.68599 19.1189 8.32635 18.6825C7.26589 17.3927 6.44641 15.7267 6.29395 13.5947C6.29395 13.3857 6.29395 13.1773 6.29395 12.9682C6.3585 11.4424 7.0999 10.2018 8.08536 9.60056C8.60545 9.28089 9.32042 9.00855 10.1165 9.13027C10.4577 9.18314 10.8063 9.29995 11.1118 9.41552C11.4014 9.52679 11.7635 9.72413 12.1065 9.71368C12.3389 9.70692 12.5701 9.58581 12.8043 9.50036C13.4904 9.25261 14.1629 8.96859 15.0494 9.10199C16.1148 9.26306 16.8709 9.73643 17.3382 10.4668C16.4369 11.0403 15.7244 11.9047 15.8461 13.3807C15.9543 14.7215 16.7339 15.506 17.7076 15.9683Z" fill="#67708C"></path>
              </g>
              <defs>
                <clipPath id="clip0_32_5">
                  <rect width="100%" height="100%" fill="white" transform="translate(5 5.69189)"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="#">
            <svg width="100%" height="100%" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6389 24.2218C19.2718 24.2218 24.6489 18.8314 24.6489 12.1818C24.6489 5.53234 19.2718 0.141846 12.6389 0.141846C6.00597 0.141846 0.628906 5.53234 0.628906 12.1818C0.628906 18.8314 6.00597 24.2218 12.6389 24.2218Z" fill="#0D0B1F"></path>
              <g clipPath="url(#clip0_32_6)">
                <path d="M14.4616 18.6919C14.9297 18.6919 15.3379 18.2837 15.3379 17.8156V15.769H15.923C16.2741 15.769 16.5081 15.5349 16.5081 15.1839V9.33862H9.49219V15.184C9.49219 15.535 9.72624 15.7691 10.0773 15.7691H10.6625V17.8156C10.6625 18.2837 11.0706 18.692 11.5388 18.692C12.0069 18.692 12.415 18.2837 12.415 17.8156V15.7691H13.5853V17.8156C13.5853 18.2837 13.9935 18.6919 14.4616 18.6919Z" fill="#67708C"></path>
                <path d="M17.9691 15.184C18.4372 15.184 18.8453 14.7758 18.8453 14.3076V10.2146C18.8453 9.74894 18.4372 9.33862 17.9691 9.33862C17.5009 9.33862 17.0928 9.74894 17.0928 10.2146V14.3076C17.0928 14.7757 17.5009 15.184 17.9691 15.184Z" fill="#67708C"></path>
                <path d="M8.03051 15.184C8.49866 15.184 8.90683 14.7758 8.90683 14.3076V10.2146C8.90683 9.74894 8.49871 9.33862 8.03051 9.33862C7.56241 9.33862 7.1543 9.74894 7.1543 10.2146V14.3076C7.1543 14.7757 7.56241 15.184 8.03051 15.184Z" fill="#67708C"></path>
                <path d="M15.8059 4.78019C15.689 4.66246 15.5148 4.66246 15.3978 4.78019L14.613 5.56237L14.5768 5.59852C14.1115 5.3655 13.5898 5.24913 13.0087 5.24801C13.0059 5.24801 13.0031 5.24792 13.0002 5.24792H13.0001C12.9972 5.24792 12.9945 5.24801 12.9915 5.24801C12.4106 5.24913 11.8888 5.3655 11.4235 5.59852L11.3872 5.56237L10.6025 4.78019C10.4854 4.66246 10.3114 4.66246 10.1944 4.78019C10.0773 4.89726 10.0773 5.071 10.1944 5.18798L10.9535 5.94726C10.7089 6.11059 10.4871 6.31044 10.2942 6.53902C9.83242 7.0864 9.53788 7.79879 9.49737 8.57064C9.497 8.57867 9.49621 8.58662 9.49583 8.59465C9.49336 8.64721 9.49219 8.70004 9.49219 8.75307H16.5081C16.5081 8.70004 16.5069 8.64721 16.5045 8.59465C16.5041 8.58662 16.5033 8.57867 16.5029 8.57064C16.4625 7.79879 16.1678 7.08636 15.706 6.53907C15.5132 6.31049 15.2913 6.11063 15.0467 5.94731L15.8059 5.18803C15.923 5.071 15.923 4.89726 15.8059 4.78019ZM11.5377 7.73142C11.2956 7.73142 11.0993 7.53516 11.0993 7.29308C11.0993 7.05099 11.2956 6.85474 11.5377 6.85474C11.7798 6.85474 11.976 7.05099 11.976 7.29308C11.976 7.53516 11.7798 7.73142 11.5377 7.73142ZM14.4627 7.73142C14.2206 7.73142 14.0243 7.53516 14.0243 7.29308C14.0243 7.05099 14.2206 6.85474 14.4627 6.85474C14.7047 6.85474 14.901 7.05099 14.901 7.29308C14.901 7.53516 14.7047 7.73142 14.4627 7.73142Z" fill="#67708C"></path>
              </g>
              <defs>
                <clipPath id="clip0_32_6">
                  <rect width="100%" height="100%" fill="white" transform="translate(6 4.69189)"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Layout>
      <section className="offers-sec py-5">
        <div className="container pe-xxl-5">
          <div className="nav-tabs-cont px-md-4 px-0 mb-md-4 mb-2">
            <h3 className="mb-0 f-26p fw-semibold poppins text-white">Earn</h3>
            <button className="btn btn-secondary offer-filter-btn" onClick={() => { toggleFilter() }}>
              <span className="d-flex gap-3 align-items-center">
                <i className="fa fa-close ofb-close"></i>
                <img src="/dashboard-assets/img/filter.png" alt="Filter" height="16" className="ofb-filter" />
                <span className="f-16p fw-medium ofb-text">Filter</span>
              </span>
            </button>
            <ul className="nav nav-pills mb-0 offer-pills">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" type="button">All</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" type="button">Apps</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" type="button">Games</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" type="button">Games</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" type="button">Sweeps</button>
              </li>
            </ul>
          </div>
          <div className="mb-4 offer-search-box px-sm-5 py-sm-4 p-3">
            <div className="d-flex justify-content-between align-items-center flex-xxl-row flex-column gap-4 sb-flex-1">
              <div className="d-flex gap-4 align-items-center flex-lg-grow-0 flex-grow-1 flex-sm-row flex-column gap-4 flex-grow-1 sb-flex-2">
                <div className="d-flex gap-2 align-items-center flex-sm-grow-0 flex-grow-1 sb-flex-3">
                  <span className="f-18p fw-semibold sb-label">on</span>
                  <div className="position-relative  sb-flex-4">
                    <select className="form-select sb-inp-1 device-select">
                      <option selected>Any Device</option>
                      <option value="Windows">Windows</option>
                      <option value="Apple">Apple</option>
                      <option value="Android">Android</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex gap-2 align-items-center flex-sm-grow-0 flex-grow-1 sb-flex-3">
                  <span className="f-18p fw-semibold sb-label">In</span>
                  <div className="position-relative  sb-flex-4">
                    <select className="form-select sb-inp-1 provider-select">
                      <option selected>Any Provider</option>
                      <option value="Windows">Windows</option>
                      <option value="Apple">Apple</option>
                      <option value="Android">Android</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-4 align-items-center flex-lg-grow-0 flex-grow-1 flex-sm-row flex-column gap-4 flex-grow-1 sb-flex-2">
                <div className="d-flex gap-2 align-items-center flex-sm-grow-0 flex-grow-1 sb-flex-3">
                  <span className="f-16p sb-label text-nowrap">Sort by</span>
                  <div className="position-relative  sb-flex-4">
                    <img src="/dashboard-assets/img/sort-icon-1.svg" alt="Sort Icon" className="sb-inp-icon" />
                    <select className="form-select sb-inp-1 popularity-select">
                      <option selected>Popularity</option>
                      <option value="Windows">Windows</option>
                      <option value="Apple">Apple</option>
                      <option value="Android">Android</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex gap-2 align-items-center flex-sm-grow-0 flex-grow-1 sb-flex-3">
                  <div className="position-relative  sb-flex-4">
                    <img src="/dashboard-assets/img/search-inp.svg" alt="Sort Icon" className="sb-inp-icon" />
                    <input className="form-control sb-inp-1 sb-search" placeholder="Search" type="search" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offer-boxes-cont">
            {OFFERS.map((offer, i) => (
              <OfferCard offer={offer} key={i} />
            ))}
          </div>
          <nav aria-label="..." className="p-0">
            <ul className="pagination justify-content-center">
              <li className="page-item pi-next">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item pi-next">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item pi-next">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item pi-next">
                <a className="page-link" href="#">4</a>
              </li>
              <li className="page-item pi-next active" aria-current="page">
                <a className="page-link" href="#">5</a>
              </li>
              <li className="page-item">
                <a className="page-link page-link-arrow" href="#">
                  <i className="fa fa-arrow-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </Layout>
  );
}
