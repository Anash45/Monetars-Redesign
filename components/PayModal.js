export default function PayModal({ variant = "full" }) {
  return (
  <div className="modal fade pay-modal" id="payModal" tabIndex="-1" aria-labelledby="payModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn ms-auto btn-modal-close btn-circle-close" data-bs-dismiss="modal" aria-label="Close">
            <i className="fa fa-close"></i>
          </button>
        </div>
        <div className="modal-body px-md-4 px-3 pb-4 pt-0 roboto">
{variant === "empty" ? null : (
          <>
          <div className="d-flex align-items-center justify-content-between flex-lg-row flex-column gap-4">
            <img src="/assets/img/paypalDark.png" alt="Pay Logo" height="45" />
            <div className="d-flex align-items-center gap-3 flex-lg-row flex-column">
              <div className="d-flex align-items-center gap-2 pay-fee px-3">
                <span className="p-info d-flex align-items-center">
                  <i className="fa fa-info"></i>
                </span>
                <span>
                  PayPal withdrawals have a 5% fee.
                </span>
              </div>
              <div className="">
                <button className="btn country-select" type="button">
                  <span>
                    United States
                  </span>
                  <img src="/assets/img/flags/us.png" alt="Flag" height="22" />
                </button>
              </div>
            </div>
          </div>
          <form action="" method="post">
            <div className="row pay-cards mt-4">
              <div className="col-lg-3 col-6">
                <label className="pay-card" onClick={() => { selectPayCard() }}>
                  <img src="/assets/img/providers/withdraw/paypal.png" alt="Pay cards" height="32" />
                  <input type="radio" name="withdraw" className="d-none" />
                  <span className="pay-price">
                    $5
                  </span>
                </label>
              </div>
              <div className="col-lg-3 col-6">
                <label className="pay-card" onClick={() => { selectPayCard() }}>
                  <img src="/assets/img/providers/withdraw/paypal.png" alt="Pay cards" height="32" />
                  <input type="radio" name="withdraw" className="d-none" />
                  <span className="pay-price">
                    $10
                  </span>
                </label>
              </div>
              <div className="col-lg-3 col-6">
                <label className="pay-card" onClick={() => { selectPayCard() }}>
                  <img src="/assets/img/providers/withdraw/paypal.png" alt="Pay cards" height="32" />
                  <input type="radio" name="withdraw" className="d-none" />
                  <span className="pay-price">
                    $20
                  </span>
                </label>
              </div>
              <div className="col-lg-3 col-6">
                <label className="pay-card" onClick={() => { selectPayCard() }}>
                  <img src="/assets/img/providers/withdraw/paypal.png" alt="Pay cards" height="32" />
                  <input type="radio" name="withdraw" className="d-none" />
                  <span className="pay-price">
                    $30
                  </span>
                </label>
              </div>
              <div className="col-lg-3 col-6">
                <label className="pay-card" onClick={() => { selectPayCard() }}>
                  <img src="/assets/img/providers/withdraw/paypal.png" alt="Pay cards" height="32" />
                  <input type="radio" name="withdraw" className="d-none" />
                  <span className="pay-price">
                    $50
                  </span>
                </label>
              </div>
              <div className="col-lg-3 col-6">
                <label className="pay-card" onClick={() => { selectPayCard() }}>
                  <img src="/assets/img/providers/withdraw/paypal.png" alt="Pay cards" height="32" />
                  <input type="radio" name="withdraw" className="d-none" />
                  <span className="pay-price">
                    $75
                  </span>
                </label>
              </div>
              <div className="col-lg-3 col-6">
                <label className="pay-card" onClick={() => { selectPayCard() }}>
                  <img src="/assets/img/providers/withdraw/paypal.png" alt="Pay cards" height="32" />
                  <input type="radio" name="withdraw" className="d-none" />
                  <span className="pay-price">
                    $100
                  </span>
                </label>
              </div>
              <div className="col-lg-3 col-6">
                <label className="pay-card" onClick={() => { selectPayCard() }}>
                  <img src="/assets/img/providers/withdraw/paypal.png" alt="Pay cards" height="32" />
                  <input type="radio" name="withdraw" className="d-none" />
                  <span className="pay-price">
                    $200
                  </span>
                </label>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between pay-modal-footer">
              <div className="d-flex flex-column pmf-left">
                <div className="d-flex align-items-center justify-content-between pmf-fee">
                  <span>
                    Fee
                  </span>
                  <span className="fw-bold">
                    $3.75
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between pmf-coins">
                  <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="circle-dollar" className="dollar-coin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M272 143C285.5 144 298.6 147.7 311.6 151.3C313.2 151.7 314.7 152.1 316.2 152.6C324.8 154.9 329.8 163.8 327.4 172.3C325.1 180.8 316.2 185.8 307.7 183.4C305.3 182.8 302.9 182.1 300.5 181.4C292.1 179.2 285.4 176.1 277.7 175.8C258.5 173 241 175.5 228.4 180.9C215.5 186.5 209.8 194 208.6 200.4C206.8 210.1 210.7 216.9 218.8 222.1C229.5 228.9 245.3 233.4 264.7 238.9L264.9 238.1C282.7 244 303.8 250 319.3 260.6C338.3 273.7 347 294.5 342.9 317.2C338.9 338.8 323.9 353.2 305 360.8C295.1 364.8 283.9 367.1 272 367.8L272 392C272 400.8 264.8 408 256 408C247.2 408 240 400.8 240 392L240 366.1C231.9 364.9 218.2 360.9 207.6 357.7C200.7 355.6 193.8 353.4 186.1 351.2C178.6 348.4 174 339.4 176.8 330.1C179.6 322.6 188.6 318 197 320.8C203.6 322.1 210.3 325.1 216.9 327.1C228.2 330.5 239.6 333.7 245 334.5C264.8 337.5 281.5 335.8 293.1 331.2C304.2 326.7 309.8 319.9 311.4 311.4C313.3 300.9 309.9 293 301.2 287C289.2 278.8 274.4 274.8 260.2 270.9C257.9 270.2 255.6 269.6 253.3 268.1C236.2 264.1 216.3 258.5 201.6 249C193.5 243.9 185.9 236.9 181.1 227.4C176.2 217.6 174.9 206.6 177.1 194.6C180.9 173.9 197.2 159.5 215.7 151.5C223.2 148.3 231.3 145.9 239.1 144.5V120C239.1 111.2 247.2 104 255.1 104C264.8 104 272 111.2 272 120V143zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"></path>
                  </svg>
                  <span className="fw-bold">
                    $75,000
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-end pmf-right">
                <button className="btn btn-pay fw-bold ms-3 w-100 pmf-pay">
                  Pay Out
                </button>
              </div>
            </div>
          </form>
          </>
)}
</div>
      </div>
    </div>
  </div>  );
}
