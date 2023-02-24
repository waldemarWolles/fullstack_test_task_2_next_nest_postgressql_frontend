import { TextField } from '@mui/material'
import React from 'react'

import { useFormContext } from 'react-hook-form'

interface FormFieldProps {
  name: string
  label: string
}

export const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const { register, formState } = useFormContext()
  return (
    <TextField
      {...register(name)}
      name={name}
      label={label}
      type={name}
      variant="outlined"
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message?.toString()}
    />
  )
}
