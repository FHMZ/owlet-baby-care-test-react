import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import React, { FormEvent } from 'react'
import { useValidateForm } from '../../hooks/useValidateForm'
import { useAppContext } from '../../providers'
import Input from '../Input'

const FormDialog: React.FC = () => {
  const {
    handlePhoneBookInsert,
    openDialog,
    handleShowDialog,
    personPhoneBook,
    handleFormChange,
  } = useAppContext()
  /*const personPhoneBookForm: IPerson = {
    id: personPhoneBook.id,
    name: personPhoneBook?.name,
    lastName: personPhoneBook?.lastName,
    phoneNumber: personPhoneBook?.phoneNumber,
  }*/
  const formTitle =
    personPhoneBook !== undefined ? 'New Phone Book' : 'Edit Phone Book'

  const { error, setError } = useValidateForm(personPhoneBook)

  function handleValidateForm() {
    let fields = { name: '', lastName: '', phoneNumber: '' }
    fields.name = personPhoneBook.name ? '' : 'Name field can not be empty.'
    fields.lastName = personPhoneBook.lastName
      ? ''
      : 'Last Name field can not be empty.'
    fields.lastName = personPhoneBook.phoneNumber
      ? ''
      : 'Phone Number field can not be empty.'
    setError({ ...fields })
    return Object.values(fields).every((ex) => ex === '')
  }

  function handleAddOnePhoneBook(e: FormEvent) {
    e.preventDefault()
    if (handleValidateForm()) {
      handlePhoneBookInsert(personPhoneBook)
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
          variant="standard"
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
          variant="standard"
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
          variant="standard"
          error={error.phoneNumber}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleShowDialog}>Cancel</Button>
        <Button onClick={handleAddOnePhoneBook}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog
