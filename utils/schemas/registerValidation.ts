import * as yup from 'yup'

export const RegisterFormSchema = yup.object().shape({
  name: yup.string().required('required'),
  surname: yup.string().required('required'),
  email: yup.string().email('wrong email').required('required'),
  password: yup.string().min(6, 'Min length 6 symbols').required('required'),
})
