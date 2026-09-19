import Layout from "../components/Layout";

const SOCIAL_LINKS = [
  { label: "Follow us on Twitter", icon: "twitter" },
  { label: "Join our Discord", icon: "discord" },
  { label: "Follow us on Facebook", icon: "facebook" },
  { label: "Follow us on Instagram", icon: "instagram" },
];

function SocialIcon({ type }) {
  if (type === "twitter") {
    return (
      <svg className="r-social-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.026 15C11.064 15 14.367 9.99696 14.367 5.66596C14.367 5.52596 14.367 5.38396 14.361 5.24396C15.0041 4.77845 15.5591 4.20211 16 3.54196C15.3993 3.80681 14.7628 3.98137 14.111 4.05996C14.7975 3.6496 15.3117 3.00393 15.558 2.24296C14.913 2.62508 14.207 2.89333 13.471 3.03596C12.9762 2.50898 12.3214 2.15988 11.6081 2.04272C10.8948 1.92556 10.1627 2.04688 9.52534 2.3879C8.88796 2.72891 8.38081 3.27059 8.08245 3.92902C7.78409 4.58745 7.71118 5.32589 7.875 6.02996C6.56974 5.96451 5.29282 5.62543 4.12704 5.0347C2.96127 4.44398 1.93268 3.6148 1.108 2.60096C0.68934 3.32404 0.561574 4.17936 0.750646 4.99323C0.939718 5.80709 1.43145 6.51849 2.126 6.98296C1.60554 6.96528 1.09652 6.82552 0.64 6.57496V6.61996C0.640897 7.37744 0.903307 8.11138 1.38287 8.69772C1.86244 9.28406 2.52975 9.68683 3.272 9.83796C2.99026 9.91558 2.69923 9.95427 2.407 9.95296C2.20098 9.95359 1.99538 9.9345 1.793 9.89596C2.00279 10.548 2.41127 11.1181 2.96125 11.5264C3.51122 11.9347 4.17513 12.1608 4.86 12.173C3.69656 13.0868 2.2594 13.5824 0.78 13.58C0.519321 13.5811 0.258823 13.566 0 13.535C1.50151 14.4922 3.2453 15.0005 5.026 15V15Z" fill="#0BA6FD"></path>
      </svg>
    );
  }
  if (type === "discord") {
    return (
      <svg className="r-social-icon" viewBox="0 0 256 199" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M216.856 16.597C200.067 8.74172 182.306 3.1602 164.042 0C161.767 4.113 159.109 9.645 157.276 14.046C137.584 11.085 118.073 11.085 98.7429 14.046C96.9109 9.646 94.1929 4.113 91.8969 0C73.6149 3.16165 55.8385 8.75739 39.0419 16.638C5.61793 67.147 -3.44307 116.4 1.08693 164.956C23.2559 181.511 44.7399 191.568 65.8619 198.149C71.1113 190.93 75.7516 183.288 79.7349 175.3C72.1512 172.413 64.8402 168.855 57.8889 164.668C59.7182 163.312 61.5044 161.899 63.2449 160.431C105.367 180.133 151.135 180.133 192.755 160.431C194.503 161.889 196.289 163.302 198.11 164.668C191.147 168.866 183.823 172.431 176.224 175.321C180.23 183.341 184.862 190.991 190.097 198.169C211.239 191.589 232.743 181.532 254.912 164.956C260.228 108.668 245.832 59.866 216.856 16.596V16.597ZM85.4739 135.095C72.8289 135.095 62.4589 123.29 62.4589 108.915C62.4589 94.54 72.6079 82.715 85.4739 82.715C98.3409 82.715 108.71 94.519 108.489 108.915C108.509 123.29 98.3409 135.095 85.4739 135.095ZM170.525 135.095C157.88 135.095 147.511 123.29 147.511 108.915C147.511 94.54 157.659 82.715 170.525 82.715C183.392 82.715 193.761 94.519 193.54 108.915C193.54 123.29 183.392 135.095 170.525 135.095V135.095Z" fill="#5865F2"></path>
      </svg>
    );
  }
  if (type === "facebook") {
    return (
      <svg className="r-social-icon" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128C0 191.888 46.808 244.843 108 254.445V165H75.5V128H108V99.8C108 67.72 127.11 50 156.347 50C170.352 50 185 52.5 185 52.5V84H168.86C152.958 84 148 93.867 148 103.99V128H183.5L177.825 165H148V254.445C209.192 244.843 256 191.889 256 128Z" fill="#1877F2"></path>
        <path d="M177.825 165L183.5 128H148V103.99C148 93.866 152.959 84 168.86 84H185V52.5C185 52.5 170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5V165H108V254.445C114.616 255.482 121.303 256.002 128 256C134.697 256.002 141.384 255.482 148 254.445V165H177.825Z" fill="white"></path>
      </svg>
    );
  }
  return <img src="/assets/img/icons8-instagram-94.png" alt="Icon" className="r-social-icon" />;
}

