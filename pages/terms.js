import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout showPayModal>
  <main>
    <section className="py-5 page-sec roboto">
      <div className="container">
        <div className="mb-0 pb-3 d-flex justify-content-between">
          <h2 className="page-title mb-0 fw-medium">
            Terms and Conditions
          </h2>
          <span className="f-16p ps-date">
            Last Updated: 28 June, 2022
          </span>
        </div>
        <div className="rounded-xl mt-3 py-4 px-5 shadow-lg ps-card">
          <div className="px-2">
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Acceptance of Terms
              </h2>
              <p className="ps-desc mb-0">
                By creating an account or using any part of the Monetars platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please discontinue use of the site.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Eligibility
              </h2>
              <p className="ps-desc mb-0">
                You must be at least 16 years old to create a Monetars account. Users under 18 should have parental consent before participating in paid offers or withdrawing funds.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Earning and Payouts
              </h2>
              <p className="ps-desc mb-0">
                Coins are credited once a partner confirms an offer, survey, or app install is complete. Monetars is not responsible for delays caused by third-party advertisers, but we work to resolve missing-reward tickets quickly.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Prohibited Conduct
              </h2>
              <p className="ps-desc mb-0">
                Creating multiple accounts, using VPNs or emulators to fake device signals, or submitting false survey responses will result in an account suspension and forfeiture of pending coins.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Changes to These Terms
              </h2>
              <p className="ps-desc mb-0">
                We may update these Terms from time to time to reflect new features or legal requirements. Continued use of Monetars after a change is posted means you accept the revised Terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    </Layout>
  );
}
