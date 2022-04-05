import { Button, styled } from '@mui/material'
import { blue } from '@mui/material/colors'
import { MATERIAL_SHADOW } from '../../../../utils/constants'

export const StyledForm = styled('form')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(2),
}))

export const StyledLoginButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  padding: theme.spacing(1),
  backgroundColor: blue[800],
  borderRadius: theme.spacing(3),
  margin: theme.spacing(4, 0, 2),
  boxShadow: MATERIAL_SHADOW,
  '&:hover': {
    backgroundColor: blue[900],
  },
}))
