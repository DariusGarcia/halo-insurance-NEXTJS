import ProductsShowcase from '@/components/products/productsShowcase'
import ProductFeatures from '@/components/products/productFeatures'
import React from 'react'
import ProductsTestimonials from '@/components/testimonials/productTestimonials'
import FaqComponent from '@/components/faq/faq'

export default function index() {
  return (
    <div className='h-full'>
      <ProductsShowcase />
      <ProductFeatures />
      <ProductsTestimonials />
      <FaqComponent />
    </div>
  )
}
