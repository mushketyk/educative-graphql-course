import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import AddIcon from '@mui/icons-material/Add'
import LoginIcon from '@mui/icons-material/Login'
import HomeIcon from '@mui/icons-material/Home'

import {
  Link,
} from 'react-router-dom'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display='flex' flexGrow={1}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h6" >
              Product Hunt Clone
            </Typography>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group">

              <Button
                variant="contained"
                size="medium"
                startIcon={<HomeIcon />}
                component={Link}
                to="/"
              >
                Home
              </Button>
              <Button
                variant="contained"
                size="medium"
                startIcon={<AddIcon />}
                component={Link}
                to="/create"
              >
                Add new product
              </Button>
            </ButtonGroup>

          </Stack>
        </Box>

        <Button
          variant="contained"
          size="medium"
          startIcon={<LoginIcon />}
          component={Link}
          to="/create"
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}
