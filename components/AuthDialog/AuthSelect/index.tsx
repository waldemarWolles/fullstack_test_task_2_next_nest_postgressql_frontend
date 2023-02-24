import React from 'react'
import { Button, Typography } from '@mui/material'

import { FormTypes } from '..'

interface AuthSelectProps {
  onChangeForm: (value: FormTypes) => void
}

export const AuthSelect: React.FC<AuthSelectProps> = ({ onChangeForm }) => {
  return (
    <>
      <Typography variant="h5">Sign in or Login</Typography>
      <Button onClick={() => onChangeForm('login')} className="mb-15 bg-cyan-400" variant="contained" fullWidth>
        Login
      </Button>
      <Button onClick={() => onChangeForm('register')} className="mb-15 bg-cyan-400" variant="contained" fullWidth>
        Register
      </Button>
    </>
  )
}
