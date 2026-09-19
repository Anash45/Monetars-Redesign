import Head from "next/head";
import Scripts from "../components/Scripts";

export default function Page() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Monetars</title>
        <link rel="stylesheet" href="/vendor/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/slick/slick-theme.css" />
        <link rel="stylesheet" href="/assets/slick/slick.css" />
        <link rel="stylesheet" href="/vendor/flickity/flickity.min.css" />
        <link rel="stylesheet" href="/assets/dist/css/style.css" />
      </Head>
      <main className="py-5">
        <ol className="roboto px-0 page-list gap-2 mb-0 f-20p d-flex flex-column align-items-center justify-content-center py-4 h-100">
          <li><a href="/">Homepage</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog-detail">Blog Details</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/earn">Earn</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/imprint">Imprint</a></li>
          <li><a href="/leaders">Leaders</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/reward">Reward</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/unavailable">Unavailable</a></li>
          <li><a href="/withdraw">Withdraw</a></li>
        </ol>
      </main>
      <Scripts />
    </>
  );
}
