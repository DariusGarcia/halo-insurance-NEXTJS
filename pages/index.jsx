import Navbar from '../components/navbar/navbar'
import Head from 'next/head'
import LandingHeader from '@/components/header/landingHeader/landingHeader'
import LandingServices from '@/components/landing/services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Halo Insurance</title>
        <meta property='og:title' content='Halo Insurance' key='title' />
        <meta
          name='description'
          content='Protect your life and assets with Halo Insurance. We offer a range of insurance products including auto, home, life, and health insurance. Our policies are designed to provide you with the coverage you need to safeguard your future. Contact us today for a personalized quote.'
        />
      </Head>
      {/* TODO: change h-screen to h-full */}
      <div className='h-full overflow-hidden'>
        <Navbar />
        <main className='h-full'>
          <LandingHeader />
          <LandingServices />
        </main>
      </div>
    </>
  )
}
