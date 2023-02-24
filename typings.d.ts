export interface Event {
  id: number
  name: string
  description: string
  chosen: boolean
}

export interface ILoginDto {
  email: string
  password: string
}

export interface ICreateUserDto extends ILoginDto {
  name: string
  surname: string
}

export interface IResponseUserDto {
  id: number
  name: string
  surname: string
  email: string
  token: string
  createAt: string
  events: Event[]
  updatedAt: string
}
