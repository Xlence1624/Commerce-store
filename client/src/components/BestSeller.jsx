import React from 'react'
import ProductCard from '../pages/ProductCard'
import { useAppContext} from "../context/AppContext.jsx"

const BestSeller = () => {
    const {products} = useAppContext()
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 w-full'>
          {products.filter((product) => product.inStock).slice(0,5).map((product, index) => (
            <ProductCard key={index} product={product} />

          ))}

        </div>
      
    </div>
  )
}

export default BestSeller
