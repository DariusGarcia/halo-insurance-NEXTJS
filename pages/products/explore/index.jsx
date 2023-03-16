import ProductsShowcase from '@/components/products/productsShowcase'
import ProductFeatures from '@/components/products/productFeatures'
import React from 'react'
import ProductsTestimonials from '@/components/testimonials/productTestimonials'
import FaqComponent from '@/components/faq/faq'
import { createClient } from 'next-sanity'

export default function index({ faqText }) {
  return (
    <div className='h-full'>
      <ProductsShowcase />
      <ProductFeatures />
      <ProductsTestimonials />
      <FaqComponent faqText={faqText} />
    </div>
  )
}

const client = createClient({
  projectId: 'uanlttdv',
  dataset: 'production',
  apiVersion: '2023-03-16',
  useCdn: false,
})

export async function getStaticProps() {
  const landingHeader = await client.fetch(`*[_type == "landingHeader"]`)
  const testimonialsText = await client.fetch(`*[_type == "testimonials"]`)
  const faqText = await client.fetch(`*[_type == "faq"]`)
  return {
    props: {
      landingHeader,
      testimonialsText,
      faqText,
    },
  }
}
