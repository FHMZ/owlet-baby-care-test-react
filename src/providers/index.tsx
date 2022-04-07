import React, { createContext, useContext, useState } from 'react'
import { IPerson } from '../models/person'

interface IAppContext {
  action: 'insert' | 'update'
  setAction: (type: 'insert' | 'update') => void
  phoneBookList: IPerson[]
  setPhoneBookList: (persons: IPerson[]) => void
  handlePhoneBookInsert: (person: IPerson) => void
  handlePhoneBookUpdate: (person: IPerson) => void
  openDialog: boolean
  handleShowDialog: () => void
  handleEditClick: (index: number, person: IPerson) => void
  handleDeleteClick: (index: number, id: number) => void
  personPhoneBook: IPerson
  setPersonPhoneBook: (person: IPerson) => void
  handleFormChange: (e: any) => any
  handleOpenDialog: () => void
  handleSearchPhoneBook: (query: string) => void
}

const initForm: IPerson = {
  id: 0,
  name: '',
  lastName: '',
  phoneNumber: '',
}

const AppContext = createContext({} as IAppContext)

export const AppProvider: React.FC = ({ children }) => {
  const [action, setAction] = useState<'insert' | 'update'>('insert')
  const [phoneBookList, setPhoneBookList] = useState<IPerson[]>([])
  const [listIndex, setListIndex] = useState(0)
  const [phoneBookListSec, setPhoneBookListSec] = useState<IPerson[]>([])
  const [openDialog, setOpenDialog] = useState(false)
  const [personPhoneBook, setPersonPhoneBook] = useState<IPerson>(initForm)

  function handleFormChange(e: any) {
    setPersonPhoneBook({
      ...personPhoneBook,
      [e.target.name]: e.target.value,
    })
  }

  function handleOpenDialog() {
    setPersonPhoneBook(initForm)
    setAction('insert')
    handleShowDialog()
  }

  function handleSearchPhoneBook(query: string) {
    const serchedList = phoneBookListSec.filter((el) => {
      return (
        el.name.toLowerCase().includes(query.toLowerCase()) ||
        el.phoneNumber.toLowerCase().includes(query.toLowerCase())
      )
    })

    if (serchedList.length !== 0) {
      setPhoneBookList(serchedList)
    } else {
      setPhoneBookList(phoneBookListSec)
    }
  }

  function handlePhoneBookInsert(person: IPerson) {
    person.id = phoneBookListSec.length
    setPhoneBookList([...phoneBookList, person])
    setPhoneBookListSec([...phoneBookListSec, person])
  }

  function handlePhoneBookUpdate(person: IPerson) {
    let phoneBookListAux = Array.from(phoneBookList)
    phoneBookListAux.splice(listIndex, 1, person)
    setPhoneBookList(phoneBookListAux)
    phoneBookListAux = Array.from(phoneBookListSec)
    phoneBookListAux.splice(person.id, 1, person)
    setPhoneBookListSec(phoneBookListAux)
  }

  function handleShowDialog() {
    setOpenDialog(!openDialog)
  }

  function handleEditClick(index: number, person: IPerson) {
    handleShowDialog()
    setAction('update')
    setListIndex(index)
    setPersonPhoneBook(person)
  }

  function handleDeleteClick(index: number, id: number) {
    let phoneBookListAux = Array.from(phoneBookList)
    phoneBookListAux.splice(index, 1)
    phoneBookListAux.map((item, i) => (item.id = i))
    setPhoneBookList(phoneBookListAux)
    phoneBookListAux = Array.from(phoneBookListSec)
    phoneBookListAux.splice(id, 1)
    phoneBookListAux.map((item, i) => (item.id = i))
    setPhoneBookListSec(phoneBookListAux)
  }

  const values = {
    action,
    setAction,
    phoneBookList,
    setPhoneBookList,
    handlePhoneBookInsert,
    handlePhoneBookUpdate,
    openDialog,
    handleShowDialog,
    handleEditClick,
    handleDeleteClick,
    personPhoneBook,
    setPersonPhoneBook,
    handleFormChange,
    handleOpenDialog,
    handleSearchPhoneBook,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
