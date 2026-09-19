import Head from "next/head";
import DarkModeToggle from "../components/DarkModeToggle";
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
      <main className="py-4">
        <section className="page-sec roboto">
          <div className="container">
            <div className="unavailable-container mx-auto">
              <a href="/" className="d-block text-center mb-3 pb-3">
                <img src="/assets/img/Monester-logo.png" alt="Logo" className="u-logo mx-auto show-light" />
                <img src="/assets/img/Logo-light.png" alt="Logo" className="u-logo mx-auto show-dark" />
              </a>
              <div className="rounded-lg ps-card p-5 text-center mb-4">
                <h3 className="u-title mb-2">Service Unavailable</h3>
                <p className="u-desc mb-3">
                  Our system detected that your user quality score does not meet minimum requirements to access our page. There might be several reasons why that happened:
                </p>
                <ul className="u-list list-unstyled mb-0 rounded-lg">
                  <li className="py-2">Multi Account</li>
                  <li className="py-2">VPN or Proxy</li>
                  <li className="py-2">Fake participants</li>
                  <li className="py-2">Logged in for multiple countries</li>
                  <li className="py-2">...</li>
                </ul>
              </div>
              <a href="/contact" className="btn btn-blue w-100">
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>
      <DarkModeToggle />
      <Scripts />
    </>
  );
}
