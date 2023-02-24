import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormField } from '../../FormField'
// import { setCookie } from 'nookies'
import { useState } from 'react'
import { ICreateUserDto } from '../../../typings'
import { Alert, Button, Typography } from '@mui/material'
import { RegisterFormSchema } from '../../../utils/schemas/registerValidation'
// import { useAppDispatch } from '../../../redux/hooks'
// import { setuserData } from '../../../redux/slices/user'
// import { Api } from '../../../utils/api'

interface Props {}

interface IFormInputs {
  name: string
  surname: string
  email: string
  password: string
}

export const RegisterForm: React.FC<Props> = ({}) => {
  // const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')
  const formHook = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  })

  const onSubmit = async (dto: ICreateUserDto) => {
    try {
      // const data = await Api().user.register(dto)
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
        <Typography variant="h5">Register</Typography>
        <FormField name="name" label="Name" />
        <FormField name="surname" label="SurName" />
        <FormField name="email" label="Email" />
        <FormField name="password" label="Password" />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <Button
          disabled={!formHook.formState.isValid || formHook.formState.isSubmitting}
          type="submit"
          onClick={() => console.log('register')}
          className="mb-15 bg-cyan-400"
          variant="contained"
          fullWidth
        >
          Register
        </Button>
      </form>
    </FormProvider>
  )
}
