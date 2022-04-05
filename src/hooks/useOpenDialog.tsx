import { useState } from 'react'

export const useOpenDialog = () => {
  const [openDialog, setOpenDialog] = useState(false)

  function handleShowDialog() {
    setOpenDialog(!openDialog)
  }

  return { handleShowDialog, openDialog }
}
