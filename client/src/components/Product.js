import React from 'react'
import { Typography, Grid } from '@mui/material'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import './Product.css'
import IconButton from '@mui/material/IconButton'
import {
  Link,
} from 'react-router-dom'

function ProjectCard(props) {
  const {
    publishedAt,
    name,
    url,
    description,
    author,
    categories,
    numberOfVotes
  } = props.product
  return (
    <Grid item xs={12} md={12}>
      <Paper sx={{ p: 2, margin: 'auto', flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column"
              justifyContent="flex-start"
              spacing={2}
              alignItems="flex-start" >
              <Grid item>
                <Typography color="textSecondary" gutterBottom>
                  {renderDate(publishedAt)}
                </Typography>
                <a
                  href={url}
                  style={{ color: 'inherit'}}
                  rel="noopener">
                  {/* {name} */}
                  {/* <Box fontStyle='underline'> */}
                  <Typography variant="h4" component="h2">

                    {name}

                    {/* </Box> */}
                  </Typography>
                </a>
                <Typography variant="body1" className="description">
                  {description}

                </Typography>
              </Grid>
              <Grid item>
                <Chip
                  variant="outlined"
                  color="primary"
                  label={author.userName}
                  icon={<PersonOutlineIcon/>}
                  component={Link}
                  to={`/author/${author.userName}`}
                  clickable
                />
              </Grid>
              <Grid item>
                {
                  categories.map(category => {
                    return (
                      <Button
                        size="small"
                        component={Link}
                        variant="outlined"
                        to={`/category/${category.slug}`}
                        key={category.id}>
                        {category.name}
                      </Button>
                    )
                  })
                }
              </Grid>
            </Grid>
            <Grid container item xs={2} alignItems="center"
              justifyContent="center">
              <Grid
                xs={6}
                item
                container
                alignItems="center"
                direction="column">

                <IconButton aria-label="vote up">
                  <ArrowUpwardIcon />
                </IconButton>
                <Chip
                  size="medium"
                  label={`votes ${numberOfVotes}`}
                  color="primary" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

function renderDate(timestamp) {
  return timestamp.split('T')[0]
}

ProjectCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProjectCard
