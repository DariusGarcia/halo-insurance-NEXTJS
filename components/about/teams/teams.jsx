import Image from 'next/image'

export default function Teams() {
  return (
    <div>
      {/* Team section */}
      <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Our team
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in
            neque vel omnis. Eos error odio. Qui fugit voluptatibus eum culpa.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4'
        >
          {team.map((person) => (
            <li key={person.name}>
              <Image
                width={500}
                height={500}
                className='aspect-[14/13] w-full rounded-2xl object-cover'
                src={person.imageUrl}
                alt=''
              />
              <h3 className='mt-6 text-lg font-semibold leading-8 tracking-tight text-white'>
                {person.name}
              </h3>
              <p className='text-base leading-7 text-gray-300'>{person.role}</p>
              <p className='text-sm leading-6 text-gray-500'>
                {person.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const team = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
  },
  // More people...
]
