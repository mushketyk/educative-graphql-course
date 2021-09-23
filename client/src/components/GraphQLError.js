import React from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import ErrorIcon from '@mui/icons-material/Error'

function GraphQLError(props) {
  const {error, refetch} = props
  return <Paper sx={{ p: 2, margin: 'auto', flexGrow: 1 }}>
    <Grid item xs container direction="column"
      justifyContent="center"
      spacing={2}
      alignItems="center" >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <ErrorIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        An error has occurred: {error.message}
      </Typography>
      <Button
        variant="contained"
        size="medium"
        startIcon={<AutorenewIcon />}
        onClick={refetch}
      >
        Refetch
      </Button>
    </Grid>
  </Paper>
}

GraphQLError.propTypes = {
  error: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
}

export default GraphQLError