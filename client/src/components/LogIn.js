import React from 'react'
import { CircularProgress, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LaunchIcon from '@mui/icons-material/Launch'
import { useMutation, gql } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import './LogIn.css'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useAuth } from './AuthContext'


const validationSchema = yup.object({
  userName: yup
    .string('Enter username')
    .required('Username is required'),
  password: yup
    .string('Enter password')
    .required('Password is required'),
})

const LOG_IN = gql`
  mutation Mutation($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      expiresIn
    }
  }
`

function LogIn() {

  const {setAuthenticated} = useAuth()
  const [
    mutateFunction,
    {
      loading,
      error
    }
  ] = useMutation( LOG_IN )

  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      console.log(JSON.stringify(values, null, 2))
      try {

        const res = await mutateFunction({
          variables: {
            userName: values.userName,
            password: values.password,
          },
        })
        console.log(res)
        localStorage.setItem(
          'expiresAt',
          Date.now() + res.data.login.expiresIn
        )
        setAuthenticated(true)
        history.push('/')
      } catch (e) {
        console.log(e)
      }
    },
  })

  return (
    <>
      <Typography variant="h3">Log in</Typography>

      {error && <Typography
        variant="body2"
        style={{color:'#c62828'}}
        className='formField'>
        Failed to login
      </Typography>}

      <form noValidate onSubmit={formik.handleSubmit}>
        <TextField
          id="userName"
          name="userName"
          label="Username"
          variant="outlined"
          fullWidth
          required
          className='formField'
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          required
          className='formField'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<LaunchIcon />}
          disabled={loading}
        >
          {loading && <CircularProgress size={14} />}
          {!loading && 'Log in'}
        </Button>
      </form>
    </>
  )
}


export default LogIn
