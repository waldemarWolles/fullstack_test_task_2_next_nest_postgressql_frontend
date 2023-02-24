'use client'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import AuthDialog from './AuthDialog'

const Header = () => {
  const [openAuthDialog, setOpenAuthDialog] = React.useState(false)

  const handleClickOpen = () => {
    setOpenAuthDialog(true)
  }

  const handleClose = () => {
    setOpenAuthDialog(false)
  }

  // React.useEffect(() => {
  //   if (openAuthDialog && userData) {
  //     setOpenAuthDialog(false)
  //   }
  // }, [openAuthDialog, userData])

  // React.useEffect(() => {
  //   if (openAuthDialog) {
  //     setOpenAuthDialog(false)
  //   }
  // }, [openAuthDialog])

  return (
    <div className="p-5 bg-blue-500">
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Home
      </Link>
      <Button onClick={handleClickOpen} className="px-2 py-1 ml-10 hover:bg-neutral-50 bg-white text-blue-500 rounded-lg">
        Auth
      </Button>
      <AuthDialog open={openAuthDialog} onClose={handleClose} />
    </div>
  )
}

export default Header
