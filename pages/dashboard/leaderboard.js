import { useEffect, useState } from "react";
import Layout from "../../components/dashboard/Layout";

const PODIUMS = {
  Weekly: [
    { place: "mc-2nd", crown: "/dashboard-assets/img/crown-silver.svg", badge: "/dashboard-assets/img/second.svg", badgeHeight: 35, avatar: "https://ui-avatars.com/api/?name=gilmilli7&color=7F9CF5&background=EBF4FF", name: "gilmilli7", points: "52.530", prizeColor: "#E1E1E1", prize: "12.500" },
    { place: "mc-1st", crown: "/dashboard-assets/img/crown-1st.svg", badge: "/dashboard-assets/img/first.svg", badgeHeight: 48, avatar: "https://dolares.app/public/storage/users/uaWtToDVg1VtplAmk48vfXJQyEkuyRybyfInRnT5EGN8uEakgO.jpg", topCrown: true, name: "moramondolina", points: "52.530", prizeColor: "#EF7C16", prize: "25.000" },
    { place: "mc-3rd", crown: "/dashboard-assets/img/crown-silver.svg", badge: "/dashboard-assets/img/third.svg", badgeHeight: 35, avatar: "https://dolares.app/public/storage/users/XawBCIAkdVOfFxC8KexwuTx8rNWLCpzfFCMlQS4kMUIaDLVWph.jpg", name: "Jeremy", points: "42.075", prizeColor: "#403E51", prize: "7.500" },
  ],
  Monthly: [
    { place: "mc-2nd", crown: "/dashboard-assets/img/crown-silver.svg", badge: "/dashboard-assets/img/second.svg", badgeHeight: 35, avatar: "https://ui-avatars.com/api/?name=kdunlop&color=7F9CF5&background=EBF4FF", name: "kdunlop", points: "61.210", prizeColor: "#E1E1E1", prize: "15.000" },
    { place: "mc-1st", crown: "/dashboard-assets/img/crown-1st.svg", badge: "/dashboard-assets/img/first.svg", badgeHeight: 48, avatar: "https://dolares.app/public/storage/users/XawBCIAkdVOfFxC8KexwuTx8rNWLCpzfFCMlQS4kMUIaDLVWph.jpg", topCrown: true, name: "wayne_gordon", points: "98.400", prizeColor: "#EF7C16", prize: "40.000" },
    { place: "mc-3rd", crown: "/dashboard-assets/img/crown-silver.svg", badge: "/dashboard-assets/img/third.svg", badgeHeight: 35, avatar: "https://dolares.app/public/storage/users/uaWtToDVg1VtplAmk48vfXJQyEkuyRybyfInRnT5EGN8uEakgO.jpg", name: "mia_hendricks", points: "55.900", prizeColor: "#403E51", prize: "12.000" },
  ],
  Affiliate: [
    { place: "mc-2nd", crown: "/dashboard-assets/img/crown-silver.svg", badge: "/dashboard-assets/img/second.svg", badgeHeight: 35, avatar: "https://ui-avatars.com/api/?name=devonp&color=7F9CF5&background=EBF4FF", name: "devon.parker", points: "18.320", prizeColor: "#E1E1E1", prize: "5.000" },
    { place: "mc-1st", crown: "/dashboard-assets/img/crown-1st.svg", badge: "/dashboard-assets/img/first.svg", badgeHeight: 48, avatar: "https://dolares.app/public/storage/users/uaWtToDVg1VtplAmk48vfXJQyEkuyRybyfInRnT5EGN8uEakgO.jpg", topCrown: true, name: "jasmine_lowe", points: "24.780", prizeColor: "#EF7C16", prize: "10.000" },
    { place: "mc-3rd", crown: "/dashboard-assets/img/crown-silver.svg", badge: "/dashboard-assets/img/third.svg", badgeHeight: 35, avatar: "https://dolares.app/public/storage/users/XawBCIAkdVOfFxC8KexwuTx8rNWLCpzfFCMlQS4kMUIaDLVWph.jpg", name: "ryan_okafor", points: "16.045", prizeColor: "#403E51", prize: "3.500" },
  ],
};

