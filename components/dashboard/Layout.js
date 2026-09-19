import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NavTicker from "./NavTicker";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import SigninSignupModal from "./SigninSignupModal";
import UserModal from "./UserModal";
import OfferModal from "./OfferModal";
import ChatWidget from "./ChatWidget";
import NotificationsWidget from "./NotificationsWidget";
import Scripts from "./Scripts";

export default function Layout({ children, scriptsVariant = "default", extraScript }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dolares</title>
        <link rel="stylesheet" href="/vendor/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/dashboard-assets/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/dashboard-assets/slick/slick-theme.css" />
        <link rel="stylesheet" href="/dashboard-assets/slick/slick.css" />
        <link rel="stylesheet" href="/vendor/flickity/flickity.min.css" />
        <link rel="stylesheet" href="/dashboard-assets/dist/css/style.css" />
      </Head>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <main className="px-md-3">
          <NavTicker />
          {children}
          <Footer />
        </main>
      </div>
      <MobileNav />
      <SigninSignupModal />
      <UserModal />
      <OfferModal />
      <ChatWidget />
      <NotificationsWidget />
      <Scripts variant={scriptsVariant} />
      {extraScript && <script dangerouslySetInnerHTML={{ __html: extraScript }} />}
    </>
  );
}
