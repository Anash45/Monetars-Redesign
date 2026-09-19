export default function ChatWidget() {
  return (
  <aside className="chat-widget inter" id="chat-widget">
    <div className="hidden-part hp-mobile d-lg-none d-block" style={{display: 'block'}}>
      <div className="d-flex gap-2 align-items-center justify-content-around p-3">
        <div className="position-relative country-slct">
          <img src="/dashboard-assets/img/flags/de.png" alt="Sort Icon" className="sb-inp-icon" />
          <select className="form-select sb-inp-1 popularity-select">
            <option selected="Germany">
              Germany
            </option>
            <option value="International">
              International
            </option>
          </select>
        </div>
        <div className="help-btn" onClick={() => { switchTab('help-tab') }}>
          <img src="/dashboard-assets/img/help.svg" alt="Help" />
        </div>
      </div>
    </div>
    <div className="flex-grow-1 overflow-auto cw-tabs-cont">
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="messages-tab" role="tabpanel" aria-labelledby="messages-tab">
          <div className="d-flex gap-2 f-16p overflow-hidden align-items-center mb-1 chat-msg">
            <div className="d-flex flex-column lh-1 gap-2">
              <div className="d-flex align-items-center gap-2">
                <span className="f-12p cw-date poppins fw-medium">
                  10:30
                </span>
                <span className="cursor-pointer inter d-flex align-items-center cw-name gap-1">
                  <span>
                    Rani Loxe
                  </span>
                  <img src="/dashboard-assets/img/crown.svg" alt="Crown" style={{height: '1rem'}} />
                </span>
              </div>
              <span className="cw-content f-14p lato">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-16p overflow-hidden align-items-center mb-1 chat-msg">
            <div className="d-flex flex-column lh-1 gap-2">
              <div className="d-flex align-items-center gap-2">
                <span className="f-12p cw-date poppins fw-medium">
                  10:30
                </span>
                <span className="cursor-pointer inter d-flex align-items-center cw-name gap-1">
                  <span>
                    Rani Loxe
                  </span>
                  <img src="/dashboard-assets/img/crown.svg" alt="Crown" style={{height: '1rem'}} />
                </span>
              </div>
              <span className="cw-content f-14p lato">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-16p overflow-hidden align-items-center mb-1 chat-msg">
            <div className="d-flex flex-column lh-1 gap-2">
              <div className="d-flex align-items-center gap-2">
                <span className="f-12p cw-date poppins fw-medium">
                  10:30
                </span>
                <span className="cursor-pointer inter d-flex align-items-center cw-name gap-1">
                  <span>
                    Rani Loxe
                  </span>
                  <img src="/dashboard-assets/img/crown.svg" alt="Crown" style={{height: '1rem'}} />
                </span>
              </div>
              <span className="cw-content f-14p lato">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-16p overflow-hidden align-items-center mb-1 chat-msg">
            <div className="d-flex flex-column lh-1 gap-2">
              <div className="d-flex align-items-center gap-2">
                <span className="f-12p cw-date poppins fw-medium">
                  10:30
                </span>
                <span className="cursor-pointer inter d-flex align-items-center cw-name gap-1">
                  <span>
                    Rani Loxe
                  </span>
                  <img src="/dashboard-assets/img/crown.svg" alt="Crown" style={{height: '1rem'}} />
                </span>
              </div>
              <span className="cw-content f-14p lato">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-16p overflow-hidden align-items-center mb-1 chat-msg">
            <div className="d-flex flex-column lh-1 gap-2">
              <div className="d-flex align-items-center gap-2">
                <span className="f-12p cw-date poppins fw-medium">
                  10:30
                </span>
                <span className="cursor-pointer inter d-flex align-items-center cw-name gap-1">
                  <span>
                    Rani Loxe
                  </span>
                  <img src="/dashboard-assets/img/crown.svg" alt="Crown" style={{height: '1rem'}} />
                </span>
              </div>
              <span className="cw-content f-14p lato">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-16p overflow-hidden align-items-center mb-1 chat-msg">
            <div className="d-flex flex-column lh-1 gap-2">
              <div className="d-flex align-items-center gap-2">
                <span className="f-12p cw-date poppins fw-medium">
                  10:30
                </span>
                <span className="cursor-pointer inter d-flex align-items-center cw-name gap-1">
                  <span>
                    Rani Loxe
                  </span>
                  <img src="/dashboard-assets/img/crown.svg" alt="Crown" style={{height: '1rem'}} />
                </span>
              </div>
              <span className="cw-content f-14p lato">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 f-16p overflow-hidden align-items-center mb-1 chat-msg">
            <div className="d-flex flex-column lh-1 gap-2">
              <div className="d-flex align-items-center gap-2">
                <span className="f-12p cw-date poppins fw-medium">
                  10:30
                </span>
                <span className="cursor-pointer inter d-flex align-items-center cw-name gap-1">
                  <span>
                    Rani Loxe
                  </span>
                  <img src="/dashboard-assets/img/crown.svg" alt="Crown" style={{height: '1rem'}} />
                </span>
              </div>
              <span className="cw-content f-14p lato">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              </span>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="help-tab" role="tabpanel" aria-labelledby="pills-help">
          <div className="d-flex gap-2 f-16p overflow-hidden align-items-center mb-1">
            <div className="d-flex flex-column lh-1 gap-2">
              <div className="d-flex align-items-center gap-2">
                <span className="cursor-pointer inter d-flex align-items-center cw-name gap-1 fw-bold">
                  <span>
                    Dolares
                  </span>
                </span>
              </div>
              <span className="cw-content f-14p lato">
                If you have any questions or problems regarding your participation, our site or suggestions for improvement, you can contact us at any time.
                <br />
                <br />
                We will help you with your questions or problem as soon as possible.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cw-foot">
      <div className="position-relative">
        <input type="text" className="form-control lato fw-medium" placeholder="Say Something" />
        <button className="btn text-primary cw-send text-16p inter">
          Send
        </button>
      </div>
      <div className="d-flex align-items-center cw-online fw-medium lato text-12p gap-2 mb-0 mt-2 ps-2">
        <span className="online-dot"></span>
        <span>
          367 Online
        </span>
      </div>
    </div>
  </aside>  );
}
