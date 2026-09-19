import Layout from "../components/Layout";

export default function Page() {
  return (
    <Layout active={"withdraw"} showPayModal>
  <main>
    <section className="py-5 withdraw-page-sec roboto">
      <div className="container">
        <div className="mb-0 py-2 d-flex justify-content-between">
          <h2 className="page-title mb-0 fw-medium">
            Withdraw Cash
          </h2>
        </div>
        <div className="d-flex flex-wrap pay-cards">
          <div className="p-2">
            <a href="#" className="pay-card" onClick={() => { openModal('pay') }} style={{background: 'linear-gradient(to right, rgb(0, 188, 249), rgb(33, 62, 125))'}}>
              <img src="/assets/img/providers/withdraw/paypal.png" alt="Pay cards" height="32" />
            </a>
          </div>
          <div className="p-2">
            <a href="#" className="pay-card" onClick={() => { openModal('pay') }} style={{background: 'linear-gradient(to right, rgb(110, 175, 131), rgb(15, 80, 94))'}}>
              <img src="/assets/img/providers/withdraw/visa.png" alt="Pay cards" height="32" />
            </a>
          </div>
        </div>
        <div className="mt-2 py-2 d-flex justify-content-between">
          <h2 className="page-title mb-0 fw-medium">
            Gift Card Payout
          </h2>
        </div>
        <div className="d-flex flex-wrap pay-cards">
          <div className="p-2">
            <a href="#" className="pay-card" onClick={() => { openModal('pay') }} style={{background: 'rgb(17, 23, 30)'}}>
              <img src="/assets/img/providers/withdraw/amazon.png" alt="Pay cards" height="32" />
            </a>
          </div>
          <div className="p-2">
            <a href="#" className="pay-card" onClick={() => { openModal('pay') }} style={{background: 'rgb(255, 0, 10)'}}>
              <img src="/assets/img/providers/withdraw/nintendo.png" alt="Pay cards" height="32" />
            </a>
          </div>
          <div className="p-2">
            <a href="#" className="pay-card" onClick={() => { openModal('pay') }} style={{background: 'linear-gradient(190.72deg, rgb(87, 255, 60) -85.82%, rgb(23, 125, 62) 92.04%)'}}>
              <img src="/assets/img/providers/withdraw/xbox.png" alt="Pay cards" height="32" />
            </a>
          </div>
          <div className="p-2">
            <a href="#" className="pay-card" onClick={() => { openModal('pay') }} style={{background: 'rgb(255, 255, 255)'}}>
              <img src="/assets/img/providers/withdraw/googleplayDark.png" alt="Pay cards" height="32" />
            </a>
          </div>
          <div className="p-2">
            <a href="#" className="pay-card" onClick={() => { openModal('pay') }} style={{background: 'linear-gradient(112.11deg, rgb(255, 91, 83) -9.59%, rgb(152, 80, 250) 54.58%, rgb(44, 201, 248) 117.99%)'}}>
              <img src="/assets/img/providers/withdraw/applecard.png" alt="Pay cards" height="32" />
            </a>
          </div>
          <div className="p-2">
            <a href="#" className="pay-card" onClick={() => { openModal('pay') }} style={{background: 'linear-gradient(81.14deg, rgb(122, 181, 92) 25.96%, rgb(56, 255, 195) 147.65%)'}}>
              <img src="/assets/img/providers/withdraw/spotify.png" alt="Pay cards" height="32" />
            </a>
          </div>
          <div className="p-2">
            <a href="#" className="pay-card" onClick={() => { openModal('pay') }} style={{background: 'rgb(255, 255, 255)'}}>
              <img src="/assets/img/providers/withdraw/zalandoDark.png" alt="Pay cards" height="32" />
            </a>
          </div>
          <div className="p-2">
            <a href="#" className="pay-card" onClick={() => { openModal('pay') }} style={{background: 'rgb(255, 255, 255)'}}>
              <img src="/assets/img/providers/withdraw/mediamarktDark.png" alt="Pay cards" height="32" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
    </Layout>
  );
}
