import Head from "next/head";
import Scripts from "../components/Scripts";

const links = [
  { href: "/", label: "Homepage" },
  { href: "/about", label: "About" },
  { href: "/blog-detail", label: "Blog Details" },
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  { href: "/earn", label: "Earn" },
  { href: "/faq", label: "FAQ" },
  { href: "/imprint", label: "Imprint" },
  { href: "/leaders", label: "Leaders" },
  { href: "/privacy", label: "Privacy" },
  { href: "/profile", label: "Profile" },
  { href: "/reward", label: "Reward" },
  { href: "/terms", label: "Terms" },
  { href: "/unavailable", label: "Unavailable" },
  { href: "/withdraw", label: "Withdraw" },
];

function slug(href) {
  return href === "/" ? "homepage" : href.replace(/^\//, "");
}

function ThemeGallery({ theme, title }) {
  return (
    <div className="mb-5">
      <h2 className="page-title mb-3 fw-medium">{title}</h2>
      <div className="row g-3">
        {links.map(({ href, label }) => (
          <div className="col-lg-3 col-md-4 col-6 py-2 px-2" key={`${theme}-${href}`}>
            <a href={href} className="d-block text-decoration-none roboto">
              <div className="rounded-xl shadow-lg ps-card overflow-hidden h-100">
                <div
                  className="w-100"
                  style={{ aspectRatio: "4 / 3", overflow: "hidden" }}
                >
                  <img
                    src={`/gallery-thumbnails/${theme}/${slug(href)}.png`}
                    alt={`${label} (${title})`}
                    className="w-100 h-100 object-fit-cover"
                    style={{ objectPosition: "top" }}
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h3 className="f-16p fw-bold mb-1">{label}</h3>
                  <p
                    className="font-monospace mb-0 opacity-75"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {href}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

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
        <div className="container">
          <ThemeGallery theme="light" title="Light Theme" />
          <ThemeGallery theme="dark" title="Dark Theme" />
        </div>
      </main>
      <Scripts />
    </>
  );
}
