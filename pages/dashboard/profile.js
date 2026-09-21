import Layout from "../../components/dashboard/Layout";
import { useAuth } from "../../context/AuthContext";

const EARNINGS_ALL = [
  { type: "Referral Earnings", offerwall: "Dolares", coins: 500, date: "06 Oct 2024", time: "2 days ago" },
  { type: "Offer Completed", offerwall: "AdGateMedia", coins: 1500, date: "05 Oct 2024", time: "3 days ago" },
  { type: "Offer Completed", offerwall: "Lootably", coins: 640, date: "03 Oct 2024", time: "5 days ago" },
  { type: "Survey Completed", offerwall: "TheoremReach", coins: 320, date: "01 Oct 2024", time: "1 week ago" },
  { type: "Referral Earnings", offerwall: "Dolares", coins: 900, date: "28 Sep 2024", time: "1 week ago" },
  { type: "Offer Completed", offerwall: "Monlix", coins: 275, date: "24 Sep 2024", time: "2 weeks ago" },
];

const EARNINGS_HELD = [
  { type: "Offer Completed", offerwall: "AdGateMedia", coins: 1500, date: "06 Oct 2024", time: "2 days ago" },
  { type: "Offer Completed", offerwall: "Lootably", coins: 640, date: "05 Oct 2024", time: "3 days ago" },
  { type: "Offer Completed", offerwall: "TimeWall", coins: 412, date: "03 Oct 2024", time: "5 days ago" },
  { type: "Offer Completed", offerwall: "Monlix", coins: 275, date: "01 Oct 2024", time: "1 week ago" },
  { type: "Offer Completed", offerwall: "Notik", coins: 156, date: "28 Sep 2024", time: "1 week ago" },
  { type: "Offer Completed", offerwall: "Revlum", coins: 620, date: "24 Sep 2024", time: "2 weeks ago" },
];

const EARNINGS_CHARGEBACKS = [
  { type: "Offer Reversed", offerwall: "AdGateMedia", coins: -500, date: "02 Oct 2024", time: "4 days ago" },
  { type: "Offer Reversed", offerwall: "Lootably", coins: -320, date: "29 Sep 2024", time: "1 week ago" },
  { type: "Offer Reversed", offerwall: "Notik", coins: -150, date: "22 Sep 2024", time: "2 weeks ago" },
  { type: "Offer Reversed", offerwall: "Monlix", coins: -275, date: "15 Sep 2024", time: "3 weeks ago" },
  { type: "Offer Reversed", offerwall: "Revlum", coins: -180, date: "08 Sep 2024", time: "1 month ago" },
  { type: "Offer Reversed", offerwall: "TimeWall", coins: -412, date: "01 Sep 2024", time: "1 month ago" },
];

const EARNINGS_WITHDRAW = [
  { type: "Cashout Requested", offerwall: "PayPal", coins: -2000, date: "06 Oct 2024", time: "2 days ago" },
  { type: "Cashout Requested", offerwall: "Amazon", coins: -900, date: "30 Sep 2024", time: "1 week ago" },
  { type: "Cashout Requested", offerwall: "Spotify", coins: -500, date: "20 Sep 2024", time: "2 weeks ago" },
  { type: "Cashout Requested", offerwall: "Visa", coins: -1200, date: "10 Sep 2024", time: "3 weeks ago" },
  { type: "Cashout Requested", offerwall: "Xbox Live", coins: -750, date: "01 Sep 2024", time: "1 month ago" },
  { type: "Cashout Requested", offerwall: "Nintendo", coins: -600, date: "20 Aug 2024", time: "1 month ago" },
];

const EARNINGS_PENDING = [
  { type: "Offer Pending", offerwall: "AdGateMedia", coins: 1500, date: "07 Oct 2024", time: "1 day ago" },
  { type: "Offer Pending", offerwall: "Lootably", coins: 640, date: "06 Oct 2024", time: "2 days ago" },
  { type: "Survey Pending", offerwall: "TheoremReach", coins: 320, date: "05 Oct 2024", time: "3 days ago" },
  { type: "Offer Pending", offerwall: "Monlix", coins: 275, date: "04 Oct 2024", time: "4 days ago" },
  { type: "Offer Pending", offerwall: "Notik", coins: 156, date: "03 Oct 2024", time: "5 days ago" },
  { type: "Offer Pending", offerwall: "Revlum", coins: 620, date: "02 Oct 2024", time: "6 days ago" },
];

