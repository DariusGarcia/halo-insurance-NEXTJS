import React from 'react'
import FaqComponent from '../../../components/faq/faq'
import { createClient } from 'next-sanity'

export default function Faq({ faqText }) {
  return <FaqComponent faqText={faqText} />
}

const client = createClient({
  projectId: 'uanlttdv',
  dataset: 'production',
  apiVersion: '2023-03-16',
  useCdn: false,
})

export async function getStaticProps() {
  const faqText = await client.fetch(`*[_type == "faq"]`)

  return {
    props: {
      faqText,
    },
  }
}
