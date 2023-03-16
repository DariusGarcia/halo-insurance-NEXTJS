import Head from 'next/head'
import Header from '../../../components/about/header/header'
import ContentSection from '@/components/about/contentSection/contentSection'
import Values from '@/components/about/values/values'
import Teams from '@/components/about/teams/teams'
import Cta from '@/components/about/cta/cta'

export default function About() {
  return (
    <>
      <Head>
        <title>Halo - About Us</title>
      </Head>
      <div className='bg-stone-50'>
        <main className='relative isolate pb-12 md:pb-24 '>
          <Header />
          <ContentSection />
          <div className='my-4 bg-stone-100 '>
            <Values />
          </div>
          {/* <Teams /> */}
          <Cta />
        </main>
      </div>
    </>
  )
}
