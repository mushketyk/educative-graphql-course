import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'
import {AuthProvider} from './components/AuthContext'

const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
})

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          products: {
            keyArgs: false,
            merge: (existing = [], incoming, { args: { skip = 0 }}) => {
              const merged = [...existing]
              incoming.forEach((element, index) => {
                merged[skip + index] = element
              })
              return merged
            },
          }
        }
      }
    }
  }),
  link,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ApolloProvider>,
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
