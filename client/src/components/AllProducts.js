import Typography from '@mui/material/Typography'
import { useQuery } from '@apollo/client'
import ProductsList from './ProductsList'

import React from 'react'
import { GET_ALL_PRODUCTS } from './queries'

export default function AllProducts() {

  const {
    data,
    loading,
    error,
    refetch
  } = useQuery(GET_ALL_PRODUCTS)

  return (
    <>
      <Typography variant="h3">Products</Typography>
      <ProductsList
        products={data?.allProducts || []}
        loading={loading}
        error={error}
        refetch={refetch} />
    </>
  )
}
