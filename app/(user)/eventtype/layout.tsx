import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <div className="flex-1">{children}</div>
    </main>
  )
}

export default RootLayout
