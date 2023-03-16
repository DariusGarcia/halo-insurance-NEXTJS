import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function ProductsShowcase() {
  return (
    <div className='bg-stone-50 py-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl sm:text-center'>
          <h2 className='text-2xl font-semibold leading-7 text-sky-600'>
            Pricing
          </h2>
          <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center'>
          Peace of mind at a price you can afford.
        </p>
        <div className='mt-20 flow-root'>
          <div className='isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-y-0 lg:divide-x xl:-mx-4'>
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className='pt-4 md:pt-16 lg:px-8 lg:pt-0 xl:px-14'
              >
                <h3
                  id={tier.id}
                  className='text-base font-semibold leading-7 text-gray-900'
                >
                  {tier.name}
                </h3>
                <p className='mt-6 flex items-baseline gap-x-1'>
                  <span className='text-5xl font-bold tracking-tight text-gray-900'>
                    {tier.price.monthly}
                  </span>
                  <span className='text-sm font-semibold leading-6 text-gray-600'>
                    /month
                  </span>
                </p>
                <p className='mt-3 text-sm leading-6 text-gray-500'>
                  {tier.price.annually} per month if paid annually
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className='mt-10 block rounded-md bg-sky-600 py-2 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600'
                >
                  Buy plan
                </a>
                <p className='mt-10 text-sm font-semibold leading-6 text-gray-900'>
                  {tier.description}
                </p>
                <ul
                  role='list'
                  className='mt-6 space-y-3 text-sm leading-6 text-gray-600'
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className='flex gap-x-3'>
                      <CheckCircleIcon
                        className='h-6 w-5 flex-none text-sky-600'
                        aria-hidden='true'
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '/company/contact',
    price: { monthly: '$15', annually: '$12' },
    description: 'Everything necessary to get started.',
    features: [
      '5 products',
      'Et labore commodo nulla aliqua',
      'Basic analytics',
      '48-hour support response time',
    ],
  },
  {
    name: 'Essential',
    id: 'tier-essential',
    href: '/company/contact',
    price: { monthly: '$30', annually: '$24' },
    description:
      'Everything in Basic, plus essential tools for "Et labore commodo nulla aliqua",',
    features: [
      '25 products',
      'Et labore commodo nulla aliqua',
      'Advanced analytics',
      '24-hour support response time',
      'Et labore commodo nulla aliqua',
    ],
  },
  {
    name: 'Growth',
    id: 'tier-growth',
    href: '/company/contact',
    price: { monthly: '$60', annually: '$48' },
    description:
      'Everything in Essential, plus "Et labore commodo nulla aliqua.',
    features: [
      'Unlimited products',
      'Et labore commodo nulla aliqua',
      'Et labore commodo nulla aliqua',
      '1-hour, dedicated support response time',
      'Et labore commodo nulla aliqua',
      'Custom reporting tools',
    ],
  },
]
