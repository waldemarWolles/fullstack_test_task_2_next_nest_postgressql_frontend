import React, { useState } from 'react'

import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormField } from '../../FormField'
import { LoginFormSchema } from '../../../utils/schemas/loginValidation'
import { ILoginDto } from '../../../typings'
import { Alert, Button, Typography } from '@mui/material'
// import { setCookie } from 'nookies'
// import { useAppDispatch } from '../../../redux/hooks'
// import { setuserData } from '../../../redux/slices/user'
// import { Api } from '../../../utils/api'

interface Props {}

interface IFormInputs {
  email: string
  password: string
}

export const LoginForm: React.FC<Props> = ({}) => {
  // const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')
  const formHook = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  })

  const onSubmit = async (dto: ILoginDto) => {
    try {
      // const data = await Api().user.login(dto)
      console.log(dto)
      // setCookie(null, 'tj_token', data.token, {
      //   maxAge: 30 * 24 * 60 * 60,
      //   path: '/',
      // })
      // setErrorMessage('')
      // dispatch(setuserData(data))
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.message)
      }
    }
  }

  return (
    <FormProvider {...formHook}>
      <form onSubmit={formHook.handleSubmit(onSubmit)}>
        <Typography variant="h5">Log in</Typography>
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <Button
          disabled={!formHook.formState.isValid || formHook.formState.isSubmitting}
          type="submit"
          onClick={() => console.log('login')}
          className="mb-15 bg-cyan-400"
          variant="contained"
          fullWidth
        >
          Login
        </Button>
      </form>
    </FormProvider>
  )
}
