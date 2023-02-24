import * as yup from 'yup'

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('wrong email').required('required'),
  password: yup.string().min(6, 'Min length 6 symbols').required('required'),
})
