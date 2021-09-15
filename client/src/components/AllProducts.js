import React from 'react'
import Typography from '@mui/material/Typography'
import allProducts from './test-data'
import ProductsList from './ProductsList'

export default function AllProducts() {
  return (
    <>
      <Typography variant="h3">Products</Typography>
      <ProductsList products={allProducts} />
    </>
  )
}
