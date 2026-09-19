import { Html, Head, Main, NextScript } from "next/document";

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

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: THEME_FROM_QUERY_SCRIPT }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
