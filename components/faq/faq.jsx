import { Disclosure } from '@headlessui/react'
import {
  MinusSmallIcon,
  PlusSmallIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline'

export default function FaqComponent({ faqText }) {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-12 sm:py-12 lg:px-8'>
        <div className='mx-auto max-w-4xl '>
          <span className='flex flex-row items-center'>
            <h4 className='text-xl font-bold p-2 leading-10 tracking-tight text-sky-500'>
              FAQ
            </h4>
            <LightBulbIcon className='h-6 w-auto text-sky-600' />
          </span>
          <h3 className='text-2xl font-bold p-2 leading-10 tracking-tight text-gray-900 underline'>
            Frequently asked questions
          </h3>
          <dl className='mt-4 space-y-6 divide-y divide-gray-900/10'>
            {faqText?.length > 0 &&
              faqText.map((faq) => (
                <Disclosure as='div' key={faq._id} className='pt-6 '>
                  {({ open }) => (
                    <>
                      <dt className='hover:bg-stone-100 p-2 rounded-md'>
                        <Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-900'>
                          <span className='text-base font-semibold leading-7'>
                            {faq.faqQuestion}
                          </span>
                          <span className='ml-6 flex h-7 items-center'>
                            {open ? (
                              <MinusSmallIcon
                                className='h-6 w-6'
                                aria-hidden='true'
                              />
                            ) : (
                              <PlusSmallIcon
                                className='h-6 w-6'
                                aria-hidden='true'
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                        <p className='text-base leading-7 text-gray-600'>
                          {faq.faqAnswer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "What's kind of insurance plans does Halo offer?",
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    question: "What's kind of insurance plans does Halo offer?",
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    question: "What's kind of insurance plans does Halo offer?",
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    question: "What's kind of insurance plans does Halo offer?",
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    question: "What's kind of insurance plans does Halo offer?",
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    question: "What's kind of insurance plans does Halo offer?",
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
]
