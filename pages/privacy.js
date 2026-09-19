import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout showPayModal>
  <main>
    <section className="py-5 page-sec roboto">
      <div className="container">
        <div className="mb-0 pb-3 d-flex justify-content-between">
          <h2 className="page-title mb-0 fw-medium">
            Privacy Policy
          </h2>
          <span className="f-16p ps-date">
            Last Updated: 28 June, 2022
          </span>
        </div>
        <div className="rounded-xl mt-3 py-4 px-5 shadow-lg ps-card">
          <div className="px-2">
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Information We Collect
              </h2>
              <p className="ps-desc mb-0">
                We collect the information you provide when you register (such as your email and country) along with device and usage data needed to verify completed offers and prevent fraud.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                How We Use Your Data
              </h2>
              <p className="ps-desc mb-0">
                Your data is used to credit your earnings accurately, personalize the offers you see, communicate important account updates, and improve the reliability of our platform.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Sharing With Partners
              </h2>
              <p className="ps-desc mb-0">
                We share the minimum data required with offer and survey partners so they can confirm task completion and pay out your reward -- we never sell your personal information.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Data Security
              </h2>
              <p className="ps-desc mb-0">
                Account data is encrypted in transit and at rest, and access is limited to team members who need it to support you or maintain the platform.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Your Choices
              </h2>
              <p className="ps-desc mb-0">
                You can request a copy of your data or ask us to delete your account at any time by contacting support -- we'll process the request within 30 days.
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
