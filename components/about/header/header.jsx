export default function Header() {
  return (
    <>
      {/* Background */}
      <div className='absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'>
        <svg
          viewBox='0 0 1108 632'
          className='w-[69.25rem] flex-none'
          aria-hidden='true'
        >
          <path
            fill='url(#eee5076e-98f8-4901-b4c5-181a87854225)'
            fillOpacity='.25'
            d='M235.233 402.61 57.541 321.574.83 631.051 235.233 402.61l320.018 145.945c-65.036-115.26-134.286-322.756 109.01-230.654C968.382 433.027 1031 651.248 1092.23 459.361c48.98-153.51-34.51-321.107-82.37-385.717l-198.908 250.58L648.261.089 235.233 402.61Z'
          />
          <defs>
            <linearGradient
              id='eee5076e-98f8-4901-b4c5-181a87854225'
              x1='1220.59'
              x2='-85.053'
              y1='432.767'
              y2='638.715'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#0284c7' />
              <stop offset={1} stopColor='#9ca3af' />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Header section */}
      <div className='px-6 md:pt-0 lg:px-8'>
        <div className='mx-auto max-w-2xl pt-12 text-center '>
          <h2 className='text-4xl font-bold tracking-tight text-black sm:text-6xl'>
            Halo Insurance
          </h2>
          <p className='mt-6 text-lg leading-8 text-black'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>
    </>
  )
}
