import React from 'react'
import Typography from '@mui/material/Typography'
import ProductsList from './ProductsList'
import { useQuery } from '@apollo/client'

import {
  useParams
} from 'react-router-dom'
import {GET_PRODUCTS_BY_AUTHOR} from './queries'

export default function ProductsByUser() {
  const { userName } = useParams()

  const {
    data,
    loading,
    error,
    refetch
  } = useQuery(GET_PRODUCTS_BY_AUTHOR, {
    variables: { authorName: userName },
    fetchPolicy: 'network-only'
  })

  return (
    <>
      <Typography variant="h3">Products by user {userName}</Typography>
      <ProductsList
        products={data?.productsByAuthor || []}
        loading={loading}
        error={error}
        refetch={refetch} />
    </>
  )
}
