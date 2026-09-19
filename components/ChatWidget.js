export default function ChatWidget() {
  return (
  <aside className="chat-widget roboto">
    <div className="chat-opener" onClick={() => { chatWindow() }}>
      <i className="fa fa-arrow-left co-left"></i>
      <i className="fa fa-arrow-right co-right"></i>
    </div>
    <div className="py-1 px-2 cw-head">
      <ul className="nav nav-pills nav-justified cw-nav" id="pills-tabCW" role="tablist">
        <li className="nav-item flex-grow-1" role="presentation">
          <div className="dropdown">
            <button className="btn nav-link active" id="pills-chat-tab" data-bs-toggle="pill" data-bs-target="#pills-chat" type="button" role="tab" aria-controls="pills-chat" aria-selected="true">
              <div className="d-flex align-items-center justify-content-center gap-2 f-14p">
                <i className="fa fa-globe"></i>
                <span>
                  General
                </span>
                <i className="fa fa-chevron-down"></i>
              </div>
            </button>
            <ul className="dropdown-menu cw-dropdown p-2 f-12p" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                  <i className="fa fa-globe"></i>
                  <span>
                    General (70)
                  </span>
                </a>
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                  <i className="fa-regular fa-star"></i>
                  <span>
                    VIP (170)
                  </span>
                </a>
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                  <img src="/assets/img/germany.png" alt="Flag" width="17" />
                  <span>
                    Germany (170)
                  </span>
                </a>
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                  <img src="/assets/img/france.png" alt="Flag" width="17" />
                  <span>
                    France (170)
                  </span>
                </a>
              </li>
              <li>
                <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                  <img src="/assets/img/italy.png" alt="Flag" width="17" />
                  <span>
                    Italy (170)
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item flex-grow-1 ms-2" role="presentation">
          <button className="btn nav-link" id="pills-support-tab" data-bs-toggle="pill" data-bs-target="#pills-support" type="button" role="tab" aria-controls="pills-support" aria-selected="false">
            <div className="d-flex align-items-center justify-content-center gap-2 f-14p">
              <span>
                Support
              </span>
            </div>
          </button>
        </li>
      </ul>
    </div>
    <div className="p-2 flex-grow-1 overflow-auto">
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
          <div className="d-flex gap-2 f-14p overflow-hidden align-items-center p-2 mb-1 chat-msg">
            <img src="/assets/img/2.png" alt="DP" className="img-circle me-1 cursor-pointer" height="40" onClick={() => { openModal('user') }} />
            <div className="d-flex flex-column lh-1 gap-1">
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold cursor-pointer" onClick={() => { openModal('user') }}>
                  Rani Loxe
                </span>
                <span className="f-10p cw-badge">
                  MOD
                </span>
                <span className="f-12p cw-date">
                  10:30
                </span>
              </div>
              <span className="cw-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-14p overflow-hidden align-items-center p-2 mb-1 chat-msg">
            <img src="/assets/img/2.png" alt="DP" className="img-circle me-1 cursor-pointer" height="40" onClick={() => { openModal('user') }} />
            <div className="d-flex flex-column lh-1 gap-1">
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold cursor-pointer" onClick={() => { openModal('user') }}>
                  Rani Loxe
                </span>
                <span className="f-10p cw-badge">
                  MOD
                </span>
                <span className="f-12p cw-date">
                  10:30
                </span>
              </div>
              <span className="cw-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-14p overflow-hidden align-items-center p-2 mb-1 chat-msg">
            <img src="/assets/img/2.png" alt="DP" className="img-circle me-1 cursor-pointer" height="40" onClick={() => { openModal('user') }} />
            <div className="d-flex flex-column lh-1 gap-1">
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold cursor-pointer" onClick={() => { openModal('user') }}>
                  Rani Loxe
                </span>
                <span className="f-12p cw-date">
                  10:30
                </span>
              </div>
              <span className="cw-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-14p overflow-hidden align-items-center p-2 mb-1 chat-msg">
            <img src="/assets/img/2.png" alt="DP" className="img-circle me-1 cursor-pointer" height="40" onClick={() => { openModal('user') }} />
            <div className="d-flex flex-column lh-1 gap-1">
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold cursor-pointer" onClick={() => { openModal('user') }}>
                  Rani Loxe
                </span>
                <span className="f-12p cw-date">
                  10:30
                </span>
              </div>
              <span className="cw-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-14p overflow-hidden align-items-center p-2 mb-1 chat-msg">
            <img src="/assets/img/2.png" alt="DP" className="img-circle me-1 cursor-pointer" height="40" onClick={() => { openModal('user') }} />
            <div className="d-flex flex-column lh-1 gap-1">
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold cursor-pointer" onClick={() => { openModal('user') }}>
                  Rani Loxe
                </span>
                <span className="f-12p cw-date">
                  10:30
                </span>
              </div>
              <span className="cw-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-14p overflow-hidden align-items-center p-2 mb-1 chat-msg">
            <img src="/assets/img/2.png" alt="DP" className="img-circle me-1 cursor-pointer" height="40" onClick={() => { openModal('user') }} />
            <div className="d-flex flex-column lh-1 gap-1">
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold cursor-pointer" onClick={() => { openModal('user') }}>
                  Rani Loxe
                </span>
                <span className="f-12p cw-date">
                  10:30
                </span>
              </div>
              <span className="cw-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-14p overflow-hidden align-items-center p-2 mb-1 chat-msg">
            <img src="/assets/img/2.png" alt="DP" className="img-circle me-1 cursor-pointer" height="40" onClick={() => { openModal('user') }} />
            <div className="d-flex flex-column lh-1 gap-1">
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold cursor-pointer" onClick={() => { openModal('user') }}>
                  Rani Loxe
                </span>
                <span className="f-10p cw-badge">
                  MOD
                </span>
                <span className="f-12p cw-date">
                  10:30
                </span>
              </div>
              <span className="cw-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-support" role="tabpanel" aria-labelledby="pills-support-tab">
          <div className="p-2">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="fw-medium f-16p">
                @MonetarsUpoort
              </span>
              <span className="f-14p">
                09:23PM
              </span>
            </div>
            <p className="f-14p cws-text">
              Send us a support message at any time and we'll get back to you as soon as possible!
              <br />
              <br />
              Tip: If you are missing coins, please check the FAQ section before contacting support.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="p-2 cw-foot">
      <div className="px-1 position-relative">
        <input type="text" className="form-control" placeholder="Say Something" />
        <i className="fa-regular fa-face-smile"></i>
      </div>
    </div>
  </aside>  );
}
