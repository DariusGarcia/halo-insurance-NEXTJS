import './globals.css'

export const metadata = {
  title: 'Halo Insurance',
  description:
    'Protect your life and assets with Halo Insurance. We offer a range of insurance products including auto, home, life, and health insurance. Our policies are designed to provide you with the coverage you need to safeguard your future. Contact us today for a personalized quote.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
