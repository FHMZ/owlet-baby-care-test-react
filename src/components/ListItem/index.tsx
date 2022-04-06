import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Divider, IconButton } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import * as React from 'react'
import { IPerson } from '../../models/person'
import { useAppContext } from '../../providers'
import ListItemAvatar from '../ListItemAvatar'

interface IPersonProps {
  person: IPerson
}

const PhoneBookListItem: React.FC<IPersonProps> = ({ person }) => {
  const fullName = `${person.name} ${person.lastName}`
  const { handlePhoneBookEditClick, handlePhoneBookDeleteClick } =
    useAppContext()

  return (
    <>
      <ListItem
        secondaryAction={
          <>
            <IconButton
              edge="start"
              onClick={() => handlePhoneBookEditClick(person)}
            >
              <EditOutlinedIcon />
            </IconButton>
            <IconButton
              edge="end"
              onClick={() => handlePhoneBookDeleteClick(person.id)}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </>
        }
      >
        <ListItemAvatar />
        <ListItemText primary={fullName} secondary={person.phoneNumber} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default PhoneBookListItem
