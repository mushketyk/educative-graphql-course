import React from 'react'

// import { mount } from 'enzyme'
// import sinon from 'sinon'
import { render, screen, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import AllProducts from './AllProducts'
import { PRODUCTS_PAGINATION } from './queries'

const mocks = [
  {
    request: {
      query: PRODUCTS_PAGINATION,
      variables: {
        skip: 0,
        limit: 2,
      },
    },
    result: {
      data: {
        products: [
          {
            id: '618eccef08a0ce64c0f1e762',
            description: 'Interactive Courses for Software Developers',
            name: 'Educative',
            url: 'https://educative.io/',
            numberOfVotes: 10,
            publishedAt: '2021-04-05T00:00:00.000Z',
            __typename: 'Product',
            author: {
              id: '3d6fad714086e3bfcfceac54',
              userName: 'ellen',
              fullName: 'Ellen James',
              __typename: 'User'
            },
            categories: [
              {
                id: '24e7451df05ed5cd4cf1041b',
                slug: 'education',
                name: 'Education',
                __typename: 'Category'
              }
            ]
          }
        ]
      }
    },
  },
]

const errorMock = [
  {
    request: {
      query: PRODUCTS_PAGINATION,
      variables: {
        skip: 0,
        limit: 2,
      },
    },
    error: new Error('test-error'),
  },
]

test('renders a list of products', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Router>
        <AllProducts />
      </Router>
    </MockedProvider>,
  )

  await waitFor(() => {
    screen.getByText('Educative')
  })
})

test('renders an error', async () => {
  render(
    <MockedProvider mocks={errorMock} addTypename={false}>
      <Router>
        <AllProducts />
      </Router>
    </MockedProvider>,
  )

  await waitFor(() => {
    screen.getByText(/An error has occurred/)
  })
})