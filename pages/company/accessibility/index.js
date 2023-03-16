import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <>
      <Head>
        <title>Halo - Accessibility</title>
      </Head>
      <div className='flex flex-col w-full items-center bg-stone-50'>
        <section className='flex flex-col gap-8 max-w-7xl my-8 md:my-36 px-3 md:px-12'>
          <h1 className='text-3xl font-semibold'>Accessibility</h1>
          <p className='leading-9'>
            Halo works to make its website accessible to all, including those
            with disabilities. If you are having difficulty accessing this
            website, please call or email us at{' '}
            <Link
              className='hover:underline hover:text-blue-800'
              href='tel:5624470025'
            >
              {' '}
              1.562.447.0025
            </Link>{' '}
            or{' '}
            <Link
              className='hover:underline hover:text-blue-800'
              href='mailto:accessibility@halo.com'
            >
              accessibility@halo.com
            </Link>{' '}
            so that we can provide you with the services you require through
            alternative means.
          </p>
        </section>
      </div>
    </>
  )
}
