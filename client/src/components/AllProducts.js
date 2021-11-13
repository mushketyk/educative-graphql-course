import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material'
import { useQuery } from '@apollo/client'
import ProductsList from './ProductsList'

import React from 'react'
import { PRODUCTS_PAGINATION } from './queries'

export default function AllProducts() {

  const {
    data,
    loading,
    error,
    refetch,
    fetchMore,
  } = useQuery(PRODUCTS_PAGINATION, {
    variables: {
      skip: 0,
      limit: 2,
    }
  })
  const products = data?.products || []

  return (
    <>
      <Typography variant="h3">Products</Typography>
      <ProductsList
        products={products}
        loading={loading}
        error={error}
        refetch={refetch} />
      <Grid
        container
        className='content'
        spacing={2}
        justifyContent="center"
      >
        <Button
          variant="contained"
          disabled={!!(loading || error)}
          onClick={() => {
            fetchMore({
              variables: {
                skip: products.length,
                limit: 2,
              }
            })
          }}>
          Load more
        </Button>
      </Grid>
    </>

  )
}
