import Document, { Html, Head, Main, NextScript } from "next/document";

const THEME_FROM_QUERY_SCRIPT = `
(function () {
  try {
    var params = new URLSearchParams(window.location.search);
    var theme = params.get('theme');
    if (theme === 'light' || theme === 'dark') {
      window.localStorage.setItem('theme', theme);
    }
  } catch (e) {}
})();
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const isDashboard = ctx.pathname === "/dashboard" || ctx.pathname.startsWith("/dashboard/");
    return { ...initialProps, isDashboard };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script dangerouslySetInnerHTML={{ __html: THEME_FROM_QUERY_SCRIPT }} />
        </Head>
        <body className={this.props.isDashboard ? "side-nav-expanded" : undefined}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
