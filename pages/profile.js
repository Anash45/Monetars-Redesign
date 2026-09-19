import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout showPayModal scriptsVariant={"profile"}>
  <main>
    <section className="py-5 page-sec roboto">
      <div className="container">
        <div className="mb-0 pb-3 d-flex justify-content-between flex-wrap">
          <h2 className="page-title mb-0 fw-medium pb-4">
            Profile
          </h2>
        </div>
        <div className="px-3 mt-2 shadow-lg rounded-xl profile-card">
          <div className="row mx-0">
            <div className="col-lg-5 border-lg-end border-0">
              <div className="d-flex align-items-center flex-column justify-content-center py-lg-0 py-3 text-center h-100">
                <img src="/assets/img/Ellipse 55.png" alt="Profile Image" className="p-img" />
                <h3 className="py-3 f-24p mb-0">
                  El Bronco VC CBE
                </h3>
                <div className="d-flex px-3 align-items-center gap-3">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="f-16p p-counts">
                      142
                    </span>
                    <span className="f-14p p-text">
                      Completed
                      <br />
                      Orders
                    </span>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="f-16p p-counts">
                      142
                    </span>
                    <span className="f-14p p-text">
                      Coins
                      <br />
                      Earned
                    </span>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="f-16p p-counts">
                      142
                    </span>
                    <span className="f-14p p-text">
                      Users
                      <br />
                      Referred
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="d-flex align-items-center justify-content-between border-bottom py-2">
                <h3 className="py-1 f-24p mb-0">
                  Earnings
                </h3>
                <span className="py-1 f-14p p-text">
                  7 Days
                </span>
              </div>
              <div className="py-2 px-lg-2 px-0">
                <canvas id="lineGraph" height="400" className="w-100"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <ul className="nav nav-pills my-4 lb-tabs rounded-lg flex-row" id="pills-tab" role="tablist">
            <li className="nav-item flex-fill" role="presentation">
              <button className="nav-link w-100 fw-medium lb-tab-btn active" id="pills-general-tab" data-bs-toggle="pill" data-bs-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="true">
                General
              </button>
            </li>
            <li className="nav-item flex-fill" role="presentation">
              <button className="nav-link w-100 fw-medium lb-tab-btn" id="pills-earnings-tab" data-bs-toggle="pill" data-bs-target="#pills-earnings" type="button" role="tab" aria-controls="pills-earnings" aria-selected="false">
                Earnings
              </button>
            </li>
            <li className="nav-item flex-fill" role="presentation">
              <button className="nav-link w-100 fw-medium lb-tab-btn" id="pills-withdraw-tab" data-bs-toggle="pill" data-bs-target="#pills-withdraw" type="button" role="tab" aria-controls="pills-withdraw" aria-selected="false">
                Withdraw
              </button>
            </li>
            <li className="nav-item flex-fill" role="presentation">
              <button className="nav-link w-100 fw-medium lb-tab-btn" id="pills-referrals-tab" data-bs-toggle="pill" data-bs-target="#pills-referrals" type="button" role="tab" aria-controls="pills-referrals" aria-selected="false">
                Referrals
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content py-3" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab">
            <div className="rounded-lg p-sub py-3">
              <div className="row mx-0">
                <div className="col-lg-6 px-3 pe-lg-4">
                  <div className="d-flex flex-column justify-content-between h-100">
                    <div className="w-100">
                      <h4 className="f-20p mb-3">
                        General
                      </h4>
                      <div className="ps-rows">
                        <div className="d-flex justify-content-between align-items-center border-bottom py-2">
                          <span className="fw-medium">
                            Monetars ID
                          </span>
                          <span className="d-flex align-items-center">
                            <i className="fa fa-copy icon-purple" data-bs-toggle="tooltip" title="Copy"></i>
                            <span className="ms-1">
                              63727e20393c97d290171589
                            </span>
                          </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-1 mt-3">
                          <span className="fw-medium">
                            Date Joined
                          </span>
                          <span className="d-flex align-items-center">
                            <span className="ms-1">
                              2022-07-09
                            </span>
                          </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-1 mt-3">
                          <span className="fw-medium">
                            Balance
                          </span>
                          <span className="d-flex align-items-center">
                            <span className="ms-1">
                              50 coins
                            </span>
                          </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-1 mt-3">
                          <span className="fw-medium">
                            Waiting Balance
                          </span>
                          <span className="d-flex align-items-center">
                            <span className="ms-1">
                              0
                            </span>
                          </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-1 mt-3">
                          <span className="fw-medium">
                            Referral Earnings
                          </span>
                          <span className="d-flex align-items-center">
                            <span className="ms-1">
                              0
                            </span>
                          </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-1 mt-3">
                          <span className="fw-medium">
                            Referrer
                          </span>
                          <span className="d-flex align-items-center">
                            <span className="ms-1">
                              ! | iopipaj
                            </span>
                          </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-1 mt-3">
                          <span className="fw-medium">
                            Email
                          </span>
                          <span className="d-flex align-items-center">
                            <span className="ms-1">
                              xomanib171@sopulit.com
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="ps-box rounded-md ps-2fa-box px-3 py-2">
                        <div className="py-1">
                          <h3 className="f-20p fw-medium mb-2 pb-1">
                            Two-factor Authentication
                          </h3>
                          <p className="mb-3">
                            Activate your 2FA to make your account
                            <br />
                            more secure.
                          </p>
                          <a href="#" className="btn fw-medium w-100 f-14p p-2 rounded-md">
                            <span className="p-1">
                              Activate
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 px-3 ps-lg-4">
                  <div className="d-flex flex-column justify-content-between h-100">
                    <div className="w-100">
                      <h4 className="f-20p mb-3">
                        Display Name
                      </h4>
                      <form method="post" className="mb-3">
                        <div className="pb-1">
                          <input type="text" className="d-block rounded-md ps-inp mb-2 psi-lg form-control" value="Your name is: MacMa" />
                        </div>
                        <button className="btn btn-blue fw-medium w-100 f-14p p-2 rounded-md">
                          <span className="p-1">
                            Change
                          </span>
                        </button>
                      </form>
                      <h4 className="f-20p mb-3">
                        Profile Visibility
                      </h4>
                      <div method="post" className="mb-3">
                        <div className="form-check form-switch d-flex align-items-center justify-content-between">
                          <input className="form-check-input" type="checkbox" onChange={() => { changeVisibility() }} id="flexSwitchCheckChecked" checked />
                          <label className="form-check-label fw-medium" id="p-visibility" htmlFor="flexSwitchCheckChecked">
                            Public
                          </label>
                        </div>
                      </div>
                      <h4 className="f-20p mb-3">
                        Language
                      </h4>
                      <form method="post" className="mb-3">
                        <div className="pb-1">
                          <select className="d-block rounded-md ps-inp mb-2 psi-lg form-control">
                            <option value="" className="" disabled selected>
                              Select Language
                            </option>
                            <option value="English">
                              English
                            </option>
                            <option value="Danish">
                              Danish
                            </option>
                            <option value="German">
                              German
                            </option>
                            <option value="Spanish">
                              Spanish
                            </option>
                            <option value="French">
                              French
                            </option>
                            <option value="Italian">
                              Italian
                            </option>
                            <option value="Polish">
                              Polish
                            </option>
                            <option value="Portuguese">
                              Portuguese
                            </option>
                            <option value="Swedish">
                              Swedish
                            </option>
                          </select>
                        </div>
                        <button className="btn btn-blue fw-medium w-100 f-14p p-2 rounded-md">
                          <span className="p-1">
                            Change
                          </span>
                        </button>
                      </form>
                    </div>
                    <div className="mt-4">
                      <div className="ps-box rounded-md ps-danger-box px-3 py-2">
                        <div className="py-1">
                          <h3 className="f-20p fw-medium mb-2 pb-1">
                            Danger Zone
                          </h3>
                          <p className="mb-3">
                            Once you delete your account, there is no going back.
                            <br />
                            Please be certain.
                          </p>
                          <a href="#" className="btn fw-medium w-100 f-14p p-2 rounded-md">
                            <span className="p-1">
                              Delete Account
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-earnings" role="tabpanel" aria-labelledby="pills-earnings-tab">
            <div className="p-sub">
              <ul className="nav nav-tabs tab-ul flex-wrap nav-justified mb-4" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="earning1-tab" data-bs-toggle="tab" data-bs-target="#earning1" type="button" role="tab" aria-controls="earning1" aria-selected="true">
                    EARNINGS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="earning2-tab" data-bs-toggle="tab" data-bs-target="#earning2" type="button" role="tab" aria-controls="earning2" aria-selected="false">
                    HELD OFFERS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="earning3-tab" data-bs-toggle="tab" data-bs-target="#earning3" type="button" role="tab" aria-controls="earning3" aria-selected="false">
                    CHARGEBACKS
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent1">
                <div className="tab-pane fade show active px-2" id="earning1" role="tabpanel" aria-labelledby="earning1-tab">
                  <div className="py-3">
                    <p className="fw-bold mb-0">
                      Earnings
                    </p>
                    <form className="d-flex table-filter">
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Period from
                        </p>
                        <input type="date" className="form-control ps-inp psi-sm rounded" />
                      </div>
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Until
                        </p>
                        <input type="date" className="form-control ps-inp psi-sm rounded" />
                      </div>
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Offerwall
                        </p>
                        <select className="form-control ps-inp psi-sm rounded">
                          <option value="">
                            Show All
                          </option>
                        </select>
                      </div>
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Entries per page
                        </p>
                        <select className="form-control ps-inp psi-sm rounded">
                          <option value="">
                            10 Entries
                          </option>
                        </select>
                      </div>
                      <div className="d-flex flex-column justify-content-end tf-btn">
                        <button className="btn btn-blue px-2 py-1">
                          <span className="px-1">
                            Update
                          </span>
                        </button>
                      </div>
                    </form>
                    <div className="table-responsive">
                      <table className="table tf-table mb-3">
                        <thead>
                          <tr>
                            <td className="fw-medium">
                              Name
                            </td>
                            <td className="fw-medium">
                              Coins
                            </td>
                            <td className="fw-medium">
                              Bonus
                            </td>
                            <td className="fw-medium">
                              Wall
                            </td>
                            <td className="fw-medium">
                              Date
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="fw-medium">
                              Daily Bonus
                            </td>
                            <td className="fw-medium">
                              50 Coins
                            </td>
                            <td className="fw-medium">
                              -
                            </td>
                            <td className="fw-medium">
                              Bonus
                            </td>
                            <td className="fw-medium">
                              a day ago
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <nav aria-label="Page navigation" className="tf-pagination">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">
                                «
                              </span>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">
                                »
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade px-2" id="earning2" role="tabpanel" aria-labelledby="earning2-tab">
                  <div className="py-3">
                    <p className="fw-bold mb-0">
                      Held Offers
                    </p>
                    <form className="d-flex table-filter">
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Period from
                        </p>
                        <input type="date" className="form-control ps-inp psi-sm rounded" />
                      </div>
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Until
                        </p>
                        <input type="date" className="form-control ps-inp psi-sm rounded" />
                      </div>
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Offerwall
                        </p>
                        <select className="form-control ps-inp psi-sm rounded">
                          <option value="">
                            Show All
                          </option>
                        </select>
                      </div>
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Entries per page
                        </p>
                        <select className="form-control ps-inp psi-sm rounded">
                          <option value="">
                            10 Entries
                          </option>
                        </select>
                      </div>
                      <div className="d-flex flex-column justify-content-end tf-btn">
                        <button className="btn btn-blue px-2 py-1">
                          <span className="px-1">
                            Update
                          </span>
                        </button>
                      </div>
                    </form>
                    <div className="table-responsive">
                      <table className="table tf-table mb-3">
                        <thead>
                          <tr>
                            <td className="fw-medium">
                              Name
                            </td>
                            <td className="fw-medium">
                              Coins
                            </td>
                            <td className="fw-medium">
                              Bonus
                            </td>
                            <td className="fw-medium">
                              Wall
                            </td>
                            <td className="fw-medium">
                              Date
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="fw-medium">
                              CPX Research Survey
                            </td>
                            <td className="fw-medium">
                              1,250 Coins
                            </td>
                            <td className="fw-medium">
                              +125
                            </td>
                            <td className="fw-medium">
                              CPX Research
                            </td>
                            <td className="fw-medium">
                              2 days ago
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <nav aria-label="Page navigation" className="tf-pagination">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">
                                «
                              </span>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">
                                »
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade px-2" id="earning3" role="tabpanel" aria-labelledby="earning3-tab">
                  <div className="py-3">
                    <p className="fw-bold mb-0">
                      ChargeBacks
                    </p>
                    <form className="d-flex table-filter">
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Period from
                        </p>
                        <input type="date" className="form-control ps-inp psi-sm rounded" />
                      </div>
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Until
                        </p>
                        <input type="date" className="form-control ps-inp psi-sm rounded" />
                      </div>
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Offerwall
                        </p>
                        <select className="form-control ps-inp psi-sm rounded">
                          <option value="">
                            Show All
                          </option>
                        </select>
                      </div>
                      <div className="tf-inp">
                        <p className="mb-2 tf-label">
                          Entries per page
                        </p>
                        <select className="form-control ps-inp psi-sm rounded">
                          <option value="">
                            10 Entries
                          </option>
                        </select>
                      </div>
                      <div className="d-flex flex-column justify-content-end tf-btn">
                        <button className="btn btn-blue px-2 py-1">
                          <span className="px-1">
                            Update
                          </span>
                        </button>
                      </div>
                    </form>
                    <div className="table-responsive">
                      <table className="table tf-table mb-3">
                        <thead>
                          <tr>
                            <td className="fw-medium">
                              Name
                            </td>
                            <td className="fw-medium">
                              Coins
                            </td>
                            <td className="fw-medium">
                              Bonus
                            </td>
                            <td className="fw-medium">
                              Wall
                            </td>
                            <td className="fw-medium">
                              Date
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="fw-medium">
                              AdGate Media Offer
                            </td>
                            <td className="fw-medium">
                              3,400 Coins
                            </td>
                            <td className="fw-medium">
                              +340
                            </td>
                            <td className="fw-medium">
                              AdGate Media
                            </td>
                            <td className="fw-medium">
                              3 days ago
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <nav aria-label="Page navigation" className="tf-pagination">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">
                                «
                              </span>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">
                                »
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
          </div>
          <div className="tab-pane fade" id="pills-withdraw" role="tabpanel" aria-labelledby="pills-withdraw-tab">
            <div className="p-sub">
              <ul className="nav nav-tabs tab-ul flex-wrap nav-justified mb-4" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="withdraw1-tab" data-bs-toggle="tab" data-bs-target="#withdraw1" type="button" role="tab" aria-controls="withdraw1" aria-selected="true">
                    WITHDRAWLS
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="withdraw2-tab" data-bs-toggle="tab" data-bs-target="#withdraw2" type="button" role="tab" aria-controls="withdraw2" aria-selected="false">
                    PENDING
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent2">
                <div className="tab-pane fade show active px-2" id="withdraw1" role="tabpanel" aria-labelledby="withdraw1-tab">
                  <div className="py-3">
                    <p className="fw-bold mb-0">
                      Withdrawls
                    </p>
                    <div className="table-responsive">
                      <table className="table tf-table mb-3">
                        <thead>
                          <tr>
                            <td className="fw-medium">
                              Date
                            </td>
                            <td className="fw-medium">
                              Method
                            </td>
                            <td className="fw-medium">
                              Amount
                            </td>
                            <td className="fw-medium">
                              Invoice
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="fw-medium">
                              01-05-2022
                            </td>
                            <td className="fw-medium">
                              PayPal
                            </td>
                            <td className="fw-medium">
                              $25.00
                            </td>
                            <td className="fw-medium">
                              <a href="#" className="btn btn-blue py-1 px-2 w-fit rounded-lg d-flex align-items-center gap-2 justify-content-center">
                                <img src="/assets/img/arrow-down.png" alt="Arrow" height="14" />
                                <span className="fw-medium f-14p">
                                  Download
                                </span>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <nav aria-label="Page navigation" className="tf-pagination">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">
                                «
                              </span>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">
                                »
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade px-2" id="withdraw2" role="tabpanel" aria-labelledby="withdraw2-tab">
                  <div className="py-3">
                    <p className="fw-bold mb-0">
                      Pending
                    </p>
                    <div className="table-responsive">
                      <table className="table tf-table mb-3">
                        <thead>
                          <tr>
                            <td className="fw-medium">
                              Date
                            </td>
                            <td className="fw-medium">
                              Method
                            </td>
                            <td className="fw-medium">
                              Amount
                            </td>
                            <td className="fw-medium">
                              Invoice
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="fw-medium">
                              01-05-2022
                            </td>
                            <td className="fw-medium">
                              Amazon Gift Card
                            </td>
                            <td className="fw-medium">
                              $10.00
                            </td>
                            <td className="fw-medium">
                              <a href="#" className="btn btn-red py-1 px-2 w-fit rounded-lg d-flex align-items-center gap-2 justify-content-center">
                                <i className="fa-regular fa-circle-xmark"></i>
                                <span className="fw-medium f-14p">
                                  Cancel
                                </span>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <nav aria-label="Page navigation" className="tf-pagination">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">
                                «
                              </span>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">
                                »
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
          </div>
          <div className="tab-pane fade" id="pills-referrals" role="tabpanel" aria-labelledby="pills-referrals-tab">
            <div className="rounded-xl p-sub p-3 text-center mb-3">
              <h4 className="fw-medium f-16p my-3">
                Refer & Earn
              </h4>
              <p className="mb-0 f-14p re-text">
                Earn unlimited rewards by referring your friends, family and followers. You'll earn 10% of the confirmed payouts from your referred members. Keep referring more friends and watch your earnings grow up!
              </p>
              <div className="d-flex my-3 ref-link p-3 rounded-xl justify-content-between align-items-center">
                <span className="f-14p">
                  https://monetars.com/refer/?refer=EYOPBR
                </span>
                <i className="fa fa-copy"></i>
              </div>
              <p className="mb-0 f-14p re-text">
                Share above Referral link or Unique Referral Code to your Friends & Family.
              </p>
              <div className="d-flex my-3 align-items-center justify-content-center gap-3 rf-sharer">
                <a href="#" className="btn btn-fb px-3 py-2 rounded-md fw-bold">
                  <span className="p-1">
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                  <span className="p-1">
                    SHARE
                  </span>
                </a>
                <a href="#" className="btn btn-x px-3 py-2 rounded-md fw-bold">
                  <span className="p-1">
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                  <span className="p-1">
                    SHARE
                  </span>
                </a>
              </div>
            </div>
            <div className="table-responsive mb-4 pb-4">
              <table className="table row-separated ref-table">
                <thead className="bg-transparent">
                  <tr>
                    <td>
                      Username
                    </td>
                    <td>
                      Registered
                    </td>
                    <td>
                      Coins
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img src="/assets/img/2.png" alt="dp" className="rounded-circle" height="45" />
                        <span>
                          Registered
                        </span>
                      </div>
                    </td>
                    <td>
                      29-06-2022
                    </td>
                    <td className="tb-earn fw-normal">
                      $0.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img src="/assets/img/2.png" alt="dp" className="rounded-circle" height="45" />
                        <span>
                          Registered
                        </span>
                      </div>
                    </td>
                    <td>
                      29-06-2022
                    </td>
                    <td className="tb-earn fw-normal">
                      $0.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img src="/assets/img/2.png" alt="dp" className="rounded-circle" height="45" />
                        <span>
                          Registered
                        </span>
                      </div>
                    </td>
                    <td>
                      29-06-2022
                    </td>
                    <td className="tb-earn fw-normal">
                      $0.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    </Layout>
  );
}
