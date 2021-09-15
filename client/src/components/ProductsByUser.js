import React from 'react'
import Typography from '@mui/material/Typography'
import ProductsList from './ProductsList'
import allProducts from './test-data'

import {

  useParams
} from 'react-router-dom'

export default function ProductsByUser() {
  const { userName } = useParams()

  return (
    <>
      <Typography variant="h3">Products by user {userName}</Typography>
      <ProductsList products={allProducts} />
    </>
  )
}
