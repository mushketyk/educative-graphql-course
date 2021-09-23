import Typography from '@mui/material/Typography'
import { useQuery, gql } from '@apollo/client'
import ProductsList from './ProductsList'

import React from 'react'

export const GET_ALL_PRODUCTS = gql`
query {
  allProducts {
    id
    description
    name
    url
    numberOfVotes
    publishedAt
    author {
      id
      userName
      fullName
    }
    categories {
      id
      slug
      name
    }
  }
}
`

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