const STREAK_DAYS = [
  { day: 1, coins: 50, claimed: true },
  { day: 2, coins: 75, claimed: false },
  { day: 3, coins: 100, claimed: false },
  { day: 4, coins: 125, claimed: false },
  { day: 5, coins: 150, claimed: false },
  { day: 6, coins: 200, claimed: false },
  { day: 7, coins: 300, claimed: false },
];

export default function Page() {
  return (
    <Layout active={"reward"} showPayModal payModalVariant={"empty"}>
  <main>
    <section className="py-5 withdraw-page-sec roboto">
      <div className="container">
        <div className="rewards-container mb-4 pb-2">
          <div className="mb-0 py-2 d-flex align-items-center of-title">
            <img src="/assets/img/gift.png" alt="Icon" height="28" className="t-icon" />
            <h2 className="page-title mb-0 fw-medium ms-3">
              Bonus Code
            </h2>
          </div>
          <p className="reward-subtitle">
            Enter the bonus code received from our social media
          </p>
          <div className="r-box r-box-1 shadow-md rounded-lg px-md-4 px-3">
            <div className="rb-inner rounded-md p-3 d-flex align-items-center mb-4">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.9043 8.52067 13 8.28333 13 8C13 7.71667 12.9043 7.479 12.713 7.287C12.521 7.09567 12.2833 7 12 7C11.7167 7 11.4793 7.09567 11.288 7.287C11.096 7.479 11 7.71667 11 8C11 8.28333 11.096 8.52067 11.288 8.712C11.4793 8.904 11.7167 9 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="currentColor"></path>
              </svg>
              <div className="d-flex flex-column">
                <p className="f-14p mb-0">
                  Follow our socials to get notified of when we drop new bonus codes:
                </p>
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-brands fa-discord"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-twitter"></i>
                </div>
              </div>
            </div>
            <form action="#" className="d-flex bonus-form">
              <input type="text" className="flex-grow-1 f-14p" placeholder="Enter bonus code here..." />
              <button className="btn btn-blue f-14p rounded fw-bold">
                Claim
              </button>
            </form>
          </div>
        </div>
        <div className="rewards-container mb-4 pb-2">
          <div className="mb-0 py-2 d-flex align-items-center of-title">
            <i className="fa-regular fa-clock t-icon"></i>
            <h2 className="page-title mb-0 fw-medium ms-3">
              Weekly Rewards
            </h2>
          </div>
          <p className="reward-subtitle">
            Complete challenges to earn a bonus amount of points!
          </p>
          <div className="r-box r-box-1 shadow-md rounded-lg px-3">
            <p className="fw-bold f-16p">
              7 Day Streak Rewards
            </p>
            <div className="d-flex flex-wrap gap-2 justify-content-between mb-3">
              {STREAK_DAYS.map((day) => (
                <div className={`rb-inner rounded-md py-3 px-1 d-flex align-items-center flex-column gap-1 claim-box${day.claimed ? " claimed" : ""}`} key={day.day}>
                  <i className="fa-regular fa-clock f-24p"></i>
                  <span className="fw-bold f-12p">
                    Day {day.day}
                  </span>
                  <span className="f-12p">
                    {day.coins} Coins
                  </span>
                  <span className="btn btn-blue rounded-md px-16 py-1 f-12p lh-1">
                    Claim
                  </span>
                </div>
              ))}
            </div>
            <div className="rb-inner rounded-md p-3 gap-2 d-flex mb-0">
              <i className="fa fa-circle-info"></i>
              <div className="d-flex flex-column">
                <p className="f-14p mb-0">
                  Earn
                  <span className="text-blue">
                    1000 more coins today
                  </span>
                  to keep your streak! Time left:
                  <span className="text-blue">
                    23h 06m 34s
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rewards-container mb-4 pb-2">
          <div className="mb-0 py-2 d-flex align-items-center of-title">
            <i className="fa-regular fa-clock t-icon"></i>
            <h2 className="page-title mb-0 fw-medium ms-3">
              Join our Community
            </h2>
          </div>
          <p className="reward-subtitle">
            Follow us and join our Discord Channel
          </p>
          <div className="row">
            {SOCIAL_LINKS.map((social) => (
              <div className="col-xl-3 col-sm-6 col-12 py-3" key={social.label}>
                <div className="r-box-1 rounded-md shadow-md p-3 d-flex align-items-center justify-content-between gap-2">
                  <span className="d-flex align-items-center flex-column justify-content-center rounded rsi-box">
                    <SocialIcon type={social.icon} />
                  </span>
                  <div className="d-flex flex-column align-items-end">
                    <span className="fw-bold f-14p">
                      {social.label}
                    </span>
                    <a href="#" className="btn btn-blue rounded-md px-4 py-2 f-12p lh-1">
                      <span className="px-2">
                        Claim Coins
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </main>
    </Layout>
  );
}
