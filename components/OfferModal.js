export default function OfferModal() {
  return (
  <div className="modal fade user-modal offer-modal" id="offerModal" tabIndex="-1" aria-labelledby="payModalLabel" aria-modal="true" role="dialog">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn ms-auto btn-modal-close btn-circle-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="fa fa-close"></i>
          </button>
        </div>
        <div className="modal-body p-lg-4 px-3 pb-4 pt-0 pb-lg-0 pt-lg-0 roboto">
          <div className="d-flex align-items-center flex-lg-row flex-column justify-content-lg-start justify-content-center text-lg-start text-center gap-4 pb-3 mb-4">
            <img src="/assets/img/403197.jpg" alt="DP" height="96" width="96" className="rounded-lg" />
            <div className="">
              <h3 className="fw-bold f-24p mb-2 pb-1 lh-sm">
                Jalen Buckley
              </h3>
              <div className="d-flex align-items-center justify-content-lg-start justify-content-center gap-2">
                <img src="/assets/img/coin (1).png" alt="Flag" className="rounded-circle" height="12" width="12" />
                <span className="f-14p mb-2 fw-bold">
                  2,057
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-lg-start justify-content-center gap-2">
                <span className="os">
                  <svg className="os-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="12" height="12" fill="currentColor">
                    <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path>
                  </svg>
                </span>
                <span className="os">
                  <svg className="os-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10" fill="currentColor">
                    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="pb-3 mb-4">
            <div className="d-flex gap-3 gm-stats text-center">
              <div className="gm-stat flex-grow-1 d-flex align-items-center flex-column justify-content-center p-2 gap-2">
                <span className="f-12p fw-bold gms">
                  Not started
                </span>
                <span className="gms-type">
                  9
                </span>
              </div>
              <div className="gm-stat flex-grow-1 d-flex align-items-center flex-column justify-content-center p-2 gap-2">
                <div className="f-12p fw-bold gms d-flex justify-content-center gap-2">
                  <svg className="gms-icon" xmlns="http://www.w3.org/2000/svg" id="icon-rating" height="20px" width="20px" viewBox="0 0 16 18">
                    <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M12.34 15.4a9.08 9.08 0 002.18-3.38c.88-2.4.83-5.02.79-7.14v-.01l-.02-.56a1.9 1.9 0 00-1.8-1.87A7.4 7.4 0 018.47.32L8.45.3a1.15 1.15 0 00-1.57 0h-.01a7.4 7.4 0 01-5.04 2.13 1.9 1.9 0 00-1.8 1.87l-.01.56v.03c-.04 2.11-.1 4.74.79 7.12a9.06 9.06 0 002.17 3.39 11.38 11.38 0 004.43 2.57l.25.02h.02a1.33 1.33 0 00.41-.07c1.73-.6 3.16-1.45 4.25-2.52zm-1.32-7.2l-.76.79-2.3 2.44-.04.03-.63.67a.78.78 0 01-1.13 0l-.63-.67-.04-.04-.76-.8a.88.88 0 010-1.2.77.77 0 011.14 0l.06.07.38.4.23.25.18.19.04-.03.15-.16.23-.25 1.13-1.2.76-.8.8-.83.05-.06a.77.77 0 011.14 0c.29.3.3.8.05 1.12a.85.85 0 01-.05.07z"></path>
                  </svg>
                  <span>
                    Very Low
                  </span>
                </div>
                <span className="gms-type">
                  Popularity
                </span>
              </div>
              <div className="gm-stat flex-grow-1 d-flex align-items-center flex-column justify-content-center p-2 gap-2">
                <div className="f-12p fw-bold gms d-flex justify-content-center gap-2">
                  <span className="gms-badge">
                    Game
                  </span>
                </div>
                <span className="gms-type">
                  Category
                </span>
              </div>
              <div className="gm-stat flex-grow-1 d-flex align-items-center flex-column justify-content-center p-2 gap-2">
                <div className="f-12p fw-bold gms d-flex justify-content-center gap-2">
                  <span className="p-icon">
                    <img src="/assets/img/adgateIcon.png" alt="Icon" />
                  </span>
                  <span>
                    Adgate
                  </span>
                </div>
                <span className="gms-type">
                  Provider
                </span>
              </div>
            </div>
          </div>
          <div className="pb-3 mb-4">
            <div className="ofm-about rounded-lg p-3">
              <h5 className="f-14p fw-semibold mb-2">
                About
              </h5>
              <p className="mb-0 f-12p">
                Axe Champ is a axe throwing game ! Throw axes through the targets in Axe game ! Crush those targets and go all out for the best score!
              </p>
            </div>
          </div>
          <div className="pb-4 ofm-steps">
            <h4 className="f-14p fw-semibold ofm-title mb-3">
              Steps
            </h4>
            <div className="d-flex of-step">
              <div className="rotated"></div>
              <span>
                First Time Users: 1
              </span>
            </div>
            <div className="d-flex of-step">
              <div className="rotated"></div>
              <span>
                Get "Axe Champ" 2
              </span>
            </div>
            <div className="d-flex of-step">
              <div className="rotated"></div>
              <span>
                Collect the different amounts of coins mentioned
              </span>
            </div>
            <div className="d-flex of-step">
              <div className="rotated"></div>
              <span>
                Redeem your rewards!
              </span>
            </div>
          </div>
          <button className="btn btn-start f-14p fw-semibold rounded-lg mb-lg-3">
            Start
          </button>
        </div>
      </div>
    </div>
  </div>  );
}
