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
  index: number
  person: IPerson
}

const PhoneBookListItem: React.FC<IPersonProps> = ({ index, person }) => {
  const fullName = `${person.name} ${person.lastName}`
  const { handleEditClick, handleDeleteClick } = useAppContext()

  return (
    <>
      <ListItem
        secondaryAction={
          <>
            <IconButton edge="start" onClick={() => handleEditClick(index, person)}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => handleDeleteClick(index, person.id)}>
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
