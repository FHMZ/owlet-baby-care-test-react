import React, { createContext, useContext, useState } from 'react'
import { IPerson } from '../models/person'

interface IAppContext {
  action: 'insert' | 'update'
  setAction: (type: 'insert' | 'update') => void
  phoneBookList: IPerson[]
  setPhoneBookList: (data: IPerson[]) => void
  handlePhoneBookInsert: (person: IPerson) => void
  handlePhoneBookUpdate: (person: IPerson) => void
  openDialog: boolean
  handleShowDialog: () => void
  handlePhoneBookEditClick: (data: IPerson) => void
  handlePhoneBookDeleteClick: (id: number) => void
  personPhoneBook: IPerson
  setPersonPhoneBook: (data: IPerson) => void
  handleFormChange: (e: any) => any
  handleOpenPhoneBookDialog: () => void
  handleSearchPhoneBook: (query: string) => void
}

const AppContext = createContext({} as IAppContext)

export const AppProvider: React.FC = ({ children }) => {
  const [action, setAction] = useState<'insert' | 'update'>('insert')
  const [phoneBookList, setPhoneBookList] = useState<IPerson[]>([])
  const [phoneBookListSec, setPhoneBookListSec] = useState<IPerson[]>([])
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
    phoneBookList.map((item, i) => (item.id = i))
  }

  function handlePhoneBookInsert(person: IPerson) {
    person.id = phoneBookList.length
    setPhoneBookList([...phoneBookList, person])
    setPhoneBookListSec([...phoneBookListSec, person])
  }

  function handlePhoneBookUpdate(person: IPerson) {
    const phoneBookListAux = Array.from(phoneBookList)
    phoneBookListAux.splice(person.id, 1, person)
    setPhoneBookList(phoneBookListAux)
    setPhoneBookListSec(phoneBookListAux)
  }

  function handleShowDialog() {
    setOpenDialog(!openDialog)
  }

  function handlePhoneBookEditClick(person: IPerson) {
    handleShowDialog()
    setAction('update')
    setPersonPhoneBook(person)
  }

  function handlePhoneBookDeleteClick(id: number) {
    const phoneBookListAux = Array.from(phoneBookList)
    phoneBookListAux.splice(id, 1)
    phoneBookListAux.map((item, i) => (item.id = i))
    setPhoneBookList(phoneBookListAux)
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
    handlePhoneBookEditClick,
    handlePhoneBookDeleteClick,
    personPhoneBook,
    setPersonPhoneBook,
    handleFormChange,
    handleOpenPhoneBookDialog,
    handleSearchPhoneBook,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
