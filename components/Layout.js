import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import SigninSignupModal from "./SigninSignupModal";
import UserModal from "./UserModal";
import PayModal from "./PayModal";
import OfferModal from "./OfferModal";
import ChatWidget from "./ChatWidget";
import DarkModeToggle from "./DarkModeToggle";
import MobileSidebarNav from "./MobileSidebarNav";
import Scripts from "./Scripts";

export default function Layout({
  children,
  headerVariant = "guest",
  active = null,
  showPayModal = false,
  payModalVariant = "full",
  showOfferModal = false,
  showSidebarNav = false,
  scriptsVariant = "default",
}) {
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
        {scriptsVariant === "earn" && (
          <link rel="stylesheet" href="/vendor/select2/css/select2.min.css" />
        )}
        <link rel="stylesheet" href="/assets/dist/css/style.css" />
      </Head>
      <Header variant={headerVariant} active={active} />
      {children}
      <Footer />
      {showSidebarNav && <MobileSidebarNav />}
      <SigninSignupModal />
      <UserModal />
      {showPayModal && <PayModal variant={payModalVariant} />}
      {showOfferModal && <OfferModal />}
      <ChatWidget />
      <DarkModeToggle />
      <Scripts variant={scriptsVariant} />
    </>
  );
}
