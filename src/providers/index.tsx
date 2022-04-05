import React, { createContext, useContext, useState } from 'react'
import { IPerson } from '../models/person'

interface TAppContext {
  phoneBookList: IPerson[]
  setPhoneBookList: (data: IPerson[]) => void
  handleAddPhoneBook: (person: IPerson) => void
  openDialog: boolean
  handleShowDialog: () => void
}

const AppContext = createContext({} as TAppContext)

export const AppProvider: React.FC = ({ children }) => {
  const [phoneBookList, setPhoneBookList] = useState<IPerson[]>([])
  const [openDialog, setOpenDialog] = useState(false)

  function handleAddPhoneBook(person: IPerson) {
    setPhoneBookList([...phoneBookList, person])
  }

  function handleShowDialog() {
    setOpenDialog(!openDialog)
  }

  const values = {
    phoneBookList,
    setPhoneBookList,
    handleAddPhoneBook,
    openDialog,
    handleShowDialog,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
