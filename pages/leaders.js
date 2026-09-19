import Layout from "../components/Layout";

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
            <div className="d-flex member-cards my-md-5 my-4 py-md-0 py-4">
              <div className="member-card mc-2nd">
                <span className="mc-standing">
                  2nd
                </span>
                <div className="position-relative">
                  <img src="/assets/img/2.png" alt="Member img" className="mc-img cursor-pointer" onClick={() => { openModal('user') }} />
                </div>
                <p className="fw-bold mb-2 pb-1 mc-name f-12p cursor-pointer" onClick={() => { openModal('user') }}>
                  Hello
                </p>
                <p className="mc-points mb-3 fw-bold">
                  14,667
                </p>
                <div className="mc-prize f-12p fw-bold">
                  <span className="mcp-text">
                    Prize
                  </span>
                  <img src="/assets/img/coin (1).png" height="10" alt="coin" className="mcp-img" />
                  <span className="mcp">
                    10,222
                  </span>
                </div>
              </div>
              <div className="member-card mc-1st">
                <span className="mc-standing">
                  1st
                </span>
                <div className="position-relative">
                  <img src="/assets/img/crown.png" alt="Crown" className="mc-crown" />
                  <img src="/assets/img/2.png" alt="Member img" className="mc-img cursor-pointer" onClick={() => { openModal('user') }} />
                </div>
                <p className="fw-bold mb-2 pb-1 mc-name f-12p cursor-pointer" onClick={() => { openModal('user') }}>
                  Hello
                </p>
                <p className="mc-points mb-3 fw-bold">
                  14,667
                </p>
                <div className="mc-prize f-12p fw-bold">
                  <span className="mcp-text">
                    Prize
                  </span>
                  <img src="/assets/img/coin (1).png" height="10" alt="coin" className="mcp-img" />
                  <span className="mcp">
                    10,222
                  </span>
                </div>
              </div>
              <div className="member-card mc-3rd">
                <span className="mc-standing">
                  3rd
                </span>
                <div className="position-relative">
                  <img src="/assets/img/2.png" alt="Member img" className="mc-img cursor-pointer" onClick={() => { openModal('user') }} />
                </div>
                <p className="fw-bold mb-2 pb-1 mc-name f-12p cursor-pointer" onClick={() => { openModal('user') }}>
                  Hello
                </p>
                <p className="mc-points mb-3 fw-bold">
                  14,667
                </p>
                <div className="mc-prize f-12p fw-bold">
                  <span className="mcp-text">
                    Prize
                  </span>
                  <img src="/assets/img/coin (1).png" height="10" alt="coin" className="mcp-img" />
                  <span className="mcp">
                    10,222
                  </span>
                </div>
              </div>
            </div>
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
                  <tr>
                    <td onClick={() => { openModal('user') }}>
                      <span className="table-count">
                        <span>
                          4
                        </span>
                      </span>
                    </td>
                    <td onClick={() => { openModal('user') }}>
                      Username
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Coins
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Prize
                    </td>
                  </tr>
                  <tr>
                    <td onClick={() => { openModal('user') }}>
                      <span className="table-count">
                        <span>
                          4
                        </span>
                      </span>
                    </td>
                    <td onClick={() => { openModal('user') }}>
                      Username
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Coins
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Prize
                    </td>
                  </tr>
                  <tr>
                    <td onClick={() => { openModal('user') }}>
                      <span className="table-count">
                        <span>
                          4
                        </span>
                      </span>
                    </td>
                    <td onClick={() => { openModal('user') }}>
                      Username
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Coins
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Prize
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-monthly" role="tabpanel" aria-labelledby="pills-monthly-tab">
            <div className="d-flex member-cards my-md-5 my-4 py-md-0 py-4">
              <div className="member-card mc-2nd">
                <span className="mc-standing">
                  2nd
                </span>
                <div className="position-relative">
                  <img src="/assets/img/9.png" alt="Member img" className="mc-img cursor-pointer" onClick={() => { openModal('user') }} />
                </div>
                <p className="fw-bold mb-2 pb-1 mc-name f-12p cursor-pointer" onClick={() => { openModal('user') }}>
                  Hello
                </p>
                <p className="mc-points mb-3 fw-bold">
                  14,667
                </p>
                <div className="mc-prize f-12p fw-bold">
                  <span className="mcp-text">
                    Prize
                  </span>
                  <img src="/assets/img/coin (1).png" height="10" alt="coin" className="mcp-img" />
                  <span className="mcp">
                    10,222
                  </span>
                </div>
              </div>
              <div className="member-card mc-1st">
                <span className="mc-standing">
                  1st
                </span>
                <div className="position-relative">
                  <img src="/assets/img/crown.png" alt="Crown" className="mc-crown" />
                  <img src="/assets/img/9.png" alt="Member img" className="mc-img cursor-pointer" onClick={() => { openModal('user') }} />
                </div>
                <p className="fw-bold mb-2 pb-1 mc-name f-12p cursor-pointer" onClick={() => { openModal('user') }}>
                  Hello
                </p>
                <p className="mc-points mb-3 fw-bold">
                  14,667
                </p>
                <div className="mc-prize f-12p fw-bold">
                  <span className="mcp-text">
                    Prize
                  </span>
                  <img src="/assets/img/coin (1).png" height="10" alt="coin" className="mcp-img" />
                  <span className="mcp">
                    10,222
                  </span>
                </div>
              </div>
              <div className="member-card mc-3rd">
                <span className="mc-standing">
                  3rd
                </span>
                <div className="position-relative">
                  <img src="/assets/img/9.png" alt="Member img" className="mc-img cursor-pointer" onClick={() => { openModal('user') }} />
                </div>
                <p className="fw-bold mb-2 pb-1 mc-name f-12p cursor-pointer" onClick={() => { openModal('user') }}>
                  Hello
                </p>
                <p className="mc-points mb-3 fw-bold">
                  14,667
                </p>
                <div className="mc-prize f-12p fw-bold">
                  <span className="mcp-text">
                    Prize
                  </span>
                  <img src="/assets/img/coin (1).png" height="10" alt="coin" className="mcp-img" />
                  <span className="mcp">
                    10,222
                  </span>
                </div>
              </div>
            </div>
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
                  <tr>
                    <td onClick={() => { openModal('user') }}>
                      <span className="table-count">
                        <span>
                          4
                        </span>
                      </span>
                    </td>
                    <td onClick={() => { openModal('user') }}>
                      Username
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Coins
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Prize
                    </td>
                  </tr>
                  <tr>
                    <td onClick={() => { openModal('user') }}>
                      <span className="table-count">
                        <span>
                          4
                        </span>
                      </span>
                    </td>
                    <td onClick={() => { openModal('user') }}>
                      Username
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Coins
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Prize
                    </td>
                  </tr>
                  <tr>
                    <td onClick={() => { openModal('user') }}>
                      <span className="table-count">
                        <span>
                          4
                        </span>
                      </span>
                    </td>
                    <td onClick={() => { openModal('user') }}>
                      Username
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Coins
                    </td>
                    <td onClick={() => { openModal('user') }} className="tb-blue">
                      Prize
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
