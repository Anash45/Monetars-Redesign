import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout showPayModal>
  <main>
    <section className="py-5 page-sec roboto">
      <div className="container">
        <div className="mb-0 pb-3 d-flex justify-content-between">
          <h2 className="page-title mb-0 fw-medium">
            Contact
          </h2>
        </div>
        <div className="rounded-xl mt-3 p-5 ps-card">
          <div className="p-2 ps-desc">
            <p>
              Don't hesitate to get in contact with us, for supporting or business, and we'll get back to you within 24 hours!
            </p>
            <p>
              For every support inquiry, please contact the
              <a href="#" className="fw-bold text-decoration-underline">
                Live Support Chat
              </a>
            </p>
            <p>
              <span className="fw-medium">
                Business inquiries:
              </span>
              <a href="#">
                something@monetars.com
              </a>
              (No Support)
            </p>
            <p>
              Support inquiries can only be done through the Live Support chat.
            </p>
            <p>
              <span className="fw-medium">
                Discord:
              </span>
              <a href="#" className="text-decoration-underline">
                Join here
              </a>
            </p>
            <p>
              <span className="fw-medium">
                Twitter:
              </span>
              <a href="#" className="text-decoration-underline">
                @monetars
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
    </Layout>
  );
}
