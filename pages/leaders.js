import Layout from "../components/Layout";

const DAILY_PODIUM = [
  { place: "2nd", name: "Jasmine_R", points: 12480, prize: 8500, avatar: "/assets/img/2.png" },
  { place: "1st", name: "Marcus_T", points: 15920, prize: 12000, avatar: "/assets/img/9.png", crown: true },
  { place: "3rd", name: "Devon_K", points: 10230, prize: 6000, avatar: "/assets/img/403197.jpg" },
];

const DAILY_TABLE = [
  { rank: 4, username: "SarahW", coins: 9840, prize: 4200 },
  { rank: 5, username: "TomLinson", coins: 8760, prize: 3600 },
  { rank: 6, username: "NinaP", coins: 7420, prize: 3000 },
];

const MONTHLY_PODIUM = [
  { place: "2nd", name: "Elena_V", points: 187650, prize: 55000, avatar: "/assets/img/9.png" },
  { place: "1st", name: "Kai_Nakamura", points: 214300, prize: 80000, avatar: "/assets/img/2.png", crown: true },
  { place: "3rd", name: "Omar_Idris", points: 165900, prize: 42000, avatar: "/assets/img/403197.jpg" },
];

const MONTHLY_TABLE = [
  { rank: 4, username: "LucyChen", coins: 142300, prize: 28000 },
  { rank: 5, username: "RyanB", coins: 128700, prize: 21000 },
  { rank: 6, username: "AishaK", coins: 115400, prize: 15000 },
];

function Podium({ members }) {
  return (
    <div className="d-flex member-cards my-md-5 my-4 py-md-0 py-4">
      {members.map((member) => (
        <div className={`member-card mc-${member.place === "1st" ? "1st" : member.place === "2nd" ? "2nd" : "3rd"}`} key={member.place}>
          <span className="mc-standing">
            {member.place}
          </span>
          <div className="position-relative">
            {member.crown && <img src="/assets/img/crown.png" alt="Crown" className="mc-crown" />}
            <img src={member.avatar} alt="Member img" className="mc-img cursor-pointer" onClick={() => { openModal('user') }} />
          </div>
          <p className="fw-bold mb-2 pb-1 mc-name f-12p cursor-pointer" onClick={() => { openModal('user') }}>
            {member.name}
          </p>
          <p className="mc-points mb-3 fw-bold">
            {member.points.toLocaleString()}
          </p>
          <div className="mc-prize f-12p fw-bold">
            <span className="mcp-text">
              Prize
            </span>
            <img src="/assets/img/coin (1).png" height="10" alt="coin" className="mcp-img" />
            <span className="mcp">
              {member.prize.toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function LeaderboardTable({ rows }) {
  return (
    <div className="table-responsive mb-4 pb-4">
      <table className="table row-separated">
        <thead className="bg-transparent">
          <tr>
            <td>
              Rank
            </td>
            <td>
              Username
            </td>
            <td>
              Coins
            </td>
            <td>
              Prize
            </td>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.rank}>
              <td onClick={() => { openModal('user') }}>
                <span className="table-count">
                  <span>
                    {row.rank}
                  </span>
                </span>
              </td>
              <td onClick={() => { openModal('user') }}>
                {row.username}
              </td>
              <td onClick={() => { openModal('user') }} className="tb-blue">
                {row.coins.toLocaleString()}
              </td>
              <td onClick={() => { openModal('user') }} className="tb-blue">
                {row.prize.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <Layout active={"leaders"} showPayModal>
  <main>
    <section className="py-5 page-sec roboto">
      <div className="container">
        <div className="mb-0 pb-3 d-flex justify-content-between flex-wrap">
          <h2 className="page-title mb-0 fw-medium pb-4">
            <span id="lb-range">
              Daily
            </span>
            Leaderbord
          </h2>
          <ul className="nav nav-pills mb-3 lb-tabs rounded-lg ms-auto" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link lb-tab-btn active" id="pills-daily-tab" data-bs-toggle="pill" data-bs-target="#pills-daily" type="button" role="tab" aria-controls="pills-daily" aria-selected="true">
                Daily
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link lb-tab-btn" id="pills-monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly" aria-selected="false">
                Monthly
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-daily" role="tabpanel" aria-labelledby="pills-daily-tab">
            <Podium members={DAILY_PODIUM} />
            <div className="d-flex align-items-center gap-4 ep-cont justify-content-center mb-4">
              <div className="earn-points fw-bold">
                <span>
                  You earned
                </span>
                <img src="/assets/img/coin (1).png" height="12" alt="Coin" className="ms-2" />
                <span>
                  0
                </span>
                <span className="ms-2 ep-blue">
                  today
                </span>
              </div>
              <div className="d-flex align-items-center gap-1 justify-content-center">
                <span className="ep-blue">
                  Ends in
                </span>
                <span>
                  2d 14h 18m 44s
                </span>
              </div>
            </div>
            <LeaderboardTable rows={DAILY_TABLE} />
          </div>
          <div className="tab-pane fade" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">
            <Podium members={MONTHLY_PODIUM} />
            <div className="d-flex align-items-center gap-4 ep-cont justify-content-center mb-4">
              <div className="earn-points fw-bold">
                <span>
                  You earned
                </span>
                <img src="/assets/img/coin (1).png" height="12" alt="Coin" className="ms-2" />
                <span>
                  0
                </span>
                <span className="ms-2 ep-blue">
                  today
                </span>
              </div>
              <div className="d-flex align-items-center gap-1 justify-content-center">
                <span className="ep-blue">
                  Ends in
                </span>
                <span>
                  2d 14h 18m 44s
                </span>
              </div>
            </div>
            <LeaderboardTable rows={MONTHLY_TABLE} />
          </div>
        </div>
      </div>
    </section>
  </main>
    </Layout>
  );
}
