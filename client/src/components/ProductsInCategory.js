import React from 'react'
import Typography from '@mui/material/Typography'
import ProductsList from './ProductsList'
import allProducts from './test-data'

import {
  useParams
} from 'react-router-dom'

export default function ProductsInCategory() {
  const { slug } = useParams()

  return (
    <>
      <Typography variant="h3">Products by in category {slug}</Typography>
      <ProductsList products={allProducts} />
    </>
  )
}
