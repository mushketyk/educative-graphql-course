import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
import PropTypes from 'prop-types'
import CircularProgress from '@mui/material/CircularProgress'
import GraphQLError from './GraphQLError'
import './ProductsList.css'

function ProductsList(props) {
  const {products, error, loading, refetch} = props
  return (
    <Grid container spacing={3} className="productsList">
      {renderProductsOrGraphQLState(products, error, loading, refetch)}
    </Grid>
  )
}

function renderProductsOrGraphQLState(products, error, loading, refetch) {
  if (loading) {
    return <CircularProgress />
  } else if (error) {
    return <GraphQLError
      error={error}
      refetch={refetch} />
  } else {
    return renderProducts(products)
  }
}

function renderProducts(products) {
  return products.map((product) => (
    <Product
      product={product}
      key={product.id} />
  ))
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired,
}

export default ProductsList