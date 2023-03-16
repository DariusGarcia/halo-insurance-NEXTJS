import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Cta() {
  return (
    <>
      {/* CTA section */}
      <div className='relative isolate -z-10 mt-16 '>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='mx-auto flex max-w-2xl flex-col gap-16 bg-black/5 py-16 px-6 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20'>
            <Image
              width={500}
              height={500}
              className='h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm'
              src='https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              alt=''
            />
            <div className='w-full flex-auto'>
              <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
                Join our team
              </h2>
              <p className='mt-6 text-lg leading-8 text-black'>
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
              <ul
                role='list'
                className='mt-10 grid grid-cols-1 gap-y-3 gap-x-8 text-base leading-7 text-black sm:grid-cols-2'
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className='flex gap-x-3'>
                    <CheckCircleIcon
                      className='h-7 w-5 flex-none text-sky-500'
                      aria-hidden='true'
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className='mt-10 flex'>
                <Link
                  href='#'
                  className='text-sm font-semibold leading-6 text-black hover:underline'
                >
                  Et labore commodo <span aria-hidden='true'>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'>
          <svg
            viewBox='0 0 1318 752'
            className='w-[82.375rem] flex-none'
            aria-hidden='true'
          >
            <path
              fill='url(#ee394704-5802-4a27-9451-3d29bf7415a3)'
              fillOpacity='.25'
              d='m279.655 479.549-211.511-96.46L.638 751.469l279.017-271.92 380.928 173.723c-77.415-137.198-159.845-384.186 129.758-274.555C1152.34 515.756 1226.88 775.51 1299.76 547.101c58.31-182.726-41.07-382.222-98.04-459.13L964.951 386.243 771.295.416 279.655 479.55Z'
            />
            <defs>
              <linearGradient
                id='ee394704-5802-4a27-9451-3d29bf7415a3'
                x1='1452.56'
                x2='-101.59'
                y1='515.446'
                y2='760.592'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#0284c7' />
                <stop offset={1} stopColor='#9ca3af' />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  )
}

const benefits = [
  'Et labore commodo nulla aliqua',
  'Flexible plans to fit your needs',
  '30 days "Et labore commodo nulla aliqua",',
  'Et labore commodo nulla aliqua',
  'Benefits for you and your family',
  'A great experience',
]
