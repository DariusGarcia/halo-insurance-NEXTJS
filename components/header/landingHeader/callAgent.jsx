import { useState } from 'react'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/20/solid'

export default function CallAgent() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(true)
  }

  const onLeave = () => {
    setHover(false)
  }

  return (
    <Link
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role='button'
      tabIndex='-3'
      className='w-full sm:w-max p-2 leading-6 text-gray-900 md:bg-stone-100 md:hover:bg-stone-200 rounded-lg text-sm font-semibold '
      // TODO: change cellphone number
      href='tel:5624470025'
    >
      {hover
        ? [
            <span
              key='call an agent'
              className='flex flex-row w-32 h-4 items-center justify-center gap-2 text-center text-xs'
            >
              <PhoneIcon className='w-4' />
              (562) 447-0025
            </span>,
          ]
        : [
            <span
              key='phone icon'
              className='flex flex-row w-32 h-4 items-center justify-center gap-2 text-center'
            >
              <PhoneIcon className='w-4' />
              Call an agent
            </span>,
          ]}
    </Link>
  )
}
