import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout showPayModal>
  <main>
    <section className="py-5 page-sec roboto">
      <div className="container">
        <div className="mb-0 pb-3 d-flex justify-content-between">
          <h2 className="page-title mb-0 fw-medium">
            Imprint
          </h2>
        </div>
        <div className="rounded-xl mt-3 py-4 px-5 shadow-lg ps-card">
          <div className="px-2">
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Company Information
              </h2>
              <p className="ps-desc mb-0">
                Monetars is operated by Monetars Digital Media Ltd, a company registered to provide online rewards and market research services.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Registered Address
              </h2>
              <p className="ps-desc mb-0">
                123 Rewards Avenue, Suite 400, Wilmington, DE 19801, United States.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Contact Details
              </h2>
              <p className="ps-desc mb-0">
                For legal or business inquiries, reach us at legal@monetars.com. For account support, please use the Contact page instead.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Regulatory Notice
              </h2>
              <p className="ps-desc mb-0">
                Monetars complies with applicable consumer protection and data privacy regulations in every region where our services are offered.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Dispute Resolution
              </h2>
              <p className="ps-desc mb-0">
                Any disputes arising from use of this platform are handled under the governing law stated in our Terms of Service, and we encourage users to contact support before pursuing formal action.
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
