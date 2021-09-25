import React from 'react'
import Typography from '@mui/material/Typography'
import ProductsList from './ProductsList'
import { gql, useQuery } from '@apollo/client'

import {
  useParams
} from 'react-router-dom'

const GET_PRODUCTS_BY_AUTHOR = gql`
query($authorName: String!) {
  productsByAuthor(authorName: $authorName) {
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

export default function ProductsByUser() {
  const { userName } = useParams()

  const {
    data,
    loading,
    error,
    refetch
  } = useQuery(GET_PRODUCTS_BY_AUTHOR, {
    variables: { authorName: userName },
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