const FALLBACK_RANK_TABLES = {
  Weekly: [
    { badge: "/dashboard-assets/img/first.svg", height: 48, name: "Adeel Raza", coins: 2343, prize: 1500 },
    { badge: "/dashboard-assets/img/second.svg", height: 48, name: "Mia Chen", coins: 1998, prize: 1200 },
    { badge: "/dashboard-assets/img/third.svg", height: 48, name: "Ryan Okafor", coins: 1650, prize: 900 },
    { rank: 4, name: "Jasmine Lowe", coins: 1120, prize: 500 },
  ],
  Monthly: [
    { badge: "/dashboard-assets/img/first.svg", height: 48, name: "Wayne Gordon", coins: 9840, prize: 4000 },
    { badge: "/dashboard-assets/img/second.svg", height: 48, name: "Keisha Nolan", coins: 8120, prize: 3000 },
    { badge: "/dashboard-assets/img/third.svg", height: 48, name: "Devon Parker", coins: 6440, prize: 1800 },
    { rank: 4, name: "Mia Hendricks", coins: 5590, prize: 1200 },
  ],
  Affiliate: [
    { badge: "/dashboard-assets/img/first.svg", height: 48, name: "Jasmine Lowe", coins: 2478, prize: 1000 },
    { badge: "/dashboard-assets/img/second.svg", height: 48, name: "Devon Parker", coins: 1832, prize: 500 },
    { badge: "/dashboard-assets/img/third.svg", height: 48, name: "Ryan Okafor", coins: 1604, prize: 350 },
    { rank: 4, name: "Adeel Raza", coins: 980, prize: 150 },
  ],
};

