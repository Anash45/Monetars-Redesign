import Layout from "../components/Layout";

const BLOG_POSTS = [
  { img: "blog-1.jpg", title: "How to Get Free PUBG UC", date: "June 29, 2022" },
  { img: "blog-2.jpg", title: "Top 5 Survey Apps That Actually Pay", date: "July 14, 2022" },
  { img: "bloog-3.jpg", title: "Cash Out Fast: PayPal vs Gift Cards", date: "August 2, 2022" },
  { img: "blog-1.jpg", title: "5 Mobile Games That Reward Real Coins", date: "September 18, 2022" },
];

export default function Page() {
  return (
    <Layout showSidebarNav>
  <main>
    <section className="py-5 blog-sec">
      <div className="container">
        <div className="mb-3 d-flex justify-content-between">
          <h2 className="page-title fw-medium">
            Learn how to earn Money online
          </h2>
        </div>
        <div className="row my-3">
          {BLOG_POSTS.map((post) => (
            <div className="col-lg-4 col-md-6 col-12 py-3 px-3" key={post.title}>
              <div className="card">
                <div className="card-body">
                  <a href="/blog-detail">
                    <img src={`/assets/img/${post.img}`} alt="Blog Image" className="w-100 blog-card-img" />
                  </a>
                  <a href="/blog-detail" className="pt-3 d-block">
                    <p className="fw-bold blog-card-title mb-0 py-1">
                      {post.title}
                    </p>
                  </a>
                  <div className="d-flex justify-content-between align-items-center pt-3 blog-tag-date">
                    <a className="blog-tag" href="/blog-detail">
                      Monetars
                    </a>
                    <p className="mb-0 blog-date">
                      {post.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
    </Layout>
  );
}
