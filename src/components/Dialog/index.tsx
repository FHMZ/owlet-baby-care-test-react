import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import React, { FormEvent } from 'react'
import { useValidateForm } from '../../hooks/useValidateForm'
import { IPerson } from '../../models/person'
import { useAppContext } from '../../providers'
import Input from '../Input'

interface IDialogProps {
  onShowDialog: () => any
  open: boolean
  person?: IPerson
}

const FormDialog: React.FC<IDialogProps> = ({ person }) => {
  const { handleAddPhoneBook, openDialog, handleShowDialog } = useAppContext()

  const formTitle = person !== undefined ? 'New Phone Book' : 'Edit Phone Book'
  const personPhoneBook = {
    name: person?.name,
    lastName: person?.lastName,
    phoneNumber: person?.phoneNumber,
  }
  const { form, error, setError, onFormChange } =
    useValidateForm(personPhoneBook)

  function handleValidateForm() {
    let fields = { name: '', lastName: '', phoneNumber: '' }
    fields.name = form.name ? '' : 'Name field can not be empty.'
    fields.lastName = form.lastName ? '' : 'Last Name field can not be empty.'
    fields.lastName = form.phoneNumber
      ? ''
      : 'Phone Number field can not be empty.'
    setError({ ...fields })
    return Object.values(fields).every((ex) => ex === '')
  }

  function handleAddOnePhoneBook(e: FormEvent) {
    e.preventDefault()
    if (handleValidateForm()) {
      handleAddPhoneBook(form)
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
          required={true}
          value={personPhoneBook.name}
          onChange={onFormChange}
          autoFocus
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
          onChange={onFormChange}
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
          onChange={onFormChange}
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
