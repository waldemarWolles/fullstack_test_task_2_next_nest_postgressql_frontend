import { ReactNode } from 'react'
import '../styles/globals.css'
import Header from '../components/Header'
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Web application</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
