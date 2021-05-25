import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const siteTitle = 'Memes Pulse'
        const description = 'Memes pulse tokens analytics data from EWC, ETH, BNB. Analytics of memes coins and no fundamental coins.'
        const siteName = 'Memes Pulse Tokens'
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content={description} />
                    <link rel="icon" href="/favicon.ico" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content={siteTitle} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:site" content="https://www.memespulse.com/" />
                    <meta name="twitter:creator" content="https://twitter.com/memes_pulse" />

                    <meta property="og:title" content={siteTitle} key="ogtitle" />
                    <meta property="og:description" content={description} key="ogdesc" />
                    <meta property="og:site_name" content={siteName} key="ogsitename" />
                    <meta property="og:title" content={siteTitle} key="ogtitle" />
                    <meta property="og:description" content={description} key="ogdesc" />

                    <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
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
        )
    }
}

export default MyDocument