const EARNINGS_CHART_SCRIPT = `
$(document).ready(function () {
  const labels = ['Sep 01', 'Sep 02', 'Sep 03', 'Sep 04', 'Sep 05', 'Sep 06', 'Sep 07',
    'Sep 08', 'Sep 09', 'Sep 10', 'Sep 11', 'Sep 12', 'Sep 13', 'Sep 14'];
  const earningsData = [25, 65, 70, 50, 90, 45, 100, 60, 80, 55, 85, 75, 95, 110];

  const ctx = document.getElementById('earningsChart').getContext('2d');
  const earningsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Earnings (in $)',
        data: earningsData,
        borderColor: '#E27519',
        backgroundColor: 'transparent',
        borderWidth: 4,
        pointBackgroundColor: '#E27519',
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: false,
        tension: 0
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'top',
        }
      },
      scales: {
        x: {
          display: true,
          ticks: {
            color: 'rgba(86, 83, 112, 1)'
          }
        },
        y: {
          display: true,
          beginAtZero: true,
          ticks: {
            color: 'rgba(86, 83, 112, 1)'
          }
        }
      }
    }
  });
});
`;

export default function Page() {
  const { user, profile } = useAuth();
  const displayName = profile?.displayName || "Adeel Raza";
  const email = user?.email || "asiadeel9@gmail.com";
  const balance = profile?.balance ?? 0;
  const joined = user?.createdAt ? new Date(user.createdAt).toISOString().slice(0, 10) : "2024-09-28";

  return (
    <Layout scriptsVariant={"profile"} extraScript={EARNINGS_CHART_SCRIPT}>
  <section className="profile-sec pb-5">
    <div className="container pe-xxl-5">
      <div className="py-4 user-info mx-auto profile-user-info">
        <div className="d-flex align-items-center text-center flex-column gap-4 pt-5">
          <img src="/dashboard-assets/img/smiley-man-relaxing-outdoors1.png" alt="Person" className="rounded-circle" style={{height: '115px', width: '115px', objectFit: 'cover'}} />
          <div className="d-flex flex-column gap-2 align-items-center w-100">
            <h3 className="mb-0 text-white fw-semibold f-32p">
              {displayName}
            </h3>
            <div className="ui-box">
              <div className="uii-box">
                <div className="d-flex justify-content-center align-items-center p-3 uib-row fw-medium">
                  <div className="d-flex gap-2 align-items-center f-21p uib-value">
                    <img src="/dashboard-assets/img/flags/de.png" alt="Flag" className="rounded-circle" style={{height: '18px', width: '18px', objectFit: 'cover'}} />
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
      <div className="pb-4 pt-4">
        <div className="d-flex flex-wrap gap-3">
          <div className="profile-card py-4 px-4">
            <span className="f-16p pc-label">
              Completed Orders
            </span>
            <span className="d-flex pc-value text-white f-20p align-items-center gap-1">
              <span>
                300
              </span>
            </span>
          </div>
          <div className="profile-card py-4 px-4">
            <span className="f-16p pc-label">
              Coins Earned
            </span>
            <span className="d-flex pc-value text-white f-20p align-items-center gap-1">
              <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="22" />
              <span>
                300
              </span>
            </span>
          </div>
          <div className="profile-card py-4 px-4">
            <span className="f-16p pc-label">
              User Referrel
            </span>
            <span className="d-flex pc-value text-white f-20p align-items-center gap-1">
              <span>
                300
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <div className="site-card px-3 py-4">
          <h3 className="mb-0 fw-medium text-white f-18p px-5 pb-4">
            Earnings
          </h3>
          <canvas id="earningsChart" className="w-100"></canvas>
        </div>
      </div>
      <div className="nav-tabs-cont px-md-4 px-0 mb-md-4 mb-2 pt-5">
        <h3 className="mb-0 f-26p fw-semibold poppins text-white">
          Profile
        </h3>
        <ul className="nav nav-pills mb-0" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="pills-tab-2" data-bs-toggle="pill" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="true">
              General
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-tab-1" data-bs-toggle="pill" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="false">
              Earnings
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-tab-3" data-bs-toggle="pill" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">
              Withdrawals
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content py-md-4 py-2" id="pills-tabContent">
        <div className="tab-pane fade show active" id="tab-2" role="tabpanel" aria-labelledby="pills-tab-2">
          <div className="d-flex flex-column gap-4">
            <div className="site-card py-md-5 px-md-5 p-3">
              <div className="pe-0">
                <div className="table-responsive">
                  <table className="table table-separated table-borderless table-profile-general">
                    <tbody>
                      <tr>
                        <td>
                          <div className="ps-lg-4 tpg-label fw-semibold f-16p">
                            Dolares ID
                          </div>
                        </td>
                        <td>
                          <div className="tpg-value fw-semibold f-16p pe-lg-4 text-orange d-flex align-items-center justify-content-end gap-2">
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.15387 2.36391L2.15141 4.2743V13.7261C2.15141 15.3411 3.46063 16.6504 5.0757 16.6504L12.8287 16.6507C12.5506 17.4368 11.8007 18 10.9194 18H5.0757C2.71531 18 0.801758 16.0864 0.801758 13.7261V4.27395C0.801406 3.39152 1.36602 2.64094 2.15387 2.36391ZM13.1739 0C14.2919 0 15.1986 0.906328 15.1986 2.02465V13.7222C15.1986 14.8402 14.2923 15.7468 13.1739 15.7468H5.0757C3.95738 15.7468 3.05106 14.8405 3.05106 13.7222V2.02465C3.05106 0.90668 3.95738 0 5.0757 0H13.1739Z" fill="#EF7C16"></path>
                            </svg>
                            <span>
                              s4rQOiVhQHNeu4
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="ps-lg-4 tpg-label fw-semibold f-16p">
                            Date Joined
                          </div>
                        </td>
                        <td>
                          <div className="tpg-value fw-semibold f-16p pe-lg-4 text-orange">
                            {joined}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="ps-lg-4 tpg-label fw-semibold f-16p">
                            Balance
                          </div>
                        </td>
                        <td>
                          <div className="tpg-value fw-semibold f-16p pe-lg-4 text-orange">
                            {balance} Coins
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="ps-lg-4 tpg-label fw-semibold f-16p">
                            Waiting Balance
                          </div>
                        </td>
                        <td>
                          <div className="tpg-value fw-semibold f-16p pe-lg-4 text-orange">
                            0 Coins
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="ps-lg-4 tpg-label fw-semibold f-16p">
                            Referral Earnings
                          </div>
                        </td>
                        <td>
                          <div className="tpg-value fw-semibold f-16p pe-lg-4 text-orange">
                            0 Coins
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="ps-lg-4 tpg-label fw-semibold f-16p">
                            Referrer
                          </div>
                        </td>
                        <td>
                          <div className="tpg-value fw-semibold f-16p pe-lg-4 text-orange">
                            Placeholder
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="ps-lg-4 tpg-label fw-semibold f-16p">
                            Email
                          </div>
                        </td>
                        <td>
                          <div className="tpg-value fw-semibold f-16p pe-lg-4 text-orange">
                            {email}
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
            <div className="site-card py-md-5 px-md-5 p-3">
              <ul className="nav nav-pills sub-nav-pills bg-transparent py-3 mb-0 flex-nowrap" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link px-md-3 px-2 active" id="pills-sub-1-tab-1" data-bs-toggle="pill" href="#sub-1-tab-1" role="tab" aria-controls="sub-1-tab-1" aria-selected="true">
                    Earnings
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link px-md-3 px-2" id="pills-sub-1-tab-2" data-bs-toggle="pill" href="#sub-1-tab-2" role="tab" aria-controls="sub-1-tab-2" aria-selected="false">
                    Held Offers
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link px-md-3 px-2" id="pills-sub-1-tab-3" data-bs-toggle="pill" href="#sub-1-tab-3" role="tab" aria-controls="sub-1-tab-3" aria-selected="false">
                    Chargebacks
                  </a>
                </li>
              </ul>
              <form action="" method="post">
                <div className="search-boxes d-flex flex-wrap gap-3 mt-md-5 mt-3">
                  <div className="search-box p-md-4 p-3">
                    <label className="sb-label text-orange f-14p fw-medium">
                      Period Form
                    </label>
                    <div className="d-flex align-items-center justify-content-between gap-3 position-relative">
                      <input type="date" className="form-control sb-inp bg-transparent fw-semibold border-0" />
                      <img src="/dashboard-assets/img/calendar-svgrepo-com-1.svg" alt="Calendar" height="20" />
                    </div>
                  </div>
                  <div className="search-box p-md-4 p-3">
                    <label className="sb-label text-orange f-14p fw-medium">
                      Until
                    </label>
                    <div className="d-flex align-items-center justify-content-between gap-3 position-relative">
                      <input type="date" className="form-control sb-inp bg-transparent fw-semibold border-0" />
                      <img src="/dashboard-assets/img/calendar-svgrepo-com-1.svg" alt="Calendar" height="20" />
                    </div>
                  </div>
                  <div className="search-box p-md-4 p-3">
                    <label className="sb-label text-orange f-14p fw-medium">
                      Offerwall
                    </label>
                    <div className="d-flex align-items-center justify-content-between gap-3 position-relative">
                      <select className="form-control sb-inp bg-transparent fw-semibold border-0">
                        <option value="PayPal">
                          PayPal
                        </option>
                        <option value="PayPal">
                          PayPal
                        </option>
                        <option value="PayPal">
                          PayPal
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="search-box p-md-4 p-3">
                    <label className="sb-label text-orange f-14p fw-medium">
                      Entries per page
                    </label>
                    <div className="d-flex align-items-center justify-content-between gap-3 position-relative">
                      <select className="form-control sb-inp bg-transparent fw-semibold border-0">
                        <option value="5">
                          5
                        </option>
                        <option value="10">
                          10
                        </option>
                        <option value="20">
                          20
                        </option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="search-box search-box-btn btn text-orange p-4">
                    <span className="fw-bold f-20p">
                      Update
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="tab-content py-md-4 py-2" id="sub-pills-tabContent">
              <div className="tab-pane fade active show" id="sub-1-tab-1" role="tabpanel" aria-labelledby="pills-sub-1-tab-1">
                <div className="d-flex flex-column gap-4">
                  <div className="site-card py-md-5 px-md-5 p-3">
                    <div className="pe-0">
                      <div className="table-responsive">
                        <table className="table table-separated table-borderless table-profile-general table-profile-earnings">
                          <thead>
                            <tr>
                              <th>
                                Type
                              </th>
                              <th>
                                Offerwall
                              </th>
                              <th>
                                Coins
                              </th>
                              <th>
                                Date
                              </th>
                              <th>
                                Time
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {EARNINGS_ALL.map((row, i) => (
                            <tr key={i}>
                              <td>
                                <div className="tpe-td fw-medoim f-16p">{row.type}</div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.offerwall}</div>
                              </td>
                              <td>
                                <div className="d-flex gap-1 align-items-center tpe-td">
                                  <img src="/dashboard-assets/img/coin.svg" height="16" alt="Coin" />
                                  <span>{row.coins}</span>
                                </div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.date}</div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.time}</div>
                              </td>
                            </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="sub-1-tab-2" role="tabpanel" aria-labelledby="pills-sub-1-tab-2">
                <div className="d-flex flex-column gap-4">
                  <div className="site-card py-md-5 px-md-5 p-3">
                    <div className="pe-0">
                      <div className="table-responsive">
                        <table className="table table-separated table-borderless table-profile-general table-profile-earnings">
                          <thead>
                            <tr>
                              <th>
                                Type (Held Offers)
                              </th>
                              <th>
                                Offerwall
                              </th>
                              <th>
                                Coins
                              </th>
                              <th>
                                Date
                              </th>
                              <th>
                                Time
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {EARNINGS_HELD.map((row, i) => (
                            <tr key={i}>
                              <td>
                                <div className="tpe-td fw-medoim f-16p">{row.type}</div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.offerwall}</div>
                              </td>
                              <td>
                                <div className="d-flex gap-1 align-items-center tpe-td">
                                  <img src="/dashboard-assets/img/coin.svg" height="16" alt="Coin" />
                                  <span>{row.coins}</span>
                                </div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.date}</div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.time}</div>
                              </td>
                            </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="sub-1-tab-3" role="tabpanel" aria-labelledby="pills-sub-1-tab-3">
                <div className="d-flex flex-column gap-4">
                  <div className="site-card py-md-5 px-md-5 p-3">
                    <div className="pe-0">
                      <div className="table-responsive">
                        <table className="table table-separated table-borderless table-profile-general table-profile-earnings">
                          <thead>
                            <tr>
                              <th>
                                Type (Charge Backs)
                              </th>
                              <th>
                                Offerwall
                              </th>
                              <th>
                                Coins
                              </th>
                              <th>
                                Date
                              </th>
                              <th>
                                Time
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {EARNINGS_CHARGEBACKS.map((row, i) => (
                            <tr key={i}>
                              <td>
                                <div className="tpe-td fw-medoim f-16p">{row.type}</div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.offerwall}</div>
                              </td>
                              <td>
                                <div className="d-flex gap-1 align-items-center tpe-td">
                                  <img src="/dashboard-assets/img/coin.svg" height="16" alt="Coin" />
                                  <span>{row.coins}</span>
                                </div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.date}</div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.time}</div>
                              </td>
                            </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="pills-tab-3">
          <div className="d-flex flex-column gap-4">
            <div className="site-card py-md-5 px-md-5 p-3">
              <ul className="nav nav-pills sub-nav-pills bg-transparent py-3 mb-0 flex-nowrap" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link px-md-3 px-2 active" id="pills-sub-2-tab-1" data-bs-toggle="pill" href="#sub-2-tab-1" role="tab" aria-controls="sub-2-tab-1" aria-selected="true">
                    Withdrawals
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link px-md-3 px-2" id="pills-sub-2-tab-2" data-bs-toggle="pill" href="#sub-2-tab-2" role="tab" aria-controls="sub-2-tab-2" aria-selected="false">
                    Pending
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content py-md-4 py-2" id="sub-pills-tabContent">
              <div className="tab-pane fade active show" id="sub-2-tab-1" role="tabpanel" aria-labelledby="pills-sub-2-tab-1">
                <div className="d-flex flex-column gap-4">
                  <div className="site-card py-md-5 px-md-5 p-3">
                    <div className="pe-0">
                      <div className="table-responsive">
                        <table className="table table-separated table-borderless table-profile-general table-profile-earnings">
                          <thead>
                            <tr>
                              <th>
                                Type
                              </th>
                              <th>
                                Offerwall
                              </th>
                              <th>
                                Coins
                              </th>
                              <th>
                                Date
                              </th>
                              <th>
                                Time
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {EARNINGS_WITHDRAW.map((row, i) => (
                            <tr key={i}>
                              <td>
                                <div className="tpe-td fw-medoim f-16p">{row.type}</div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.offerwall}</div>
                              </td>
                              <td>
                                <div className="d-flex gap-1 align-items-center tpe-td">
                                  <img src="/dashboard-assets/img/coin.svg" height="16" alt="Coin" />
                                  <span>{row.coins}</span>
                                </div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.date}</div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.time}</div>
                              </td>
                            </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="sub-2-tab-2" role="tabpanel" aria-labelledby="pills-sub-2-tab-2">
                <div className="d-flex flex-column gap-4">
                  <div className="site-card py-md-5 px-md-5 p-3">
                    <div className="pe-0">
                      <div className="table-responsive">
                        <table className="table table-separated table-borderless table-profile-general table-profile-earnings">
                          <thead>
                            <tr>
                              <th>
                                Type (Pending)
                              </th>
                              <th>
                                Offerwall
                              </th>
                              <th>
                                Coins
                              </th>
                              <th>
                                Date
                              </th>
                              <th>
                                Time
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {EARNINGS_PENDING.map((row, i) => (
                            <tr key={i}>
                              <td>
                                <div className="tpe-td fw-medoim f-16p">{row.type}</div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.offerwall}</div>
                              </td>
                              <td>
                                <div className="d-flex gap-1 align-items-center tpe-td">
                                  <img src="/dashboard-assets/img/coin.svg" height="16" alt="Coin" />
                                  <span>{row.coins}</span>
                                </div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.date}</div>
                              </td>
                              <td>
                                <div className="tpe-td">{row.time}</div>
                              </td>
                            </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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
