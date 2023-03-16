import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='shortcut icon'
          type='image/png'
          sizes='32x32'
          href='/logo.png'
        />
        <meta
          name='keywords'
          content='Insurance, Personal insurance, Halo Insurance'
        />
        <meta
          name='description'
          content='Protect your life and assets with Halo Insurance. We offer a range of insurance products including auto, home, life, and health insurance. Our policies are designed to provide you with the coverage you need to safeguard your future. Contact us today for a personalized quote.'
        />
        <meta name='author' content='Darius Garcia Jr.'></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
