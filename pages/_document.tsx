import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Global } from '@emotion/core';
import { GlobalStyles } from '../styles';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Global styles={GlobalStyles} />
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <link
            href="https://fonts.googleapis.com/css?family=Righteous|Roboto+Condensed:400,700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/images/favicons/favicon-32.png" />
          <link rel="icon" href="/images/favicons/favicon-32.png" sizes="32x32" />
          <link rel="icon" href="/images/favicons/favicon-128.png" sizes="128x128" />
          <link rel="icon" href="/images/favicons/favicon-192.png" sizes="192x192" />
          <link rel="shortcut icon" href="/images/favicons/favicon-196.png" sizes="196x196" />
          <link rel="apple-touch-icon" href="/images/favicons/favicon-152.png" sizes="152x152" />
          <link rel="apple-touch-icon" href="/images/favicons/favicon-167.png" sizes="167x167" />
          <link rel="apple-touch-icon" href="/images/favicons/favicon-180.png" sizes="180x180" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-156696606-1`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-156696606-1', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
