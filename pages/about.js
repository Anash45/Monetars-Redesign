import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout showPayModal>
  <main>
    <section className="py-5 page-sec roboto">
      <div className="container">
        <div className="mb-0 pb-3 d-flex justify-content-between">
          <h2 className="page-title mb-0 fw-medium">
            About us
          </h2>
        </div>
        <div className="rounded-xl mt-3 py-4 px-5 shadow-lg ps-card">
          <div className="px-2">
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Who We Are
              </h2>
              <p className="ps-desc mb-0">
                Monetars is a rewards platform that pays real people to test apps, complete surveys, and try out new games. Since launching, we've paid out hundreds of thousands of dollars to a community that spans over 30 countries.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Our Mission
              </h2>
              <p className="ps-desc mb-0">
                We believe your time and opinions are worth something. Our mission is to connect everyday users with brands that want honest feedback, and to make sure that feedback is rewarded fairly and paid out fast.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                How It Works
              </h2>
              <p className="ps-desc mb-0">
                Browse the Earn page for offers that match your device and interests, complete the task as described, and watch your coin balance update in real time. Once you hit the minimum threshold, cash out instantly.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Why Users Trust Us
              </h2>
              <p className="ps-desc mb-0">
                Every offer on Monetars is vetted by our team before it goes live, and our support team responds to tickets within 24 hours. We also publish real payout proof from our community every week.
              </p>
            </div>
            <div>
              <h2 className="f-24p py-4 ps-title mb-0">
                Get In Touch
              </h2>
              <p className="ps-desc mb-0">
                Have a question, a partnership idea, or feedback on an offer? Reach out through our Contact page and a real member of our team will get back to you.
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
