import Layout from "../../components/dashboard/Layout";

export default function Page() {
  return (
    <Layout>
  <section className="settings-sec py-5">
    <div className="container pe-xxl-5">
      <div className="nav-tabs-cont px-md-4 px-0 mb-md-4 mb-2">
        <h3 className="mb-0 f-26p fw-semibold poppins text-white">
          Settings
        </h3>
        <div className="d-flex align-items-center gap-sm-4 gap-3">
          <div className="form-check form-switch px-4 py-3 position-relative rounded-pill">
            <input className="form-check-input" onChange={() => { checkSwitch() }} type="checkbox" id="showUSD" />
            <label className="form-check-label" htmlFor="showUSD">
              Show USD
            </label>
          </div>
          <div className="form-check form-switch px-4 py-3 position-relative rounded-pill">
            <input className="form-check-input" onChange={() => { checkSwitch() }} checked type="checkbox" id="liveStats" />
            <label className="form-check-label" htmlFor="liveStats">
              Live Stats
            </label>
          </div>
        </div>
      </div>
      <div className="settings-boxes">
        <div className="setting-box sb-1 d-flex flex-column gap-3">
          <div className="row px-sm-4 align-items-center">
            <div className="col-lg-3">
              <label className="sb-label d-block mb-lg-0 mb-2 ps-2">
                Display Name
              </label>
            </div>
            <div className="col-lg-9">
              <div className="position-relative">
                <input type="text" name="name" id="name" className="sbi-inp form-control" value="Adeel Raza" />
                <button type="button" className="btn sb-btn">
                  Change
                </button>
              </div>
            </div>
          </div>
          <div className="row px-sm-4 align-items-center">
            <div className="col-lg-3">
              <label className="sb-label d-block mb-lg-0 mb-2 ps-2">
                Email Address
              </label>
            </div>
            <div className="col-lg-9">
              <div className="position-relative">
                <input type="text" name="email" id="email" className="sbi-inp form-control" value="asiadeel9@gmail.com" />
                <button type="button" className="btn sb-btn">
                  Change
                </button>
              </div>
            </div>
          </div>
          <div className="row px-sm-4 align-items-center">
            <div className="col-lg-3">
              <label className="sb-label d-block mb-lg-0 mb-2 ps-2">
                Profile Visibility
              </label>
            </div>
            <div className="col-lg-9">
              <div className="position-relative">
                <select name="visibility" id="visibility" className="sbi-inp form-control">
                  <option value="Private">
                    Private
                  </option>
                  <option value="Public">
                    Public
                  </option>
                </select>
                <button type="button" className="btn sb-btn">
                  Change
                </button>
              </div>
            </div>
          </div>
          <div className="row px-sm-4 align-items-center">
            <div className="col-lg-3">
              <label className="sb-label d-block mb-lg-0 mb-2 ps-2">
                Language
              </label>
            </div>
            <div className="col-lg-9">
              <div className="position-relative">
                <select name="language" id="language" className="sbi-inp form-control">
                  <option value="English">
                    English
                  </option>
                  <option value="German">
                    German
                  </option>
                </select>
                <button type="button" className="btn sb-btn">
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="setting-box sb-2 gap-4 d-flex flex-column">
          <div className="d-flex flex-column">
            <h3 className="mb-0 page-title fw-semibold text-white">
              Two-Factor Authentication
            </h3>
            <p className="mb-0 sb-desc fw-medium f-14p mb-2">
              Activate your 2FA to make your account more secure.
            </p>
          </div>
          <button className="btn fw-semibold sb-btn-primary text-white p-md-4 px-4 py-3 rounded-pill w-100" type="button">
            Activate
          </button>
        </div>
        <div className="setting-box sb-3 gap-4 d-flex flex-column">
          <div className="d-flex flex-column">
            <h3 className="mb-0 page-title fw-semibold text-white">
              Danger Zone
            </h3>
            <p className="mb-0 sb-desc fw-medium f-14p mb-2">
              Once you delete your account, there is no going back. Please be certain.
            </p>
          </div>
          <button className="btn fw-semibold sb-btn-danger text-white p-md-4 px-4 py-3 rounded-pill w-100" type="button">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </section>

    </Layout>
  );
}
