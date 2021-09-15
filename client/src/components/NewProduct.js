import React from 'react'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LaunchIcon from '@mui/icons-material/Launch'
import Autocomplete from '@mui/material/Autocomplete'
import Chip from '@mui/material/Chip'
import './NewProduct.css'

const categories =[
  {
    id: '1',
    name: 'Frameworks',
    slug: 'frameworks'
  },
  {
    id: '2',
    name: 'API',
    slug: 'api'
  },
]

function NewProduct() {

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
        <Autocomplete
          multiple
          id="size-small-filled-multi"
          size="medium"
          options={categories}
          getOptionLabel={(option) => option.name}
          defaultValue={[categories[0]]}
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

export default NewProduct
