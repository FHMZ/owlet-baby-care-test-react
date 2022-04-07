import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import React, { ChangeEvent, FormEvent } from 'react'
import { useValidateForm } from '../../hooks/useValidateForm'
import { useAppContext } from '../../providers'
import {
  ADD_NEW_BOOK,
  EDIT_NEW_BOOK,
  LAST_NAME_ERROR_MSG,
  NAME_ERROR_MSG,
  PHONE_NUM_ERROR_MSG,
} from '../../utils/constants'
import Input from '../Input'

const FormDialog: React.FC = () => {
  const {
    handlePhoneBookInsert,
    handlePhoneBookUpdate,
    openDialog,
    handleShowDialog,
    personPhoneBook,
    setPersonPhoneBook,
    action,
  } = useAppContext()

  const formTitle = action === 'insert' ? ADD_NEW_BOOK : EDIT_NEW_BOOK

  const { error, setError } = useValidateForm(personPhoneBook)

  /**
   * @param e - A function that is called every time the some form field change.
   * @param {e} e - The event from field.
   */
  function handleFormChange(
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setPersonPhoneBook({
      ...personPhoneBook,
      [e.target.name]: e.target.value,
    })
  }

  function handleValidateForm() {
    let fields = { name: '', lastName: '', phoneNumber: '' }
    fields.name = personPhoneBook.name ? '' : NAME_ERROR_MSG
    fields.lastName = personPhoneBook.lastName ? '' : LAST_NAME_ERROR_MSG
    fields.phoneNumber = personPhoneBook.phoneNumber ? '' : PHONE_NUM_ERROR_MSG
    setError({ ...fields })
    return Object.values(fields).every((ex) => ex === '')
  }

  function handlePhoneBookSaveClick(e: FormEvent) {
    e.preventDefault()
    if (handleValidateForm()) {
      if (action === 'insert') {
        handlePhoneBookInsert(personPhoneBook)
      } else {
        handlePhoneBookUpdate(personPhoneBook)
      }
      handleShowDialog()
    }
  }

  return (
    <Dialog open={openDialog} onClose={handleShowDialog}>
      <DialogTitle>{formTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill all the text fields and press save to book a new Phone.
        </DialogContentText>
        <Input
          autoFocus={true}
          required={true}
          value={personPhoneBook.name}
          onChange={handleFormChange}
          id="personName"
          label="Name"
          name="name"
          type="text"
          error={error.name}
        />
        <Input
          required={true}
          value={personPhoneBook.lastName}
          onChange={handleFormChange}
          id="personLastName"
          label="Last Name"
          name="lastName"
          type="text"
          error={error.lastName}
        />
        <Input
          required={true}
          value={personPhoneBook.phoneNumber}
          onChange={handleFormChange}
          id="personPhoneNumber"
          label="Phone Number"
          name="phoneNumber"
          type="text"
          error={error.phoneNumber}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleShowDialog}>Cancel</Button>
        <Button onClick={handlePhoneBookSaveClick}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog
