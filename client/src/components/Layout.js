import React from 'react'
import { Grid } from '@mui/material'
import PropTypes from 'prop-types'
import './Layout.css'

function Layout(props) {
  const { children } = props
  return (
    <Grid
      container
      className='content'
      spacing={2}
      justifyContent="center"
    >
      <Grid item md={5} className='content'>
        {children}
      </Grid>
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
