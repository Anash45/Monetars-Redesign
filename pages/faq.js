import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout showSidebarNav>
  <main>
    <section className="py-5 faq-page-sec roboto">
      <div className="container">
        <div className="mb-3 d-flex justify-content-between">
          <h2 className="page-title fw-medium">
            FAQ
          </h2>
        </div>
        <div className="py-3">
          <nav className="px-0 py-0 mb-4 overflow-auto">
            <div className="nav nav-tabs nav-justified flex-nowrap" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true">
                FAQ
              </button>
              <button className="nav-link" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">
                Redeeming your coins
              </button>
              <button className="nav-link" id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3" type="button" role="tab" aria-controls="nav-3" aria-selected="false">
                Earning Coins
              </button>
              <button className="nav-link" id="nav-4-tab" data-bs-toggle="tab" data-bs-target="#nav-4" type="button" role="tab" aria-controls="nav-4" aria-selected="false">
                Contact Offerwalls
              </button>
              <button className="nav-link" id="nav-5-tab" data-bs-toggle="tab" data-bs-target="#nav-5" type="button" role="tab" aria-controls="nav-5" aria-selected="false">
                Policies
              </button>
              <button className="nav-link" id="nav-6-tab" data-bs-toggle="tab" data-bs-target="#nav-6" type="button" role="tab" aria-controls="nav-6" aria-selected="false">
                Accounts
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                      <span className="ac-down">
                        <i className="fa fa-arrow-down"></i>
                      </span>
                      <span>
                        How to make money on Monetars?
                      </span>
                    </button>
                  </h2>
                  <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi suscipit reiciendis aut nulla quasi. Fuga, minima voluptatibus totam distinctio debitis eos nobis saepe exercitationem nihil atque natus, minus commodi?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading2">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                      <span className="ac-down">
                        <i className="fa fa-arrow-down"></i>
                      </span>
                      <span>
                        How to make money on Monetars?
                      </span>
                    </button>
                  </h2>
                  <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi suscipit reiciendis aut nulla quasi. Fuga, minima voluptatibus totam distinctio debitis eos nobis saepe exercitationem nihil atque natus, minus commodi?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading2">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                      <span className="ac-down">
                        <i className="fa fa-arrow-down"></i>
                      </span>
                      <span>
                        How to make money on Monetars?
                      </span>
                    </button>
                  </h2>
                  <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eligendi suscipit reiciendis aut nulla quasi. Fuga, minima voluptatibus totam distinctio debitis eos nobis saepe exercitationem nihil atque natus, minus commodi?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
              Redeeming your coins
            </div>
            <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
              Earning Coins
            </div>
            <div className="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav-4-tab">
              Contact Offerwalls
            </div>
            <div className="tab-pane fade" id="nav-5" role="tabpanel" aria-labelledby="nav-5-tab">
              Policies
            </div>
            <div className="tab-pane fade" id="nav-6" role="tabpanel" aria-labelledby="nav-6-tab">
              Accounts
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    </Layout>
  );
}
