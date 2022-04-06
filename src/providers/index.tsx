import React, { createContext, useContext, useState } from 'react'
import { IPerson } from '../models/person'

interface IAppContext {
  phoneBookList: IPerson[]
  setPhoneBookList: (data: IPerson[]) => void
  handlePhoneBookInsert: (person: IPerson) => void
  openDialog: boolean
  handleShowDialog: () => void
  handlePhoneBookEdit: (person: IPerson) => void
  handlePhoneBookDelete: (id: number) => void
  personPhoneBook: IPerson
  setPersonPhoneBook: (data: IPerson) => void
  handleFormChange: (e: any) => any
  handleOpenPhoneBookDialog: () => void
}

const AppContext = createContext({} as IAppContext)

export const AppProvider: React.FC = ({ children }) => {
  const [phoneBookList, setPhoneBookList] = useState<IPerson[]>([])
  const [openDialog, setOpenDialog] = useState(false)
  const [personPhoneBook, setPersonPhoneBook] = useState<IPerson>({
    id: 0,
    name: '',
    lastName: '',
    phoneNumber: '',
  })

  function handleFormChange(e: any) {
    setPersonPhoneBook({
      ...personPhoneBook,
      [e.target.name]: e.target.value,
    })
  }

  function handleOpenPhoneBookDialog() {
    setPersonPhoneBook({
      ...personPhoneBook,
      id: 0,
      name: '',
      lastName: '',
      phoneNumber: '',
    })
    handleShowDialog()
  }

  function handlePhoneBookInsert(person: IPerson) {
    let newItem = {
      id: phoneBookList.length + 1,
      name: person.name,
      lastName: person.lastName,
      phoneNumber: person.phoneNumber,
    }
    setPhoneBookList([...phoneBookList, newItem])
  }

  function handleShowDialog() {
    setOpenDialog(!openDialog)
  }

  function handlePhoneBookEdit(person: IPerson) {
    handleShowDialog()
    setPhoneBookList((prev) =>
      prev.map((item) => (item.id === person.id ? { ...item, person } : item))
    )
  }

  function handlePhoneBookDelete(id: number) {
    setPhoneBookList((prev) => prev.filter((item) => item.id !== id))
  }

  const values = {
    phoneBookList,
    setPhoneBookList,
    handlePhoneBookInsert,
    openDialog,
    handleShowDialog,
    handlePhoneBookEdit,
    handlePhoneBookDelete,
    personPhoneBook,
    setPersonPhoneBook,
    handleFormChange,
    handleOpenPhoneBookDialog,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
