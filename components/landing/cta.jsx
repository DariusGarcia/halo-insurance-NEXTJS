import Link from 'next/link'

export default function Example() {
  return (
    <div className='bg-sky-600'>
      <div className='py-24 px-6 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl'>
            Get a quote today!
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-stone-50'>
            See options and pricing in minutes
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              href='/products/explore'
              className='rounded-md bg-stone-50 px-6 py-4 text-sm font-semibold text-black shadow-sm hover:bg-stone-100 hover:text-sky-600 hover:scale-95 ease-in-out transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Get started
            </Link>
            <Link
              href='/company/about'
              className='text-sm font-semibold leading-6 text-gray-900 hover:underline hover:opacity-90'
            >
              Learn more <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
