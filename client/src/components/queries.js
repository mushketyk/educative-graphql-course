
import { gql } from '@apollo/client'

const PRODUCTS_FRAGMENT = gql`
fragment ProductsData on Product {
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
`

export const GET_ALL_PRODUCTS = gql`
${PRODUCTS_FRAGMENT}
query AllProducts {
  allProducts {
    ...ProductsData
  }
}
`

export const GET_PRODUCTS_BY_AUTHOR = gql`
${PRODUCTS_FRAGMENT}
query($authorName: String!) {
  productsByAuthor(authorName: $authorName) {
    ...ProductsData
  }
}
`

export const GET_PRODUCTS_IN_CATEGORY = gql`
${PRODUCTS_FRAGMENT}
query($categorySlug: String!) {
    productsByCategory(slug: $categorySlug) {
    ...ProductsData
  }
}
`