export default function Header({ variant = "guest", active = null }) {
  return (
  <header>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand mr-4 d-lg-inline-block d-none" href="/">
          <img src="/assets/img/Monester-logo.png" alt="Monster Logo" className="show-light" style={{width: '180px'}} />
          <img src="/assets/img/Logo-light.png" alt="Monster Logo" className="show-dark" style={{width: '180px'}} />
        </a>
        {/* Toggle button for smaller screens */}
        <button className="sidebar-toggler btn px-2 py-1" type="button">
          <i className="fa fa-align-left"></i>
        </button>
        {/* Navigation items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className={`nav-link${active === "earn" ? " active" : ""}`} href="/earn">
                <i className="fa-regular fa-dollar-sign"></i>
                <span>
                  Earn
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${active === "withdraw" ? " active" : ""}`} href="/withdraw">
                <i className="fa-regular fa-credit-card"></i>
                <span>
                  Withdraw
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${active === "leaders" ? " active" : ""}`} href="/leaders">
                <i className="fa-regular fa-star"></i>
                <span>
                  Leaderbord
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link${active === "reward" ? " active" : ""}`} href="/reward">
                <i className="fa fa-gift"></i>
                <span>
                  Rewards
                </span>
              </a>
            </li>
          </ul>
{variant==="account" ? (
<>
{/* Login and Register buttons */}
          <div className="d-flex align-items-center gap-3">
            <div className="dropdown balance-dropdown navbar-dropdowns">
              <button className="btn btn-secondary dropdown-toggle w-100 px-3 py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="d-flex align-items-center justify-content-between gap-3 py-1">
                  <div className="d-flex align-items-center gap-1" id="os-icons">
                    <img src="/assets/img/coin (1).png" alt="Coin" height="14" className="balance" />
                    <img src="/assets/img/icons8-lock-94.png" alt="Lock" height="14" className="pending-balance" />
                    <span>
                      0
                    </span>
                  </div>
                  <i className="fa fa-chevron-down"></i>
                </div>
              </button>
              <div className="dropdown-menu shadow-lg p-2" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item p-1 bg-transparent" href="#" data-value="item1">
                  <label className="form-check form-switch balance-switch d-flex align-items-center justify-content-between">
                    <input className="form-check-input balanceSwitch" type="checkbox" onChange={() => { changeBalance() }} id="balanceSwitch" />
                    <span className="form-check-label fw-medium balance-status">
                      Balance
                    </span>
                  </label>
                </a>
              </div>
            </div>
            <div className="dropdown profile-dropdown navbar-dropdowns">
              <button className="btn btn-secondary dropdown-toggle w-100 px-3 py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <div className="d-flex align-items-center gap-1" id="os-icons">
                    <img src="/assets/img/9.png" alt="Avatar" height="32" width="32" className="avatar" />
                  </div>
                  <i className="fa fa-chevron-down"></i>
                </div>
              </button>
              <div className="dropdown-menu shadow-lg p-1" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item p-2 bg-transparent active" href="#" data-value="item1">
                  <div className="d-flex align-items-center justify-content-start gap-2">
                    <img src="/assets/img/9.png" alt="Avatar" height="32" width="32" className="avatar" />
                    <span>
                      Moloy Pal
                    </span>
                  </div>
                </a>
                <a className="dropdown-item p-2 bg-transparent" href="/profile" data-value="item1">
                  <div className="d-flex align-items-center justify-content-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bd-icon" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                    </svg>
                    <span>
                      Profile
                    </span>
                  </div>
                </a>
                <a className="dropdown-item p-2 bg-transparent" href="#" data-value="item1">
                  <div className="d-flex align-items-center justify-content-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" space="preserve" fill="currentColor" className="bd-icon" style={{height: '14px'}} viewBox="0 0 47 47">
                      <path d="m17.567 15.938-2.859-2.702a4.19 4.19 0 0 0 .539-2.029 4.238 4.238 0 0 0-4.24-4.239 4.24 4.24 0 1 0 0 8.48 4.21 4.21 0 0 0 2.242-.654l2.855 2.699a9.71 9.71 0 0 1 1.463-1.555zM29.66 15.6l3.799-6.393c.374.107.762.184 1.169.184a4.24 4.24 0 1 0 0-8.48 4.237 4.237 0 0 0-3.012 7.22l-3.787 6.375A9.488 9.488 0 0 1 29.66 15.6zM42.762 20.952a4.236 4.236 0 0 0-3.968 2.775l-5.278-.521c0 .04.006.078.006.117a9.72 9.72 0 0 1-.213 2.009l5.276.521A4.232 4.232 0 0 0 47 25.191a4.238 4.238 0 0 0-4.238-4.239zM28.197 37.624l-1.18-5.156a9.662 9.662 0 0 1-2.082.481l1.182 5.157c-1.355.709-2.29 2.11-2.29 3.746a4.236 4.236 0 0 0 4.243 4.237 4.236 4.236 0 0 0 4.238-4.237 4.229 4.229 0 0 0-4.111-4.228zM14.357 25.37l-6.57 2.201A4.236 4.236 0 0 0 0 29.884a4.242 4.242 0 1 0 8.481 0c0-.098-.021-.188-.029-.284l6.591-2.207a9.682 9.682 0 0 1-.686-2.023z"></path>
                      <circle cx="23.83" cy="23.323" r="7.271"></circle>
                    </svg>
                    <span>
                      Affiliates
                    </span>
                  </div>
                </a>
                <a className="dropdown-item p-2 bg-transparent" href="#" data-value="item1">
                  <div className="d-flex align-items-center justify-content-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bd-icon" style={{height: '20px'}} viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"></path>
                      <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"></path>
                    </svg>
                    <span>
                      Logout
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
</>
) : (
<>
{/* Login and Register buttons */}
          <div className="d-flex align-items-center">
            <button className="btn nav-btns btn-login me-2" onClick={() => { openModal('signin') }}>
              <svg className="btn-icon" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.38696 7.4933C10.0508 6.95765 10.5353 6.22311 10.7731 5.39188C11.0109 4.56065 10.9902 3.67405 10.7139 2.85544C10.4376 2.03684 9.91932 1.32692 9.23128 0.824467C8.54324 0.322012 7.71961 0.052002 6.87498 0.052002C6.03035 0.052002 5.20673 0.322012 4.51869 0.824467C3.83064 1.32692 3.3124 2.03684 3.03606 2.85544C2.75972 3.67405 2.73903 4.56065 2.97685 5.39188C3.21468 6.22311 3.6992 6.95765 4.363 7.4933C3.22556 7.96069 2.23309 8.7359 1.49142 9.7363C0.749747 10.7367 0.286666 11.9248 0.151545 13.1738C0.141764 13.265 0.149593 13.3573 0.174583 13.4454C0.199573 13.5335 0.241236 13.6157 0.297193 13.6873C0.410204 13.8318 0.574576 13.9244 0.754149 13.9447C0.933723 13.9649 1.11379 13.9112 1.25473 13.7953C1.39568 13.6794 1.48596 13.5108 1.50571 13.3266C1.65439 11.9691 2.2855 10.7154 3.27846 9.80496C4.27143 8.89453 5.55663 8.39124 6.88853 8.39124C8.22042 8.39124 9.50562 8.89453 10.4986 9.80496C11.4916 10.7154 12.1227 11.9691 12.2713 13.3266C12.2897 13.4973 12.3691 13.6549 12.4942 13.769C12.6192 13.8831 12.781 13.9457 12.9484 13.9447H13.0229C13.2004 13.9237 13.3626 13.8317 13.4742 13.6886C13.5858 13.5455 13.6378 13.363 13.6187 13.1808C13.483 11.9282 13.0174 10.737 12.2719 9.73511C11.5264 8.73318 10.5291 7.95822 9.38696 7.4933ZM6.87498 7.00025C6.33933 7.00025 5.8157 6.83734 5.37031 6.53211C4.92493 6.22688 4.5778 5.79306 4.37281 5.28548C4.16782 4.77791 4.11419 4.2194 4.21869 3.68056C4.32319 3.14173 4.58113 2.64677 4.9599 2.2583C5.33867 1.86982 5.82125 1.60526 6.34661 1.49808C6.87198 1.3909 7.41654 1.44591 7.91142 1.65615C8.4063 1.86639 8.82929 2.22243 9.12688 2.67923C9.42448 3.13603 9.58332 3.67309 9.58332 4.22248C9.58332 4.95919 9.29798 5.66573 8.79006 6.18666C8.28215 6.70759 7.59328 7.00025 6.87498 7.00025Z" fill="param(fill)"></path>
              </svg>
              <span>
                Login
              </span>
            </button>
            <button className="btn nav-btns btn-register" onClick={() => { openModal('signup') }}>
              <svg className="btn-icon" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.2934 13.2501L1.80728 13.7432C1.67652 13.8739 1.49916 13.9474 1.31423 13.9474C1.1293 13.9474 0.95194 13.8739 0.821173 13.7432C0.690407 13.6124 0.616943 13.435 0.616943 13.2501C0.616943 13.0652 0.690407 12.8878 0.821173 12.7571L1.80034 11.7848L3.76562 9.81955L8.14062 5.43761C7.66689 4.71958 7.47657 3.85127 7.60651 3.00092C7.73646 2.15057 8.17744 1.37873 8.84399 0.83496C9.51054 0.291187 10.3552 0.0141972 11.2143 0.0576614C12.0735 0.101126 12.8859 0.461949 13.4941 1.07022C14.1024 1.67848 14.4632 2.49089 14.5067 3.35001C14.5501 4.20913 14.2732 5.0538 13.7294 5.72035C13.1856 6.3869 12.4138 6.82787 11.5634 6.95782C10.7131 7.08777 9.84476 6.89744 9.12673 6.42372L5.23784 10.3057L6.71701 11.7779C6.7813 11.8426 6.83221 11.9194 6.86683 12.0038C6.90145 12.0883 6.9191 12.1787 6.91878 12.2699C6.91846 12.3612 6.90017 12.4515 6.86495 12.5356C6.82974 12.6198 6.77828 12.6962 6.71353 12.7605C6.64879 12.8248 6.57201 12.8757 6.48758 12.9103C6.40316 12.945 6.31274 12.9626 6.2215 12.9623C6.13025 12.962 6.03996 12.9437 5.95578 12.9085C5.87161 12.8733 5.79519 12.8218 5.7309 12.7571L4.25867 11.2848L3.27951 12.2709L3.76562 12.7571C3.83037 12.8213 3.88182 12.8978 3.91703 12.9819C3.95225 13.0661 3.97054 13.1564 3.97087 13.2477C3.97119 13.3389 3.95353 13.4293 3.91891 13.5137C3.88429 13.5982 3.83338 13.6749 3.76909 13.7397C3.7048 13.8044 3.62838 13.8559 3.5442 13.8911C3.46003 13.9263 3.36974 13.9446 3.27849 13.9449C3.18724 13.9453 3.09683 13.9276 3.0124 13.893C2.92798 13.8584 2.8512 13.8075 2.78645 13.7432L2.2934 13.2501ZM13.1198 3.52789C13.1198 3.11584 12.9976 2.71305 12.7687 2.37045C12.5398 2.02785 12.2144 1.76082 11.8337 1.60314C11.453 1.44545 11.0341 1.4042 10.63 1.48458C10.2259 1.56497 9.85467 1.76339 9.56331 2.05475C9.27195 2.34611 9.07353 2.71732 8.99315 3.12145C8.91276 3.52557 8.95402 3.94446 9.1117 4.32514C9.26939 4.70582 9.53641 5.03119 9.87901 5.26011C10.2216 5.48903 10.6244 5.61122 11.0365 5.61122C11.589 5.61122 12.1189 5.39173 12.5096 5.00103C12.9003 4.61032 13.1198 4.08042 13.1198 3.52789Z" fill="white"></path>
              </svg>
              <span>
                Register
              </span>
            </button>
          </div>
          
</>
)}
{/* Chat button */}
          <div className="ps-2">
            <button className="btn btn-chat" onClick={() => { chatWindow() }}>
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="message" className="nav-chat-icon nci-hide" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.837 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM480 352c0 17.6-14.4 32-32 32h-144.1c-6.928 0-13.67 2.248-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32V352z"></path>
              </svg>
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="message-dots" className="nav-chat-icon nci-show" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.838 11.03 15.55 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM480 352c0 17.6-14.4 32-32 32h-144.1c-6.928 0-13.67 2.248-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32V352zM128 184c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24S152 221.3 152 208C152 194.7 141.3 184 128 184zM384 184c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C408 194.7 397.3 184 384 184zM256 184c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C280 194.7 269.3 184 256 184z"></path>
              </svg>
            </button>
          </div>
        </div>
        {variant==="account" ? (
<div className="d-flex d-lg-none align-items-center gap-3">
          <div className="dropdown balance-dropdown navbar-dropdowns">
            <button className="btn btn-secondary dropdown-toggle w-100 px-3 py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="d-flex align-items-center justify-content-between gap-3 py-1">
                <div className="d-flex align-items-center gap-1" id="os-icons">
                  <img src="/assets/img/coin (1).png" alt="Coin" height="14" className="balance" />
                  <img src="/assets/img/icons8-lock-94.png" alt="Lock" height="14" className="pending-balance" />
                  <span>
                    0
                  </span>
                </div>
                <i className="fa fa-chevron-down"></i>
              </div>
            </button>
            <div className="dropdown-menu shadow-lg p-2" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item p-1 bg-transparent" href="#" data-value="item1">
                <label className="form-check form-switch balance-switch d-flex align-items-center justify-content-between">
                  <input className="form-check-input balanceSwitch" type="checkbox" onChange={() => { changeBalance() }} id="balanceSwitch" />
                  <span className="form-check-label fw-medium balance-status">
                    Balance
                  </span>
                </label>
              </a>
            </div>
          </div>
          <div className="dropdown profile-dropdown navbar-dropdowns">
            <button className="btn btn-secondary dropdown-toggle w-100 px-3 py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="d-flex align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-1" id="os-icons">
                  <img src="/assets/img/9.png" alt="Avatar" height="32" width="32" className="avatar" />
                </div>
                <i className="fa fa-chevron-down"></i>
              </div>
            </button>
            <div className="dropdown-menu shadow-lg p-1" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item p-2 bg-transparent active" href="#" data-value="item1">
                <div className="d-flex align-items-center justify-content-start gap-2">
                  <img src="/assets/img/9.png" alt="Avatar" height="32" width="32" className="avatar" />
                  <span>
                    Moloy Pal
                  </span>
                </div>
              </a>
              <a className="dropdown-item p-2 bg-transparent" href="/profile" data-value="item1">
                <div className="d-flex align-items-center justify-content-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bd-icon" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                  </svg>
                  <span>
                    Profile
                  </span>
                </div>
              </a>
              <a className="dropdown-item p-2 bg-transparent" href="#" data-value="item1">
                <div className="d-flex align-items-center justify-content-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" space="preserve" fill="currentColor" className="bd-icon" style={{height: '14px'}} viewBox="0 0 47 47">
                    <path d="m17.567 15.938-2.859-2.702a4.19 4.19 0 0 0 .539-2.029 4.238 4.238 0 0 0-4.24-4.239 4.24 4.24 0 1 0 0 8.48 4.21 4.21 0 0 0 2.242-.654l2.855 2.699a9.71 9.71 0 0 1 1.463-1.555zM29.66 15.6l3.799-6.393c.374.107.762.184 1.169.184a4.24 4.24 0 1 0 0-8.48 4.237 4.237 0 0 0-3.012 7.22l-3.787 6.375A9.488 9.488 0 0 1 29.66 15.6zM42.762 20.952a4.236 4.236 0 0 0-3.968 2.775l-5.278-.521c0 .04.006.078.006.117a9.72 9.72 0 0 1-.213 2.009l5.276.521A4.232 4.232 0 0 0 47 25.191a4.238 4.238 0 0 0-4.238-4.239zM28.197 37.624l-1.18-5.156a9.662 9.662 0 0 1-2.082.481l1.182 5.157c-1.355.709-2.29 2.11-2.29 3.746a4.236 4.236 0 0 0 4.243 4.237 4.236 4.236 0 0 0 4.238-4.237 4.229 4.229 0 0 0-4.111-4.228zM14.357 25.37l-6.57 2.201A4.236 4.236 0 0 0 0 29.884a4.242 4.242 0 1 0 8.481 0c0-.098-.021-.188-.029-.284l6.591-2.207a9.682 9.682 0 0 1-.686-2.023z"></path>
                    <circle cx="23.83" cy="23.323" r="7.271"></circle>
                  </svg>
                  <span>
                    Affiliates
                  </span>
                </div>
              </a>
              <a className="dropdown-item p-2 bg-transparent" href="#" data-value="item1">
                <div className="d-flex align-items-center justify-content-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bd-icon" style={{height: '20px'}} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"></path>
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"></path>
                  </svg>
                  <span>
                    Logout
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
) : (
<div className="d-flex d-lg-none align-items-center">
          <button className="btn nav-btns btn-login me-2" onClick={() => { openModal('signin') }}>
            <svg className="btn-icon" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.38696 7.4933C10.0508 6.95765 10.5353 6.22311 10.7731 5.39188C11.0109 4.56065 10.9902 3.67405 10.7139 2.85544C10.4376 2.03684 9.91932 1.32692 9.23128 0.824467C8.54324 0.322012 7.71961 0.052002 6.87498 0.052002C6.03035 0.052002 5.20673 0.322012 4.51869 0.824467C3.83064 1.32692 3.3124 2.03684 3.03606 2.85544C2.75972 3.67405 2.73903 4.56065 2.97685 5.39188C3.21468 6.22311 3.6992 6.95765 4.363 7.4933C3.22556 7.96069 2.23309 8.7359 1.49142 9.7363C0.749747 10.7367 0.286666 11.9248 0.151545 13.1738C0.141764 13.265 0.149593 13.3573 0.174583 13.4454C0.199573 13.5335 0.241236 13.6157 0.297193 13.6873C0.410204 13.8318 0.574576 13.9244 0.754149 13.9447C0.933723 13.9649 1.11379 13.9112 1.25473 13.7953C1.39568 13.6794 1.48596 13.5108 1.50571 13.3266C1.65439 11.9691 2.2855 10.7154 3.27846 9.80496C4.27143 8.89453 5.55663 8.39124 6.88853 8.39124C8.22042 8.39124 9.50562 8.89453 10.4986 9.80496C11.4916 10.7154 12.1227 11.9691 12.2713 13.3266C12.2897 13.4973 12.3691 13.6549 12.4942 13.769C12.6192 13.8831 12.781 13.9457 12.9484 13.9447H13.0229C13.2004 13.9237 13.3626 13.8317 13.4742 13.6886C13.5858 13.5455 13.6378 13.363 13.6187 13.1808C13.483 11.9282 13.0174 10.737 12.2719 9.73511C11.5264 8.73318 10.5291 7.95822 9.38696 7.4933ZM6.87498 7.00025C6.33933 7.00025 5.8157 6.83734 5.37031 6.53211C4.92493 6.22688 4.5778 5.79306 4.37281 5.28548C4.16782 4.77791 4.11419 4.2194 4.21869 3.68056C4.32319 3.14173 4.58113 2.64677 4.9599 2.2583C5.33867 1.86982 5.82125 1.60526 6.34661 1.49808C6.87198 1.3909 7.41654 1.44591 7.91142 1.65615C8.4063 1.86639 8.82929 2.22243 9.12688 2.67923C9.42448 3.13603 9.58332 3.67309 9.58332 4.22248C9.58332 4.95919 9.29798 5.66573 8.79006 6.18666C8.28215 6.70759 7.59328 7.00025 6.87498 7.00025Z" fill="param(fill)"></path>
            </svg>
            <span>
              Login
            </span>
          </button>
          <button className="btn nav-btns btn-register" onClick={() => { openModal('signup') }}>
            <svg className="btn-icon" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.2934 13.2501L1.80728 13.7432C1.67652 13.8739 1.49916 13.9474 1.31423 13.9474C1.1293 13.9474 0.95194 13.8739 0.821173 13.7432C0.690407 13.6124 0.616943 13.435 0.616943 13.2501C0.616943 13.0652 0.690407 12.8878 0.821173 12.7571L1.80034 11.7848L3.76562 9.81955L8.14062 5.43761C7.66689 4.71958 7.47657 3.85127 7.60651 3.00092C7.73646 2.15057 8.17744 1.37873 8.84399 0.83496C9.51054 0.291187 10.3552 0.0141972 11.2143 0.0576614C12.0735 0.101126 12.8859 0.461949 13.4941 1.07022C14.1024 1.67848 14.4632 2.49089 14.5067 3.35001C14.5501 4.20913 14.2732 5.0538 13.7294 5.72035C13.1856 6.3869 12.4138 6.82787 11.5634 6.95782C10.7131 7.08777 9.84476 6.89744 9.12673 6.42372L5.23784 10.3057L6.71701 11.7779C6.7813 11.8426 6.83221 11.9194 6.86683 12.0038C6.90145 12.0883 6.9191 12.1787 6.91878 12.2699C6.91846 12.3612 6.90017 12.4515 6.86495 12.5356C6.82974 12.6198 6.77828 12.6962 6.71353 12.7605C6.64879 12.8248 6.57201 12.8757 6.48758 12.9103C6.40316 12.945 6.31274 12.9626 6.2215 12.9623C6.13025 12.962 6.03996 12.9437 5.95578 12.9085C5.87161 12.8733 5.79519 12.8218 5.7309 12.7571L4.25867 11.2848L3.27951 12.2709L3.76562 12.7571C3.83037 12.8213 3.88182 12.8978 3.91703 12.9819C3.95225 13.0661 3.97054 13.1564 3.97087 13.2477C3.97119 13.3389 3.95353 13.4293 3.91891 13.5137C3.88429 13.5982 3.83338 13.6749 3.76909 13.7397C3.7048 13.8044 3.62838 13.8559 3.5442 13.8911C3.46003 13.9263 3.36974 13.9446 3.27849 13.9449C3.18724 13.9453 3.09683 13.9276 3.0124 13.893C2.92798 13.8584 2.8512 13.8075 2.78645 13.7432L2.2934 13.2501ZM13.1198 3.52789C13.1198 3.11584 12.9976 2.71305 12.7687 2.37045C12.5398 2.02785 12.2144 1.76082 11.8337 1.60314C11.453 1.44545 11.0341 1.4042 10.63 1.48458C10.2259 1.56497 9.85467 1.76339 9.56331 2.05475C9.27195 2.34611 9.07353 2.71732 8.99315 3.12145C8.91276 3.52557 8.95402 3.94446 9.1117 4.32514C9.26939 4.70582 9.53641 5.03119 9.87901 5.26011C10.2216 5.48903 10.6244 5.61122 11.0365 5.61122C11.589 5.61122 12.1189 5.39173 12.5096 5.00103C12.9003 4.61032 13.1198 4.08042 13.1198 3.52789Z" fill="white"></path>
            </svg>
            <span>
              Register
            </span>
          </button>
        </div>
)}
      </div>
    </nav>
    <div className="nav-down">
      <div className="p-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="dropdown lang-dropdown">
              <button className="btn nav-down-btn nb-btn d-flex align-items-center" type="button">
                <i className="fa fa-globe"></i>
                <i className="fa fa-chevron-down"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark roboto">
                <li>
                  <a className="dropdown-item active d-flex align-items-center gap-2" href="#">
                    <i className="fa fa-globe lang-img"></i>
                    <span>
                      Global
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                    <img src="/assets/img/united-states.png" className="lang-flag" alt="Flag" />
                    <span>
                      United States
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                    <img src="/assets/img/germany.png" className="lang-flag" alt="Flag" />
                    <span>
                      German
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-carousel-container">
            <div className="nav-carousel">
              <a href="#" className="nc-item" onClick={() => { openModal('user') }}>
                <div className="d-flex h-100 gap-1">
                  <img src="/assets/img/blog-1.jpg" alt="NC Image" className="nc-img" />
                  <div className="d-flex nc-text roboto flex-column justify-content-center">
                    <p className="nc-up mb-0">
                      MONETARS
                    </p>
                    <p className="nc-down mb-0">
                      MONETARS
                    </p>
                  </div>
                  <p className="nc-badge mb-0">
                    14
                  </p>
                </div>
              </a>
              <a href="#" className="nc-item" onClick={() => { openModal('user') }}>
                <div className="d-flex h-100 gap-1">
                  <span className="nc-img">
                    <span>
                      M
                    </span>
                  </span>
                  <div className="d-flex nc-text roboto flex-column justify-content-center">
                    <p className="nc-up mb-0">
                      MONETARS
                    </p>
                    <p className="nc-down mb-0">
                      MONETARS
                    </p>
                  </div>
                  <p className="nc-badge mb-0">
                    14
                  </p>
                </div>
              </a>
              <a href="#" className="nc-item" onClick={() => { openModal('user') }}>
                <div className="d-flex h-100 gap-1">
                  <img src="/assets/img/blog-1.jpg" alt="NC Image" className="nc-img" />
                  <div className="d-flex nc-text roboto flex-column justify-content-center">
                    <p className="nc-up mb-0">
                      MONETARS
                    </p>
                    <p className="nc-down mb-0">
                      MONETARS
                    </p>
                  </div>
                  <p className="nc-badge mb-0">
                    14
                  </p>
                </div>
              </a>
              <a href="#" className="nc-item" onClick={() => { openModal('user') }}>
                <div className="d-flex h-100 gap-1">
                  <span className="nc-img">
                    <span>
                      M
                    </span>
                  </span>
                  <div className="d-flex nc-text roboto flex-column justify-content-center">
                    <p className="nc-up mb-0">
                      MONETARS
                    </p>
                    <p className="nc-down mb-0">
                      MONETARS
                    </p>
                  </div>
                  <p className="nc-badge mb-0">
                    14
                  </p>
                </div>
              </a>
              <a href="#" className="nc-item" onClick={() => { openModal('user') }}>
                <div className="d-flex h-100 gap-1">
                  <img src="/assets/img/blog-1.jpg" alt="NC Image" className="nc-img" />
                  <div className="d-flex nc-text roboto flex-column justify-content-center">
                    <p className="nc-up mb-0">
                      MONETARS
                    </p>
                    <p className="nc-down mb-0">
                      MONETARS
                    </p>
                  </div>
                  <p className="nc-badge mb-0">
                    14
                  </p>
                </div>
              </a>
              <a href="#" className="nc-item" onClick={() => { openModal('user') }}>
                <div className="d-flex h-100 gap-1">
                  <span className="nc-img">
                    <span>
                      M
                    </span>
                  </span>
                  <div className="d-flex nc-text roboto flex-column justify-content-center">
                    <p className="nc-up mb-0">
                      MONETARS
                    </p>
                    <p className="nc-down mb-0">
                      MONETARS
                    </p>
                  </div>
                  <p className="nc-badge mb-0">
                    14
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>  );
}
