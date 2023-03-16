import Head from 'next/head'
import LandingHeader from '@/components/header/landingHeader/landingHeader'
import LandingServices from '@/components/landing/services'
import LandingTestimonials from '@/components/testimonials/testimonials'
import LandingCTA from '@/components/landing/cta'
import { createClient } from 'next-sanity'

export default function Home({ landingHeader, testimonialsText }) {
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
      <div className='h-full overflow-hidden'>
        <main className='h-full'>
          <LandingHeader landingHeader={landingHeader} />
          <LandingServices />
          <LandingTestimonials testimonialsText={testimonialsText} />
          <LandingCTA />
        </main>
      </div>
    </>
  )
}

const client = createClient({
  projectId: 'uanlttdv',
  dataset: 'production',
  apiVersion: '2023-03-16',
  useCdn: false,
})

export async function getStaticProps() {
  const landingHeader = await client.fetch(`*[_type == "landingHeader"]`)
  const testimonialsText = await client.fetch(`*[_type == "testimonials"]`)

  return {
    props: {
      landingHeader,
      testimonialsText,
    },
  }
}
