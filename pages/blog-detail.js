import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout showSidebarNav>
  <main>
    <section className="py-5 blog-detail-sec">
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-7 pb-md-0 pb-3">
            <div className="d-flex align-items-center">
              <p className="mb-0 blog-date">
                June 29, 2022
              </p>
            </div>
            <h3 className="fw-bold my-3 py-1 bd-title">
              How to get free PUBG UC
            </h3>
            <p className="bd-desc">
              The Fast Gflexing website to make money online from anywhere. Withdraw Paypal cash, PUBG UC, Bitcoin & more instantly and for free.
            </p>
            <div className="d-flex justify-content-between align-items-center pt-3 blog-tag-date">
              <a className="blog-tag" href="/blog-detail">
                Monetars
              </a>
              <div className="d-flex align-items-center gap-2">
                <a href="#" className="share-link">
                  <i className="fa fa-link"></i>
                </a>
                <a href="#" className="share-link ms-1">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="share-link ms-1">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img src="/assets/img/Mask Group -1.png" alt="Blog Iage" className="bd-img" />
          </div>
        </div>
        <div className="row pb-3 pt-4 roboto">
          <div className="col-md-7 pb-md-0 pb-3">
            <div className="bd-down-left">
              <h5 className="fw-medium py-4 extra-heading mb-0">
                Heading 123
              </h5>
              <p className="extra-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sit officia non hic optio maxime dicta consequuntur odio possimus quos ut, ducimus quae molestias enim nulla, a natus! Reprehenderit, ipsa?
              </p>
            </div>
            <div className="bd-down-left">
              <h5 className="fw-medium py-4 extra-heading mb-0">
                Heading 123
              </h5>
              <p className="extra-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sit officia non hic optio maxime dicta consequuntur odio possimus quos ut, ducimus quae molestias enim nulla, a natus! Reprehenderit, ipsa?
              </p>
            </div>
            <div className="bd-down-left">
              <h5 className="fw-medium py-4 extra-heading mb-0">
                Heading 123
              </h5>
              <p className="extra-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sit officia non hic optio maxime dicta consequuntur odio possimus quos ut, ducimus quae molestias enim nulla, a natus! Reprehenderit, ipsa?
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bd-down-right">
              <h3 className="bdr-title py-3">
                EASY TO GET STARTED AND
                <span className="colored">
                  EARN TODAY
                </span>
              </h3>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column gap-2 bdr-text">
                  <p className="mb-0">
                    Balance
                  </p>
                  <p className="mb-0 fw-bold">
                    42,472 coins
                  </p>
                  <div>
                    <a href="#" className="btn btn-cashout">
                      Cashout
                    </a>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="d-block p-1">
                      <img src="/assets/img/paypal.png" className="pay-logo" />
                    </span>
                    <span className="d-block p-1">
                      <img src="/assets/img/amazon-a-logo.png" className="pay-logo" />
                    </span>
                    <span className="d-block p-1">
                      <img src="/assets/img/Group 644.png" className="pay-logo" />
                    </span>
                  </div>
                  <div>
                    <span className="d-block p-1">
                      <img src="/assets/img/Group 504.png" className="pay-logo" />
                    </span>
                    <span className="d-block p-1">
                      <img src="/assets/img/apple.png" className="pay-logo" />
                    </span>
                    <span className="d-block p-1">
                      <img src="/assets/img/Path 1596.png" className="pay-logo" />
                    </span>
                  </div>
                </div>
              </div>
              <p className="py-3 mb-0 bdr-text">
                After you have earned some coins you can click on "Shop". This is where you can exchange your points to Cash, Gift cards, Bitcoin & more that you can use right away. We charge no fees withdrawl.
              </p>
              <a href="#" className="btn btn-signup">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    </Layout>
  );
}
