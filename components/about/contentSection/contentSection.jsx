import Image from 'next/image'

export default function ContentSection() {
  return (
    <>
      {/* Content section */}
      <div className='mx-auto mt-20 max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
          <div className='grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-black lg:max-w-none lg:grid-cols-2'>
            <div>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <p className='mt-8'>
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas.
              </p>
            </div>
            <div>
              <p>
                Erat pellentesque dictumst ligula porttitor risus eget et eget.
                Ultricies tellus felis id dignissim eget. Est augue maecenas
                risus nulla ultrices congue nunc tortor. Enim et nesciunt
                doloremque nesciunt voluptate.
              </p>
              <p className='mt-8'>
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
          <dl className='mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4'>
            {stats.map((stat, statIdx) => (
              <div
                key={statIdx}
                className='flex flex-col-reverse gap-y-3 border-l border-black/20 pl-6'
              >
                <dt className='text-base leading-7 text-black'>{stat.label}</dt>
                <dd className='text-3xl font-semibold tracking-tight text-black'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Image section */}
      <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
        <Image
          width={1000}
          height={1000}
          src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80'
          alt='about page header'
          className='aspect-[9/4] w-full object-cover xl:rounded-3xl'
        />
      </div>
    </>
  )
}

const stats = [
  { label: 'Business was founded', value: '2022' },
  { label: 'People on the team', value: '10+' },
  { label: 'Users with us', value: '1000' },
  { label: 'Et labore commodo nulla aliqua', value: '$1M' },
]
