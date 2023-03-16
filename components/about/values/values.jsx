import {
  AcademicCapIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
export default function Values() {
  return (
    <>
      {' '}
      {/* Values section */}
      <div className=' mx-auto mt-12 md:mt-24 py-8 max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-black sm:text-4xl'>
            Our values
          </h2>
          <p className='mt-6 text-lg leading-8 text-black'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis.
          </p>
        </div>
        <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-black sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16'>
          {values.map((value) => (
            <div key={value.name} className='relative pl-9'>
              <dt className='inline font-semibold text-black'>
                <value.icon
                  className='absolute top-1 left-1 h-5 w-5 text-sky-500'
                  aria-hidden='true'
                />
                {value.name}
              </dt>{' '}
              <dd className='inline'>{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
}

const values = [
  {
    name: 'Be world-class.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Take responsibility.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Be supportive.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
    icon: UserGroupIcon,
  },
  {
    name: 'Always learning.',
    description:
      'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Share everything you know.',
    description:
      'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    icon: SparklesIcon,
  },
  {
    name: 'Enjoy downtime.',
    description:
      'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
    icon: SunIcon,
  },
]
