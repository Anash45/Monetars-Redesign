import Layout from "../components/Layout";

const FAQ_ITEMS = [
  {
    question: "How to make money on Monetars?",
    answer: "Complete offers, surveys, and app tests from the Earn page to collect coins. Once you've built up a balance, head to Withdraw to cash out via PayPal, gift cards, or crypto.",
  },
  {
    question: "How long does it take for coins to arrive?",
    answer: "Most offers credit your account within a few minutes of completion. Some survey and offer-wall partners can take up to 24-48 hours to confirm and post your reward.",
  },
  {
    question: "Is there a minimum amount I need to earn before cashing out?",
    answer: "Yes, most payout methods require a small minimum balance -- usually a few thousand coins -- so we can cover processing fees. You can see the exact minimum for each method on the Withdraw page.",
  },
];

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
                {FAQ_ITEMS.map((item, index) => (
                  <div className="accordion-item" key={item.question}>
                    <h2 className="accordion-header" id={`heading${index + 1}`}>
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 1}`} aria-expanded={index === 0} aria-controls={`collapse${index + 1}`}>
                        <span className="ac-down">
                          <i className="fa fa-arrow-down"></i>
                        </span>
                        <span>
                          {item.question}
                        </span>
                      </button>
                    </h2>
                    <div id={`collapse${index + 1}`} className={`accordion-collapse collapse${index === 0 ? " show" : ""}`} aria-labelledby={`heading${index + 1}`} data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className="mb-0">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
