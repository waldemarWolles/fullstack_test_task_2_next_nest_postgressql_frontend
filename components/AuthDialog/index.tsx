'use client'

import React from 'react'

import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { AuthSelect } from './AuthSelect'
import { Dialog, DialogContent, DialogContentText } from '@mui/material'

interface SimpleDialogProps {
  open: boolean
  onClose: (value: string) => void
}

export type FormTypes = 'main' | 'login' | 'register'

const AuthDialog: React.FC<SimpleDialogProps> = ({ open, onClose }) => {
  const [formType, setFormType] = React.useState<FormTypes>('main')

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {formType === 'main' && <AuthSelect onChangeForm={setFormType} />}
          {formType === 'login' && <LoginForm />}
          {formType === 'register' && <RegisterForm />}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}
export default AuthDialog
