import React from 'react'
import { CircularProgress, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LaunchIcon from '@mui/icons-material/Launch'
import Autocomplete from '@mui/material/Autocomplete'
import Chip from '@mui/material/Chip'
import { useQuery, gql } from '@apollo/client'
import GraphQLError from './GraphQLError'
import './NewProduct.css'

const GET_ALL_CATEGORIES = gql`
  query {
    allCategories {
      id
      slug
      name
    }
  }
`

function NewProduct() {

  const {
    data,
    loading,
    error,
    refetch
  } = useQuery(GET_ALL_CATEGORIES)

  if (error) {
    return <GraphQLError
      error={error}
      refetch={refetch} />
  }

  const categories = data?.allCategories || []
  return (
    <>
      <Typography variant="h3">Create New Product</Typography>
      <form noValidate>
        <TextField
          label="Product name"
          variant="outlined"
          fullWidth
          required
          className='formField'
        />
        <TextField
          label="Product description"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={5}
          className='formField'
        />
        <TextField
          label="URL"
          variant="outlined"
          fullWidth
          required
          className='formField'
        />
        {renderAutocomplete(loading, categories)}
      </form>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        endIcon={<LaunchIcon />}
      >
        Create
      </Button>
    </>
  )
}

function renderAutocomplete(loading, categories) {
  if (loading) {
    return <CircularProgress />
  }


  return <Autocomplete
    multiple
    id="size-small-filled-multi"
    size="medium"
    options={categories}
    getOptionLabel={(option) => option.name}
    defaultValue={[]}
    renderTags={(value, getTagProps) =>
      value.map((option, index) => (
        <Chip
          key={option.id}
          variant="outlined"
          label={option.name}
          size="medium"
          {...getTagProps({ index })}
        />
      ))}
    renderInput={(params) => (
      <TextField
        {...params}
        variant="outlined"
        className='formField'
        label="Categories"
      />
    )}
  />
}

export default NewProduct
