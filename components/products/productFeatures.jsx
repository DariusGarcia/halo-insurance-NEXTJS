import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Et labore commodo nulla aliqua',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Et labore commodo nulla aliqua',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Et labore commodo nulla aliqua',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export default function ProductFeatures() {
  return (
    <div className='overflow-hidden bg-white py-12'>
      <div className='mx-auto max-w-7xl md:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start'>
          <div className='px-6 lg:px-0 lg:pt-4 lg:pr-4'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-lg'>
              <h2 className='text-base font-semibold leading-7 text-sky-600'>
                Insurance made simple
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Protect your tomorrow, today.
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-900'>
                      <feature.icon
                        className='absolute top-1 left-1 h-5 w-5 text-sky-600'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='sm:px-6 lg:px-0'>
            <div className='relative isolate overflow-hidden bg-sky-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none'>
              <div
                className='absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-sky-100 opacity-20 ring-1 ring-inset ring-white'
                aria-hidden='true'
              />
              <div className='mx-auto max-w-2xl sm:mx-0 sm:max-w-none'>
                <Image
                  width={2432}
                  height={1442}
                  className='h-36 md:h-auto w-auto'
                  src='/haloLogoBlack.png'
                  alt='navbar company logo'
                />
              </div>
              <div
                className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl'
                aria-hidden='true'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