function Podium({ members }) {
  return (
    <div className="pt-5">
      <div className="d-flex member-cards pt-md-0 pt-4 mt-5">
        {members.map((m, i) => (
          <div className={`member-card ${m.place}`} key={i}>
            <img src={m.crown} alt="Crown" className="crown-img" />
            <span className="mc-standing">
              <img src={m.badge} alt="Crown" height={m.badgeHeight} className="place-badge" />
            </span>
            <div className="position-static">
              <a href="javascript:void(0)" onClick={() => { openModal('user') }}>
                {m.topCrown && <img src="https://dolares.app/assets/img/crown.png" alt="Crown" className="mc-crown" />}
                <img src={m.avatar} className="mc-img cursor-pointer" />
              </a>
            </div>
            <p className="fw-medium mb-2 pb-1 mc-name f-20p mt-4 cursor-pointer" onClick={() => { openModal('user') }}>
              {m.name}
              <img src="/dashboard-assets/img/redirect-icon.svg" alt="Redirect" height="16" className="ms-1" />
            </p>
            <p className="mc-points mb-3 fw-bold">{m.points}</p>
            <div className="mc-prize f-12p fw-bold">
              <span className="mcp-text">
                <svg width="15" className="me-1" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.374853 3.90369C0.151497 3.98703 -0.00185204 4.19372 -0.00185204 4.43374V5.58053C-0.00185204 9.66429 2.09837 13.4547 5.56206 15.6182L6.84219 16.415C7.02555 16.5283 7.25557 16.5283 7.43559 16.415L8.71572 15.6182C12.1861 13.4547 14.293 9.66429 14.293 5.58053V4.43374C14.293 4.19372 14.1396 3.98703 13.9163 3.90369C12.3494 3.31696 11.106 2.37353 10.3992 0.840035C10.3059 0.636681 10.1092 0.5 9.88584 0.5H4.3986C4.17525 0.5 3.97856 0.636681 3.88522 0.840035C3.18515 2.37686 1.94168 3.31696 0.374853 3.90369Z" fill={m.prizeColor} fill-opacity="0.2"></path>
                  <path d="M5.52297 9.95C6.16297 9.39667 6.6663 8.94333 7.03297 8.59C7.4063 8.23 7.7163 7.85667 7.96297 7.47C8.20964 7.08333 8.33297 6.69667 8.33297 6.31C8.33297 5.91 8.2363 5.59667 8.04297 5.37C7.8563 5.14333 7.55964 5.03 7.15297 5.03C6.75964 5.03 6.45297 5.15667 6.23297 5.41C6.01964 5.65667 5.9063 5.99 5.89297 6.41H4.79297C4.81297 5.65 5.03964 5.07 5.47297 4.67C5.91297 4.26333 6.46964 4.06 7.14297 4.06C7.86964 4.06 8.4363 4.26 8.84297 4.66C9.2563 5.06 9.46297 5.59333 9.46297 6.26C9.46297 6.74 9.33964 7.20333 9.09297 7.65C8.85297 8.09 8.56297 8.48667 8.22297 8.84C7.88964 9.18667 7.46297 9.59 6.94297 10.05L6.49297 10.45H9.66297V11.4H4.80297V10.57L5.52297 9.95Z" fill="white"></path>
                </svg>
                Prize
              </span>
              <img src="https://dolares.app/assets/img/coin (1).png" height="10" alt="coin" className="mcp-img" />
              <span className="mcp">{m.prize}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RankTable({ rows }) {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="site-card site-card-lighter py-md-4 px-2 py-3">
        <div className="px-2">
          <div className="table-responsive">
            <table className="table table-separated table-borderless table-referrals">
              <thead>
                <tr>
                  <th><span className="ps-lg-5">Rank</span></th>
                  <th><span>User</span></th>
                  <th>Coins</th>
                  <th><span className="pe-lg-5">Prize</span></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td>
                      <div className="fw-semibold text-white f-16p ps-lg-5 d-flex align-items-center justify-content-center badge-position">
                        {row.badge ? (
                          <img src={row.badge} alt="Place" height={row.height} className="standing-icon" />
                        ) : (
                          <span className="simple-position"><span>{row.rank}</span></span>
                        )}
                      </div>
                    </td>
                    <td>
                      <a href="#" onClick={() => { openModal('user') }} className="tar-user d-flex align-items-center gap-2 fw-semibold f-16p">
                        <img src="/dashboard-assets/img/person.png" alt="Person" className="d-md-inline-block d-none rounded-circle" height="35" width="35" />
                        <span>{row.name}</span>
                        <svg width="12" height="12" className="d-md-inline-block d-none" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.32 12H3.48C2.4 12 1.8 12 1.32 11.76C0.84 11.52 0.48 11.16 0.3 10.74C0 10.2 0 9.6 0 8.52V4.68C0 3.6 5.36442e-08 3 0.24 2.52C0.48 2.04 0.84 1.68 1.26 1.5C1.8 1.2 2.4 1.2 3.48 1.2H4.8C5.16 1.2 5.4 1.44 5.4 1.8C5.4 2.16 5.16 2.4 4.8 2.4H3.48C2.58 2.4 2.1 2.4 1.86 2.52C1.62 2.64 1.44 2.82 1.32 3.06C1.2 3.3 1.2 3.78 1.2 4.68V8.52C1.2 9.42 1.2 9.9 1.32 10.14C1.44 10.38 1.62 10.56 1.86 10.68C2.1 10.8 2.58 10.8 3.48 10.8H7.32C8.22 10.8 8.7 10.8 8.94 10.68C9.18 10.56 9.36 10.38 9.48 10.14C9.6 9.9 9.6 9.42 9.6 8.52V7.2C9.6 6.84 9.84 6.6 10.2 6.6C10.56 6.6 10.8 6.84 10.8 7.2V8.52C10.8 9.6 10.8 10.2 10.56 10.68C10.32 11.16 9.96 11.52 9.54 11.7C9 12 8.4 12 7.32 12ZM6.6 6C6.42 6 6.3 5.94 6.18 5.82C5.94 5.58 5.94 5.22 6.18 4.98L9.96 1.2H7.8C7.44 1.2 7.2 0.96 7.2 0.6C7.2 0.24 7.44 0 7.8 0H11.4C11.46 0 11.58 -5.81145e-08 11.64 0.0599999C11.7 0.0599999 11.76 0.12 11.82 0.18C11.88 0.24 11.94 0.3 11.94 0.36C12 0.42 12 0.54 12 0.6V4.2C12 4.56 11.76 4.8 11.4 4.8C11.04 4.8 10.8 4.56 10.8 4.2V2.04L7.02 5.82C6.9 5.94 6.78 6 6.6 6Z" fill="#6B6A74"></path>
                        </svg>
                      </a>
                    </td>
                    <td>
                      <div className="text-white fw-semibold f-16p"><span>{row.coins}</span></div>
                    </td>
                    <td>
                      <div className="tar-earning d-flex pe-lg-5 align-items-center gap-1 fw-semibold f-16p text-center">
                        <img src="/dashboard-assets/img/coin.svg" alt="Coin" height="16" />
                        <span className="text-white">{row.prize}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function EarnedPills() {
  return (
    <div className="py-5 d-flex justify-content-center gap-3 flex-wrap">
      <div className="d-flex lb-pill py-3 px-5 rounded-pill gap-1 align-items-center f-16p fw-medium">
        <span className="text-white">You earned</span>
        <img src="/dashboard-assets/img/coin (1).png" height="20" alt="coin" className="mcp-img" />
        <span className="fw-semibold f-16p text-white">7.500</span>
        <span className="text-white">Today</span>
      </div>
      <div className="d-flex lb-pill py-3 px-5 rounded-pill gap-1 align-items-center f-16p fw-medium">
        <span className="text-white">Ends in :</span>
        <span className="d-flex align-items-center gap-1">
          <span className="timer-day text-white">28d</span>
          <span className="timer-day text-white">:</span>
          <span className="timer-day text-white">8h</span>
          <span className="timer-day text-white">:</span>
          <span className="timer-day text-white">54m</span>
          <span className="timer-day text-white">:</span>
          <span className="timer-day text-white">43s</span>
        </span>
      </div>
    </div>
  );
}

export default function Page() {
  const [rankTables, setRankTables] = useState(FALLBACK_RANK_TABLES);

  useEffect(() => {
    fetch("/api/dashboard/leaderboard")
      .then((res) => res.json())
      .then((data) => {
        if (data.leaderboard) setRankTables(data.leaderboard);
      })
      .catch(() => {});
  }, []);

  return (
    <Layout>
      <section className="affiliate-sec py-5">
        <div className="container pe-xxl-5">
          <div className="nav-tabs-cont px-md-4 px-0 mb-md-4 mb-2">
            <h3 className="mb-0 f-26p fw-semibold poppins text-white">Leaderbord</h3>
            <ul className="nav nav-pills mb-0" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="pills-tab-2" data-bs-toggle="pill" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="true">Weekly</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-tab-1" data-bs-toggle="pill" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="false">Monthly</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-tab-3" data-bs-toggle="pill" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Affiliate</a>
              </li>
            </ul>
          </div>
          <div className="tab-content py-md-4 py-2" id="pills-tabContent">
            <div className="tab-pane fade show active" id="tab-2" role="tabpanel" aria-labelledby="pills-tab-2">
              <div className="leaderboard-standings">
                <div className="position-relative">
                  <button className="btn btn-dark d-flex align-items-center toggle-btn ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={() => { toggleIcon(this) }}>
                    <i className="fa fa-chevron-down"></i>
                  </button>
                  <div className="mt-3">
                    <div className="vertical-carousel">
                      <div>
                        <div className="carousel-content text-start">
                          <h3 className="text-white fw-semibold d-flex gap-1 align-items-center f-20p mb-0">
                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_2_5638)">
                                <path d="M21.2603 8.89935L20.4158 7.51404L19.8015 9.01566C19.2502 10.3634 18.4605 11.1363 17.6347 11.1363C16.0617 11.1364 15.3328 9.13759 15.1457 7.85951C14.8765 6.01925 15.3592 4.13297 16.1612 2.48187C16.1613 2.48171 17.0306 0.691895 17.0306 0.691895L15.1527 1.34998C11.7985 2.52538 8.98748 4.8203 7.02343 7.98663C5.10786 11.0749 4.09954 14.8207 4.10747 18.8175C4.10747 21.8543 5.18333 24.4134 7.21865 26.2179C9.01426 27.8098 11.4226 28.6866 14 28.6866C16.5775 28.6866 18.9858 27.8098 20.7814 26.2179C22.8167 24.4134 23.8926 21.8543 23.8926 18.8175C23.8926 14.8399 23.1299 11.9664 21.2603 8.89935Z" fill="#FF4F19"></path>
                                <path d="M7.02343 7.9867C5.10786 11.075 4.09954 14.8208 4.10747 18.8176C4.10747 21.8544 5.18333 24.4135 7.21865 26.2179C9.01426 27.8099 11.4226 28.6867 14 28.6867V1.80811C11.1535 3.07422 8.75793 5.19032 7.02343 7.9867Z" fill="#FF7800"></path>
                                <path d="M14.4931 13.37L14.0295 13.052L13.5658 13.37C13.4109 13.4762 9.77148 16.0101 9.77148 19.3125C9.77148 22.615 13.4109 25.1489 13.5658 25.2551L14.0295 25.573L14.4931 25.2551C14.6481 25.1489 18.2875 22.615 18.2875 19.3125C18.2875 16.0101 14.6481 13.4762 14.4931 13.37Z" fill="#00CA3F"></path>
                                <path d="M14.0295 13.052L13.5658 13.37C13.4109 13.4762 9.77148 16.0101 9.77148 19.3125C9.77148 22.615 13.4109 25.1489 13.5658 25.2551L14.0295 25.573V13.052Z" fill="#6CEA66"></path>
                                <path d="M14.8496 19.4558H13.21V28.692H14.8496V19.4558Z" fill="#007842"></path>
                                <path d="M14.0298 19.4558H13.21V28.692H14.0298V19.4558Z" fill="#009A2D"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_2_5638">
                                  <rect width="28" height="28" fill="white" transform="translate(0 0.691895)"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            <span>Info Details</span>
                          </h3>
                          <p className="mb-0 text-white page-desc collapse lato pt-2" id="collapseExample">
                            Lorem ipsum dolor sit amet, adipisicing elit, seiutempor incididunt ut Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, adipisicing elit, seiutempor incididunt ut Lorem ipsum dolor sit amet,
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Podium members={PODIUMS.Weekly} />
              </div>
              <EarnedPills />
              <RankTable rows={rankTables.Weekly} />
            </div>
            <div className="tab-pane fade" id="tab-1" role="tabpanel" aria-labelledby="pills-tab-1">
              <div className="leaderboard-standings">
                <Podium members={PODIUMS.Monthly} />
              </div>
              <EarnedPills />
              <RankTable rows={rankTables.Monthly} />
            </div>
            <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="pills-tab-3">
              <div className="leaderboard-standings">
                <Podium members={PODIUMS.Affiliate} />
              </div>
              <EarnedPills />
              <RankTable rows={rankTables.Affiliate} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
