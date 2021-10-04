import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import Header from './components/Header'
import Layout from './components/Layout'
import AllProducts from './components/AllProducts'
import ProductsByUser from './components/ProductsByUser'
import ProductsInCategory from './components/ProductsInCategory'
import NewProduct from './components/NewProduct'
import LogIn from './components/LogIn'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

const cache = createCache({
  key: 'css',
  prepend: true,
})

const theme = createTheme({
  palette: {
    background: {
      default: '#FAFAFA'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>
        <Router>
          <div className="App">
            <CssBaseline />
            <Header />
            <Layout>
              <Switch>
                <Route path="/create">
                  <NewProduct />
                </Route>
                <Route path="/login">
                  <LogIn />
                </Route>
                <Route path="/author/:userName">
                  <ProductsByUser />
                </Route>
                <Route path="/category/:slug">
                  <ProductsInCategory />
                </Route>
                <Route path="/">
                  <AllProducts />
                </Route>
              </Switch>
            </Layout>
          </div>
        </Router>
      </CacheProvider>
    </ThemeProvider>
  )
}

export default App
