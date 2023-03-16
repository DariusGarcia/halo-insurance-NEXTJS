import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function LandingTestimonials({ testimonialsText }) {
  return (
    <section className='lg:p-x8 bg-white py-12 px-6 sm:py-32'>
      <figure className='mx-auto max-w-2xl'>
        <h3 className='mb-8 text-center text-4xl font-semibold '>
          What our customers say
        </h3>
        <p className='sr-only'>5 out of 5 stars</p>
        <div className='flex gap-x-1 text-sky-600'>
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
          <StarIcon className='h-5 w-5 flex-none' aria-hidden='true' />
        </div>
        <blockquote className='mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9'>
          {testimonialsText?.length > 0 &&
            testimonialsText?.map((text) => (
              <p key={text?._id}>{text?.testimonials}</p>
            ))}
          {!testimonialsText?.length > 0 && <p>Error fetching content.</p>}
        </blockquote>
        <figcaption className='mt-10 flex items-center gap-x-6'>
          <Image
            className='h-12 w-12 rounded-full bg-gray-50'
            src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80'
            alt=''
            width={500}
            height={500}
          />
          <div className='text-sm leading-6'>
            <div className='font-semibold text-gray-900'>John Doe</div>
            <div className='mt-0.5 text-gray-600'>Company X</div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
